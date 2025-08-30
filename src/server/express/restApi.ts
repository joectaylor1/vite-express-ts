import packageJSON from "../../../package.json";
import express, { Application } from "express";
import cors from "cors";
import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json({ limit: "20mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve a successful response. For use with wait-on
app.get("/api/v1/health", (req, res) => {
  res.send({ status: "ok" });
});

app.get(`/api/v1/version`, (req: Request, res: Response) => {
  const respObj: RespExampleType = {
    id: 1,
    version: packageJSON.version,
    envVal: process.env.ENV_VALUE as string, // sample server-side env value
  };
  res.send(respObj);
});

app.post("/api/v1/attendance-response", async (req: Request, res: Response) => {
  const {
    email,
    phone,
    attending,
    dietry_requirements,
    comments,
    friday_evening_attendance,
    sunday_attendance,
    guest_name,
  } = req.body;

  try {
    const submission = await prisma.user.create({
      data: {
        email,
        phone,
        attending,
        dietry_requirements,
        comments,
        friday_evening_attendance,
        sunday_attendance,
        guest_name,
      },
    });

    res.status(201).json({ success: true, data: submission });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      const ErrorMessage = error.message;
      res.status(500).json({ success: false, error: ErrorMessage });
    } else {
      throw error;
    }
  }
});

app.use(express.static("./.local/vite/dist"));

export default app;

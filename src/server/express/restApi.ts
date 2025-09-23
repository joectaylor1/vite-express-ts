import packageJSON from "../../../package.json";
import express, { Application } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma/client";

const app: Application = express();
const prisma = new PrismaClient();

app.use(express.json({ limit: "200kb" }));
app.use(
  cors({
    origin: ["https://wedding.joecharlie.co.uk"],
    methods: ["GET", "POST"],
  })
);
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

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

    console.log("RSVP Saved:", submission);
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

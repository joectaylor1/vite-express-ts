-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "attending" BOOLEAN NOT NULL,
    "menu_choice" TEXT NOT NULL,
    "dietry_requirements" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "friday_evening_attendance" BOOLEAN NOT NULL,
    "sunday_attendance" BOOLEAN NOT NULL,
    "guest_name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

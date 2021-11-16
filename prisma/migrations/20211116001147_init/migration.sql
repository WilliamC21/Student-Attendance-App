-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "isTeacher" BOOLEAN NOT NULL,
    "totalClasses" INTEGER NOT NULL,
    "classesAttended" INTEGER NOT NULL,
    "attendance" INTEGER NOT NULL,
    "course" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ClassRoom" (
    "roomNum" TEXT NOT NULL PRIMARY KEY,
    "building" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lecture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "room" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,
    "classRoom" TEXT NOT NULL,
    CONSTRAINT "Lecture_classRoom_fkey" FOREIGN KEY ("classRoom") REFERENCES "ClassRoom" ("roomNum") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lecture_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lecture_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course" ("courseID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Course" (
    "courseID" TEXT NOT NULL PRIMARY KEY,
    "teacher" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Grade" (
    "gradeID" TEXT NOT NULL PRIMARY KEY,
    "gradePercent" INTEGER NOT NULL,
    "studentID" INTEGER NOT NULL,
    "returnDate" TEXT NOT NULL,
    "courseID" TEXT NOT NULL,
    CONSTRAINT "Grade_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grade_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course" ("courseID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CourseToUser" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Course" ("courseID") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToUser_AB_unique" ON "_CourseToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToUser_B_index" ON "_CourseToUser"("B");

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "totalClasses" INTEGER NOT NULL,
    "classesAttended" INTEGER NOT NULL,
    "attendance" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "isTeacher" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "ClassRoom" (
    "roomNum" TEXT NOT NULL PRIMARY KEY,
    "building" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lecture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lectureName" TEXT NOT NULL,
    "roomNum" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,
    CONSTRAINT "Lecture_roomNum_fkey" FOREIGN KEY ("roomNum") REFERENCES "ClassRoom" ("roomNum") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lecture_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lecture_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course" ("courseID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Course" (
    "courseID" TEXT NOT NULL PRIMARY KEY,
    "courseName" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL,
    CONSTRAINT "Course_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Grade" (
    "gradeID" TEXT NOT NULL PRIMARY KEY,
    "returnDate" TEXT NOT NULL,
    "assessmentName" TEXT NOT NULL,
    "gradePercent" INTEGER NOT NULL,
    "studentID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,
    CONSTRAINT "Grade_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grade_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course" ("courseID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LectureToStudent" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Lecture" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Student" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CourseToStudent" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Course" ("courseID") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Student" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_LectureToStudent_AB_unique" ON "_LectureToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_LectureToStudent_B_index" ON "_LectureToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToStudent_AB_unique" ON "_CourseToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToStudent_B_index" ON "_CourseToStudent"("B");

/*
  Warnings:

  - The primary key for the `Grade` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Grade" (
    "gradeID" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,
    "assessmentName" TEXT NOT NULL,
    "gradePercent" INTEGER NOT NULL,
    "studentID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,

    PRIMARY KEY ("gradeID", "studentID"),
    CONSTRAINT "Grade_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course" ("courseID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grade_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Grade" ("assessmentName", "courseID", "gradeID", "gradePercent", "returnDate", "studentID") SELECT "assessmentName", "courseID", "gradeID", "gradePercent", "returnDate", "studentID" FROM "Grade";
DROP TABLE "Grade";
ALTER TABLE "new_Grade" RENAME TO "Grade";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

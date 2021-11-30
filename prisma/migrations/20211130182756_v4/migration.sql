-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lecture" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lectureName" TEXT NOT NULL,
    "roomNum" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,
    "lectureCode" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Lecture_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course" ("courseID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lecture_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lecture" ("courseID", "dateTime", "id", "lectureName", "roomNum", "teacherID") SELECT "courseID", "dateTime", "id", "lectureName", "roomNum", "teacherID" FROM "Lecture";
DROP TABLE "Lecture";
ALTER TABLE "new_Lecture" RENAME TO "Lecture";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

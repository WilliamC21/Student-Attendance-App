-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "courseID" TEXT NOT NULL PRIMARY KEY,
    "courseName" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL
);
INSERT INTO "new_Course" ("courseID", "courseName", "teacherID") SELECT "courseID", "courseName", "teacherID" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

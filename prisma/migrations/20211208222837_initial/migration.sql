-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "totalClasses" INTEGER NOT NULL,
    "classesAttended" INTEGER NOT NULL,
    "attendance" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "isTeacher" BOOLEAN NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassRoom" (
    "roomNum" TEXT NOT NULL,
    "building" TEXT NOT NULL,

    CONSTRAINT "ClassRoom_pkey" PRIMARY KEY ("roomNum")
);

-- CreateTable
CREATE TABLE "Lecture" (
    "id" TEXT NOT NULL,
    "lectureName" TEXT NOT NULL,
    "dateTime" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,
    "lectureCode" INTEGER NOT NULL DEFAULT 0,
    "hasStarted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Lecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentOnLecture" (
    "studentID" INTEGER NOT NULL,
    "lectureID" TEXT NOT NULL,
    "attended" BOOLEAN NOT NULL,

    CONSTRAINT "StudentOnLecture_pkey" PRIMARY KEY ("studentID","lectureID")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseID" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseID")
);

-- CreateTable
CREATE TABLE "Grade" (
    "gradeID" TEXT NOT NULL,
    "returnDate" TEXT NOT NULL,
    "assessmentName" TEXT NOT NULL,
    "gradePercent" INTEGER NOT NULL,
    "studentID" INTEGER NOT NULL,
    "courseID" TEXT NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("gradeID")
);

-- CreateTable
CREATE TABLE "_CourseToStudent" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToStudent_AB_unique" ON "_CourseToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToStudent_B_index" ON "_CourseToStudent"("B");

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_room_fkey" FOREIGN KEY ("room") REFERENCES "ClassRoom"("roomNum") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lecture" ADD CONSTRAINT "Lecture_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course"("courseID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentOnLecture" ADD CONSTRAINT "StudentOnLecture_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentOnLecture" ADD CONSTRAINT "StudentOnLecture_lectureID_fkey" FOREIGN KEY ("lectureID") REFERENCES "Lecture"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course"("courseID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grade" ADD CONSTRAINT "Grade_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD FOREIGN KEY ("A") REFERENCES "Course"("courseID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToStudent" ADD FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

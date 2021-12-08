import React from "react";
import CourseListContainer from "../../components/UI/Lists/CourseList/CourseListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import FooterNav from "../../components/layout/FooterNav";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const courses = await prisma.course.findMany();

  return {
    props: {
      initialCourses: courses,
    },
  };
}

const navLinks = [
  ["./StartClass", "Start a Class"],
  ["./ViewClasses", "View Lectures"],
  ["./ViewStudentGrades", "View Student Grades"],
];

const ViewStudentAttendance = (props) => {
  const [courses, setCourses] = useState(props.initialCourses);
  console.log(courses);
  return (
    <React.Fragment>
      <head>
        <title>View Student Attendance</title>
      </head>

      <div className={"main-container"}>
        <h1>Student Attendance</h1>

        <CourseListContainer
          labels={["Course Code", "Title", "Teacher"]}
          items={courses}
        />
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default ViewStudentAttendance;

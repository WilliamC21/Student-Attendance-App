import React from "react";
import ListContainer from "../../components/UI/Lists/StudentLists/StudentListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import FooterNav from "../../components/layout/FooterNav";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const students = await prisma.student.findMany();
  const courses = await prisma.course.findMany();

  return {
    props: {
      initialStudents: students,
      initialCourses: courses,
    },
  };
}

const navLinks = [
  ["./TeachingStaffHome", "Home"],
  ["./StartClass", "Start a Class"],
  ["./ViewClasses", "View Lectures"],
  ["./ViewStudentGrades", "View Student Grades"],
];

const ViewStudentAttendance = (props) => {
  const [students, setStudents] = useState(props.initialStudents);

  return (
    <React.Fragment>
      <head>
        <title>View Student Attendance</title>
      </head>

      <div className={"main-container"}>
        <h1>Student Attendance</h1>

        <ListContainer
          labels={["First Name", "Surname", "Email", "Attendance"]}
          items={students}
        />
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default ViewStudentAttendance;

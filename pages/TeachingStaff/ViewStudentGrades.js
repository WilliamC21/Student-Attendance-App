import React from "react";
import GradesListContainer from "../../components/UI/Lists/GradesList/GradesListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import FooterNav from "../../components/layout/FooterNav";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const studentsGrades = await prisma.grade.findMany({});

  return {
    props: {
      grades: studentsGrades,
    },
  };
}

const navLinks = [
  ["./StartClass", "Start a Class"],
  ["./ViewClasses", "View Lectures"],
  ["./ViewStudentAttendance", "View Student Attendance"],
];

const ViewStudentGrades = (props) => {
  const [grades, setGrades] = useState(props.grades);

  return (
    <React.Fragment>
      <head>
        <title>View Student Grades</title>
      </head>

      <div className={"main-container"}>
        <h1>Student Grades</h1>

        <GradesListContainer
          labels={["Course Code", "Assessment", "Mark Achieved"]}
          items={grades}
        />
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default ViewStudentGrades;

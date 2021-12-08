import React from "react";
import GradesListContainer from "../../components/UI/Lists/GradesList/GradesListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

import Card from "../../components/UI/Card";
import Link from "next/dist/client/link";
import FooterNav from "../../components/layout/FooterNav";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const studentsGrades = await prisma.grade.findMany({
    where: {
      studentID: 1,
    },
  });

  return {
    props: {
      grades: studentsGrades,
    },
  };
}

const navLinks = [
  ["./LogAttendance", "Log Attendance"],
  ["./ViewCourses", "View Courses"],
  ["./ViewCourses", "View Courses"],
];

const ViewGrade = (props) => {
  const [grades, setGrades] = useState(props.grades);

  console.log(grades);
  return (
    <React.Fragment>
      <head>
        <title>View Grades</title>
      </head>

      <div className={"main-container"}>
        <h1>Your Grades</h1>

        <GradesListContainer
          labels={["Course Code", "Assessment", "Mark Achieved"]}
          items={grades}
        />
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default ViewGrade;

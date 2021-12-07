import React from "react";
import GradesListContainer from "../../components/UI/Lists/GradesList/GradesListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

import Card from "../../components/UI/Card";
import Link from "next/dist/client/link";

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
        <Card>
          <div className="nav">
            <Link href="./LogAttendance">
              <button>Log Attendance</button>
            </Link>
            <Link href="./ViewAttendance">
              <button>View Attendance</button>
            </Link>
            <Link href="./ViewCourses">
              <button>View Courses</button>
            </Link>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ViewGrade;

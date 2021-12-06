import React from "react";
import CourseListContainer from "../../components/UI/Lists/CourseList/CourseListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const studentsGrades = await prisma.grade.findUnique({
    where: {
      gradeID: "MATH101-A",
    },

    include: {
      course: {},
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
      </div>
    </React.Fragment>
  );
};

export default ViewGrade;

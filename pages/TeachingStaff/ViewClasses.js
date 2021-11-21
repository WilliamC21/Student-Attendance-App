import React from "react";
import LectureListContainer from "../../components/UI/Lists/LectureList/LectureListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const teachersLecture = await prisma.staff.findUnique({
    where: {
      id: 1,
    },

    include: {
      teachesLecture: {},
    },
  });

  return {
    props: {
      teachersLecture: teachersLecture.teachesLecture,
    },
  };
}

const ViewCourses = (props) => {
  const [lectures, setLectures] = useState(props.teachersLecture);

  console.log(lectures);
  return (
    <React.Fragment>
      <head>
        <title>View Courses</title>
      </head>

      <div className={"main-container"}>
        <h1>Your Courses</h1>

        <LectureListContainer
          items={lectures}
          labels={["Lecture ID", "Title", "Date", "Teacher"]}
        />
      </div>
    </React.Fragment>
  );
};

export default ViewCourses;

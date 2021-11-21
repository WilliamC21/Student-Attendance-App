import React from "react";

import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import LectureListContainer from "../../components/UI/Lists/LectureList/LectureListContainer";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const studentsLectures = await prisma.student.findUnique({
    where: {
      id: 1,
    },

    include: {
      enrolledInLecture: {},
    },
  });

  return {
    props: {
      studentsLectures: studentsLectures.enrolledInLecture,
    },
  };
}

const ViewAttendance = (props) => {
  const [studentsLectures, setStudentLectures] = useState(
    props.studentsLectures
  );

  console.log(studentsLectures);
  return (
    <React.Fragment>
      <head>
        <title>View Attendance</title>
      </head>

      <div className={"main-container"}>
        <h1>Your Attendance</h1>

        <LectureListContainer
          items={studentsLectures}
          labels={["Lecture ID", "Title", "Date", "Teacher"]}
        />
      </div>
    </React.Fragment>
  );
};

export default ViewAttendance;

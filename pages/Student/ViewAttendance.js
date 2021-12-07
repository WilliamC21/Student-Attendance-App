import React from "react";
import Card from "../../components/UI/Card";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import Link from "next/dist/client/link";
import AttendedLectureListContainer from "../../components/UI/Lists/LectureList/AttendedLectureListContainer";

const prisma = new PrismaClient();
const userID = 1;
export async function getServerSideProps() {
  const data = await prisma.student.findUnique({
    where: {
      id: userID,
    },
    include: {
      lectures: {
        include: {
          lecture: true,
        },
      },
    },
  });

  return {
    props: {
      student: data,
      lectures: data.lectures,
      lecture: data.lectures,
    },
  };
}

const ViewAttendance = (props) => {
  const [lectures, setLectures] = useState(props.lectures);

  return (
    <React.Fragment>
      <head>
        <title>View Attendance</title>
      </head>

      <div className={"main-container"}>
        <h1>Your Attendance</h1>

        <AttendedLectureListContainer
          items={lectures}
          labels={["Course", "Lecture", "Lecture ID", "Date", "Attended"]}
        />

        <Card>
          <div className="nav">
            <Link href="./LogAttendance">
              <button>Log Attendance</button>
            </Link>
            <Link href="./ViewCourses">
              <button>View Courses</button>
            </Link>
            <Link href="./ViewGrades">
              <button>View Grades</button>
            </Link>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ViewAttendance;

import React from "react";
import CourseListContainer from "../../components/UI/Lists/CourseList/CourseListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import Card from "../../components/UI/Card";
import Link from "next/dist/client/link";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const studentsCourses = await prisma.student.findUnique({
    where: {
      id: 1,
    },

    include: {
      enrolledInCourse: {},
      lectures: {},
    },
  });

  return {
    props: {
      studentsCourses: studentsCourses.enrolledInCourse,
      studentLectures: studentsCourses.lectures,
    },
  };
}

const ViewCourses = (props) => {
  const [courses, setCourses] = useState(props.studentsCourses);
  const [lectures, setLectures] = useState(props.studentLectures);

  console.log(courses);
  console.log(lectures);
  return (
    <React.Fragment>
      <head>
        <title>View Courses</title>
      </head>

      <div className={"main-container"}>
        <h1>Your Courses</h1>

        <CourseListContainer
          labels={["Course Code", "Title", "Teacher"]}
          items={courses}
        />
        <Card>
          <div className="nav">
            <Link href="./LogAttendance">
              <button>Log Attendance</button>
            </Link>
            <Link href="./ViewAttendance">
              <button>View Attendance</button>
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

export default ViewCourses;

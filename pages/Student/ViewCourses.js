import React from "react";
import CourseListContainer from "../../components/UI/Lists/CourseList/CourseListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

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
      </div>
    </React.Fragment>
  );
};

export default ViewCourses;

import React from "react";
import CourseListContainer from "../../components/UI/Lists/CourseList/CourseListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const courses = await prisma.course.findMany();

  return {
    props: {
      initialCourses: courses,
    },
  };
}

const ViewCourses = (props) => {
  const [courses, setCourses] = useState(props.initialCourses);
  console.log(courses);
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

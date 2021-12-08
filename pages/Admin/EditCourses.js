import React from "react";
import CourseListContainer from "../../components/UI/Lists/CourseList/CourseListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import NewCourseForm from "../../components/Forms/NewCourseForm";
import FooterNav from "../../components/layout/FooterNav";
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const courses = await prisma.course.findMany();

  return {
    props: {
      initialCourses: courses,
    },
  };
}

const navLinks = [
  ["./EditUsers", "Edit Users"],
  ["./EditClassrooms", "Edit Classrooms"],
];

const EditCourses = (props) => {
  const [courses, setCourses] = useState(props.initialCourses);
  console.log(courses);
  return (
    <React.Fragment>
      <head>
        <title>Edit Courses</title>
      </head>

      <div className={"main-container"}>
        <h1>Edit Courses</h1>

        <NewCourseForm />

        <CourseListContainer
          labels={["Course Code", "Title", "Teacher"]}
          items={courses}
        />
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default EditCourses;

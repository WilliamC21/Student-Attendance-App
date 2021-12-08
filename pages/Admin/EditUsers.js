import React from "react";
import FooterNav from "../../components/layout/FooterNav";
import { VStack, HStack, Text } from "@chakra-ui/react";
import ListContainer from "../../components/UI/Lists/StudentLists/StudentListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import NewStudentForm from "../../components/Forms/NewStudentForm";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const students = await prisma.student.findMany();
  const courses = await prisma.course.findMany();

  return {
    props: {
      initialStudents: students,
      initialCourses: courses,
    },
  };
}

const navLinks = [
  ["./EditCourses", "Edit Courses"],
  ["./EditClassrooms", "Edit Classrooms"],
];

const EditUsers = (props) => {
  const [students, setStudents] = useState(props.initialStudents);
  const [courses, setCourses] = useState(props.initialCourses);

  return (
    <React.Fragment>
      <head>
        <title>Edit Users</title>
      </head>

      <div className={"main-container"}>
        <h1>Edit Users</h1>
        <NewStudentForm courses={courses} />
        <ListContainer
          labels={["First Name", "Surname", "Email", "Attendance"]}
          items={students}
        />
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default EditUsers;

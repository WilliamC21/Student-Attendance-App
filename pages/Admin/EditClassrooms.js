import React from "react";
import FooterNav from "../../components/layout/FooterNav";
import { VStack, HStack, Text } from "@chakra-ui/react";
import ClassroomListContainer from "../../components/UI/Lists/ClassroomList/ClassroomListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import NewClassForm from "../../components/Forms/NewClassroomForm";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const classRooms = await prisma.classRoom.findMany();

  return {
    props: {
      initialClasses: classRooms,
    },
  };
}
const navLinks = [
  ["./AdminHome", "Home"],
  ["./EditUsers", "Edit Users"],
  ["./EditCourses", "Edit Courses"],
];
const EditClassrooms = (props) => {
  const [classRooms, setClassRooms] = useState(props.initialClasses);

  return (
    <React.Fragment>
      <head>
        <title>Edit Classrooms</title>
      </head>

      <div className={"main-container"}>
        <h1>Edit Classrooms</h1>
        <NewClassForm />
        <ClassroomListContainer
          labels={["Room", "Building"]}
          items={classRooms}
        />

        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default EditClassrooms;

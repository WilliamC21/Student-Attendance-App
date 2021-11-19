import React from "react";
import Link from "next/link";
import { VStack, HStack, Text } from "@chakra-ui/react";
import ClassroomListContainer from "../../components/UI/Lists/ClassroomList/ClassroomListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const classRooms = await prisma.classRoom.findMany();

  return {
    props: {
      initialClasses: classRooms,
    },
  };
}

const EditClassrooms = (props) => {
  const [classRooms, setClassRooms] = useState(props.initialClasses);

  return (
    <React.Fragment>
      <head>
        <title>Edit Classrooms</title>
      </head>

      <div className={"main-container"}>
        <h1>Edit Classrooms</h1>
        <ClassroomListContainer
          labels={("Room", "Building")}
          items={classRooms}
        />
      </div>
    </React.Fragment>
  );
};

export default EditClassrooms;

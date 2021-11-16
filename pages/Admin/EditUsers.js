import React from "react";
import Link from "next/link";
import { VStack, HStack, Text } from "@chakra-ui/react";
import ListContainer from "../../components/UI/List/ListContainer";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();

  return {
    props: {
      initialUsers: users,
    },
  };
}

const EditUsers = (props) => {
  const [users, setUsers] = useState(props.initialUsers);

  return (
    <React.Fragment>
      <head>
        <title>Edit Users</title>
      </head>

      <div className={"main-container"}>
        <h1>Edit Users</h1>
        <ListContainer items={users} />
      </div>
    </React.Fragment>
  );
};

export default EditUsers;

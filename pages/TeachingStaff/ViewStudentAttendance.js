import React, { useState } from "react";
import Link from "next/link";
import ListContainer from "../../components/UI/List/ListContainer";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const users = await prisma.user.findMany();

  return {
    props: {
      initialUsers: users,
    },
  };
}

const ViewStudentAttendance = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <React.Fragment>
      {initialUsers.map((user) => (
        <div>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
      ))}

      <div className="main-container">
        <h1>Student Attendance</h1>

        <ListContainer />
      </div>
    </React.Fragment>
  );
};

export default ViewStudentAttendance;

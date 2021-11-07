import React from "react";
import Link from "next/dist/client/link";
import Card from "../../components/UI/Card";

export default function AdminHome() {
  return (
    <React.Fragment>
      <Card>
        <h1>Admin Home</h1>

        <Link href="/">
          <a>Login</a>
        </Link>
        <br />

        <Link href="./EditUsers/EditUsers">
          <a>Edit Users</a>
        </Link>
        <br />

        <Link href="./EditRooms/EditRooms">
          <a>Edit Rooms</a>
        </Link>
        <br />

        <Link href="./EditClasses/EditClasses">
          <a>Edit Classes</a>
        </Link>
        <br />
      </Card>
    </React.Fragment>
  );
}

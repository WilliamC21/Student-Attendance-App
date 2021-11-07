import React from "react";
import Link from "next/dist/client/link";

export default function StudentHome() {
  return (
    <React.Fragment>
      <h1>Teaching Staff Home</h1>

      <Link href="/">
        <a>Login</a>
      </Link>

      <br />
      <Link href="./StartClass/StartClass">
        <a>Start Class</a>
      </Link>
      <br />

      <Link href="./ViewClasses/ViewClasses">
        <a>View Classes</a>
      </Link>
      <br />

      <Link href="./ViewStudentGrades/ViewStudentGrades">
        <a>View Student Grades</a>
      </Link>
      <br />

      <Link href="./BookRoom/BookRoom">
        <a>Book Room</a>
      </Link>
      <br />
    </React.Fragment>
  );
}

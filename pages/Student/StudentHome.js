import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./StudentHome.module.css";
import Button from "../../components/UI/Button";

export default function StudentHome() {
  return (
    <React.Fragment>
      <Header />
      <h1 className={Styles.test}>Student Home</h1>

      <Link href="/">
        <a>Login</a>
      </Link>
      <br />
      <Link href="./ViewAttendance/ViewAttendance">
        <a>View Attendance</a>
      </Link>
      <br />

      <Link href="./ViewGrades/ViewGrades">
        <a>View Grades</a>
      </Link>
      <br />

      <Link href="./ViewClasses/ViewClasses">
        <a>View Classes</a>
      </Link>
      <br />
    </React.Fragment>
  );
}

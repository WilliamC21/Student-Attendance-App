import React from "react";
import Link from "next/dist/client/link";
import Styles from "./AdminHome.module.css";
import Card from "../../components/UI/Card";

//Home page for Admin user type
export default function AdminHome() {
  return (
    <React.Fragment>
      <head>
        <title>Administrator Staff Home</title>
      </head>

      <body>
        <div className={Styles["main-container"]}>
          <Card>
            <Link href="./EditUsers">
              <button>Edit Users</button>
            </Link>
            <Link href="./EditCourses">
              <button>Edit Courses</button>
            </Link>
            <Link href="./EditClassrooms">
              <button>Edit Classrooms</button>
            </Link>
          </Card>
        </div>
      </body>
    </React.Fragment>
  );
}

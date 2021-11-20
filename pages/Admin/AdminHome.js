import React from "react";
import Link from "next/dist/client/link";
import Styles from "./AdminHome.module.css";
import Card from "../../components/UI/Card";

export default function AdminHome() {
  return (
    <React.Fragment>
      <head>
        <title>Teaching Staff Home</title>
      </head>

      <body>
        <div className={Styles["main-container"]}>
          <Card>
            <Link href="./EditUsers">
              <button>Edit Users</button>
            </Link>
            <Link href="./EditCourses">
              <button>Edit Classes</button>
            </Link>
            <Link href="./EditClassrooms">
              <button>Edit Rooms</button>
            </Link>
          </Card>
        </div>
      </body>
    </React.Fragment>
  );
}

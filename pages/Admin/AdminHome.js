import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./AdminHome.module.css";
import Card from "../../components/UI/Card";
import HalfCard from "../../components/UI/Card";

//import Button from "../../components/UI/Button";
import { VStack, HStack, Button } from "@chakra-ui/react";

export default function AdminHome() {
  return (
    <React.Fragment>
      <head>
        <title>Teaching Staff Home</title>
      </head>

      <body>
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
      </body>
    </React.Fragment>
  );
}

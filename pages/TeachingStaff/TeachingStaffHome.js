import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./TeachingHome.module.css";
import HalfCard from "../../components/UI/HalfCard";
//import Button from "../../components/UI/Button";
import { Flex, Container, VStack, HStack, Button } from "@chakra-ui/react";

export default function TeachingStaffHome() {
  return (
    <React.Fragment>
      <head>
        <title>Teaching Staff Home</title>
      </head>

      <body>
        <div className={Styles["main-container"]}>
          <HalfCard>
            <Link href="./StartClass">
              <button>Start a Class</button>
            </Link>
            <Link href="./ViewClasses">
              <button>View Lectures</button>
            </Link>
            <Link href="./ViewStudentAttendance">
              <button>View Student Attendance</button>
            </Link>
            <Link href="./ViewStudentGrades">
              <button>View Student Grades</button>
            </Link>
          </HalfCard>
          <div className={Styles["spacer"]} />
          <HalfCard />
        </div>
      </body>
    </React.Fragment>
  );
}

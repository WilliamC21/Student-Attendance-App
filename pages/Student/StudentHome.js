import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./StudentHome.module.css";
import HalfCard from "../../components/UI/HalfCard";
//import Button from "../../components/UI/Button";
import { Flex, Container, VStack, HStack, Button } from "@chakra-ui/react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const student = await prisma.student.findUnique({
    where: {
      id: 2,
    },
  });

  return {
    props: {
      student: student,
    },
  };
}

export default function StudentHome(props) {
  let attendancePercentage = props.student.attendance;

  return (
    <React.Fragment>
      <head>
        <title>Student Home</title>
      </head>

      <body>
        <div className={Styles["main-container"]}>
          <HalfCard>
            <Link href="./LogAttendance">
              <button>Log Attendance</button>
            </Link>
            <Link href="./ViewAttendance">
              <button>View Attendance</button>
            </Link>
            <Link href="./ViewCourses">
              <button>View Classes</button>
            </Link>
            <Link href="./ViewGrades">
              <button>View Grades</button>
            </Link>
          </HalfCard>

          <HalfCard>
            <div className={Styles["glance-container"]}>
              <div className={Styles["glance-left"]}>
                <h1>At a Glance</h1>
                <br />
                <p className={Styles["glance-text"]}>Your Next Class</p>
                <br />
                <p className={Styles["glance-text"]}>Your Most Recent Grade</p>
              </div>
              <div className={Styles["glance-left"]}>
                <CircularProgressbar
                  value={attendancePercentage}
                  text={`${attendancePercentage}%`}
                />
              </div>
            </div>
          </HalfCard>
        </div>
      </body>
    </React.Fragment>
  );
}

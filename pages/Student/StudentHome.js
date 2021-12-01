import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./StudentHome.module.css";
import HalfCard from "../../components/UI/HalfCard";
import FeatureCard from "../../components/UI/FeatureCard";
//import Button from "../../components/UI/Button";
import { Flex, Container, VStack, HStack, Button } from "@chakra-ui/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const student = await prisma.student.findUnique({
    where: {
      id: 1,
    },

    include: {
      lectures: {},
      gradesObtained: {},
    },
  });

  return {
    props: {
      student: student,
      lectures: student.lectures,
      grades: student.gradesObtained,
    },
  };
}

export default function StudentHome(props) {
  let attendancePercentage = props.student.attendance;
  let nextLecture = props.lectures[1];
  let recentGrade = props.grades[0];

  console.log(nextLecture);

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
              <button>View Courses</button>
            </Link>
            <Link href="./ViewGrades">
              <button>View Grades</button>
            </Link>
          </HalfCard>

          <HalfCard>
            <div className={Styles["glance-container"]}>
              <div className={Styles["glance-left"]}>
                <h1>At a Glance</h1>

                <h3 className={Styles["glance-text"]}>Your Next Class</h3>
                {/* <p>{nextLecture.lectureID}</p> */}

                <h3 className={Styles["glance-text"]}>
                  Your Most Recent Grade
                </h3>
                <p>
                  {recentGrade.assessmentName} - {recentGrade.gradePercent}%
                </p>
              </div>
              <div className={Styles["glance-left"]}>
                <CircularProgressbarWithChildren
                  value={attendancePercentage}
                  text={`${attendancePercentage}%`}
                  className={Styles["attendance-bar"]}
                >
                  <div
                    style={{
                      fontSize: 23,
                      marginTop: 70,
                      color: "white",
                      pathColor: "#d6d6d6",
                    }}
                  >
                    Your Attendance
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </HalfCard>
        </div>
      </body>
    </React.Fragment>
  );
}

import React from "react";
import Link from "next/dist/client/link";
import Header from "../../components/layout/Header";
import Styles from "./StudentHome.module.css";
import HalfCard from "../../components/UI/HalfCard";
import FooterNav from "../../components/layout/FooterNav";
import FeatureCard from "../../components/UI/FeatureCard";
//import Button from "../../components/UI/Button";
import { Flex, Container, VStack, HStack, Button } from "@chakra-ui/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const studentID = 1;

export async function getServerSideProps() {
  const student = await prisma.student.findUnique({
    where: {
      id: studentID,
    },

    include: {
      lectures: {},
      gradesObtained: {},
    },
  });

  const lectures = await prisma.lecture.findMany({});
  return {
    props: {
      student: student,
      lectures: student.lectures,
      grades: student.gradesObtained,
      lectureInfo: lectures,
    },
  };
}

export default function StudentHome(props) {
  let nextLecture = props.lectureInfo[1];
  let recentGrade = props.grades[props.grades.length - 1];

  let totalLectureCount = props.lectures.length;

  let totalAttendedCount = props.lectures.filter(
    (lecture) => lecture.attended == true
  ).length;

  let attendancePercentage = (totalAttendedCount / totalLectureCount) * 100;

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

                <h3 className={Styles["glance-text"]}>
                  <u>Your Next Class</u>
                </h3>
                <p>
                  <i>Lecture: {nextLecture.lectureName}</i>
                </p>
                <p>
                  <i>Location: {nextLecture.room}</i>
                </p>

                <h3 className={Styles["glance-text"]}>
                  <u> Your Most Recent Grade</u>
                </h3>
                <p>
                  <i>
                    {recentGrade.assessmentName} - {recentGrade.gradePercent}%
                  </i>
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
                      marginTop: 250,
                      color: "white",
                      pathColor: "#d6d6d6",
                      textColor: "#f1faee",
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

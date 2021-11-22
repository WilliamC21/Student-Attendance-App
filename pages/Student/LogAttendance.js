import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";
import Styles from "./LogAttendance.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const studentsLecture = await prisma.student.findUnique({
    where: {
      id: 1,
    },

    include: {
      enrolledInLecture: {},
    },
  });

  return {
    props: {
      studentsLectures: studentsLecture.enrolledInLecture,
    },
  };
}

const LogAttendance = (props) => {
  const [lectures, setLectures] = useState(props.studentsLectures);

  return (
    <React.Fragment>
      <h1>Log Attendance</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["log-attendance-box"]}>
            <label>Select lecture to attend</label>
            <select>
              <option value={""}></option>
              {lectures.map((lecture) => (
                <option value={lecture.id}>{lecture.lectureName}</option>
              ))}
            </select>
            <button>Attend this lecture</button>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default LogAttendance;

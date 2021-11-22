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
  const [enteredCode, setEnteredCode] = useState("");
  const [chosenLecture, setChosenLecture] = useState("");

  const codeChangeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const chosenLectureChangeHandler = (event) => {
    setChosenLecture(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredCode);
    console.log(chosenLecture);
  };
  return (
    <React.Fragment>
      <h1>Log Attendance</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["log-attendance-box"]}>
            <form onSubmit={submitHandler}>
              <label>Select lecture to attend</label>
              <select onChange={chosenLectureChangeHandler}>
                <option value={""}></option>
                {lectures.map((lecture) => (
                  <option value={lecture.id}>{lecture.lectureName}</option>
                ))}
              </select>

              <label for="code-input">Enter Code</label>
              <input id="code-input" onChange={codeChangeHandler} />

              <button type="submit">Attend this lecture</button>
            </form>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default LogAttendance;

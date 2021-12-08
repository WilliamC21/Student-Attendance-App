import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";
import Styles from "./LogAttendance.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import FooterNav from "../../components/layout/FooterNav";

const prisma = new PrismaClient();
const axios = require("axios");
const userID = 1;

export async function getServerSideProps() {
  const data = await prisma.student.findUnique({
    where: {
      id: userID,
    },
    include: {
      lectures: {
        include: {
          lecture: true,
        },
      },
    },
  });

  return {
    props: {
      student: data,
      lectures: data.lectures,
      lecture: data.lectures,
    },
  };
}

const LogAttendance = (props) => {
  const [lectures, setLectures] = useState(props.lectures);
  const [enteredCode, setEnteredCode] = useState("");
  const [chosenLecture, setChosenLecture] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const codeChangeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const chosenLectureChangeHandler = (event) => {
    setChosenLecture(event.target.value);
  };

  const alert = <div className={Styles["alert"]}>{alertMessage}</div>;
  console.log(props.student.firstName);
  const submitHandler = async (event) => {
    event.preventDefault();

    const specificLecture = lectures.filter(
      (lecture) => lecture.lectureID === chosenLecture
    );

    if (specificLecture.length == 0) {
      setAlertMessage("Please choose a lecture to attend");
      return;
    }

    if (enteredCode == specificLecture[0].lecture.lectureCode) {
      console.log("PASS");
      setAlertMessage("Attendance Logged!");
      const data = {
        lectureID: chosenLecture,
        studentID: userID,
      };

      await axios
        .post("/api/Student/LectureAttendance", data)
        .then(function (response) {
          //window.location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    } else {
      console.log("FAIL");
      setAlertMessage("Incorrect Code Entered");
    }
  };

  const navLinks = [
    ["./ViewAttendance", "View Attendance"],
    ["./ViewCourses", "View Courses"],
    ["./ViewGrades", "View Grades"],
  ];

  return (
    <React.Fragment>
      <h1>Attend a Lecture</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["log-attendance-box"]}>
            <form onSubmit={submitHandler}>
              <label>Select lecture to attend</label>
              <select onChange={chosenLectureChangeHandler}>
                <option value={""}></option>
                {lectures.map((lecture) => (
                  <option value={lecture.lecture.id} key={lecture.lecture.id}>
                    {lecture.lecture.lectureName}-{lecture.lecture.id}
                  </option>
                ))}
              </select>

              <label htmlFor="code-input">Enter Code</label>
              <input id="code-input" onChange={codeChangeHandler} />

              <button type="submit">Attend this lecture</button>

              <div>{alert}</div>
            </form>
          </div>
        </Card>
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default LogAttendance;

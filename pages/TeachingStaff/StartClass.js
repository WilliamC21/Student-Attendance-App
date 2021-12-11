import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";
import Styles from "./StartClass.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
import FooterNav from "../../components/layout/FooterNav";

const prisma = new PrismaClient();
const axios = require("axios");

export async function getServerSideProps() {
  const teachersLecture = await prisma.staff.findUnique({
    where: {
      id: 1,
    },

    include: {
      teachesLecture: {},
    },
  });

  const teachersCourses = await prisma.staff.findUnique({
    where: {
      id: 1,
    },

    include: {
      teachesCourse: {},
    },
  });

  return {
    props: {
      teachersLectures: teachersLecture.teachesLecture,
      teachersCourses: teachersCourses.teachesCourse,
    },
  };
}

const navLinks = [
  ["./TeachingStaffHome", "Home"],
  ["./ViewClasses", "View Lectures"],
  ["./ViewStudentAttendance", "View Student Attendance"],
  ["./ViewStudentGrades", "View Student Grades"],
];

const StartClass = (props) => {
  const [availibleLectures, setAvailibleLectures] = useState(
    props.teachersLectures
  );
  const [selectedLecture, setSelectedLecture] = useState("");
  const [lectureCode, setLectureCode] = useState("XXXX");

  const [availibleCourses, setAvailibleCourses] = useState(
    props.teachersCourses
  );
  const [selectedCourse, setSelectedCourse] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);

  let courseOptions = availibleCourses.map((item, i) => {
    return (
      <option key={i} value={item.courseID}>
        {item.courseName} - {item.courseID}
      </option>
    );
  });

  let lectureOptions = availibleLectures
    .filter((lecture) => lecture.courseID == selectedCourse)
    .map((item, i) => {
      return (
        <option key={i} value={item.id}>
          {item.lectureName} - {item.id}
        </option>
      );
    });

  const lectureChangeHandler = (event) => {
    setSelectedLecture(event.target.value);
    setLectureCode(Math.floor(1000 + Math.random() * 9000));
  };

  const courseChangeHandler = (event) => {
    setSelectedCourse(event.target.value);
    console.log(selectedCourse);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
      lectureID: selectedLecture,
      lectureCode: lectureCode,
    };

    await axios
      .post("/api/TeachingStaff/EditLecture", data)
      .then(function (response) {
        //window.location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    setAlertVisible(true);
  };

  return (
    <React.Fragment>
      <h1>Begin a Class</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["start-class-box"]}>
            <form onSubmit={submitHandler}>
              <label>Select Course</label>
              <select value={selectedCourse} onChange={courseChangeHandler}>
                <option></option>
                {courseOptions}
              </select>

              <label>Select Lecture to start</label>
              <select value={selectedLecture} onChange={lectureChangeHandler}>
                <option></option>
                {lectureOptions}
              </select>
              <button type="submit">Start Lecture</button>
            </form>
          </div>
        </Card>
        <Card>
          <h1>{lectureCode}</h1>
          {alertVisible ? (
            <div className={Styles["alert"]}>Lecture Started</div>
          ) : (
            <div />
          )}
        </Card>
        <FooterNav items={navLinks} />
      </div>
    </React.Fragment>
  );
};

export default StartClass;

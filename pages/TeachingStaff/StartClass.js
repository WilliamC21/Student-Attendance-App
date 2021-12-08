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

  return {
    props: {
      teachersLectures: teachersLecture.teachesLecture,
    },
  };
}

const navLinks = [
  ["./ViewClasses", "View Lectures"],
  ["./ViewStudentAttendance", "View Student Attendance"],
  ["./ViewStudentGrades", "View Student Grades"],
];

const StartClass = (props) => {
  const [availibleLectures, setAvailibleLectures] = useState(
    props.teachersLectures
  );

  let lectureOptions = availibleLectures.map((item, i) => {
    return (
      <option key={i} value={item.id}>
        {item.lectureName}
      </option>
    );
  });

  const [lectureCode, setLectureCode] = useState("XXXX");
  const [selectedLecture, setSelectedLecture] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const lectureChangeHandler = (event) => {
    setSelectedLecture(event.target.value);
    setLectureCode(Math.floor(1000 + Math.random() * 9000));
  };

  const alert = <div>TEST</div>;

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
      lectureID: selectedLecture,
      lectureCode: lectureCode,
    };
    console.log(data);

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

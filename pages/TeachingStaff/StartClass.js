import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";
import Styles from "./StartClass.module.css";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

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

  const lectureChangeHandler = (event) => {
    setSelectedLecture(event.target.value);
    setLectureCode(Math.floor(1000 + Math.random() * 9000));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(selectedLecture);
    console.log(lectureCode);
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
              <button type="submit">Start Class</button>
            </form>
          </div>
        </Card>
        <Card>
          <h1>{lectureCode}</h1>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default StartClass;

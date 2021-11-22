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
      id: 2,
    },

    include: {
      teachesLecture: {},
    },
  });

  return {
    props: {
      teachersLecture: teachersLecture.teachesLecture,
    },
  };
}

const StartClass = (props) => {
  const [lectures, setLectures] = useState(props.teachersLecture);

  {
    lectures.map((lecture) => (
      <option value={lecture.id}>{lecture.lectureName}</option>
    ));
  }

  return (
    <React.Fragment>
      <h1>Begin a Class</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["start-class-box"]}>
            <select>
              <option value={""}></option>
              {lectures.map((lecture) => (
                <option value={lecture.id}>{lecture.lectureName}</option>
              ))}
            </select>
            <button>Start Class</button>
          </div>
        </Card>
        <Card>
          <h1>Generated Code Here</h1>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default StartClass;

import React from "react";
import Link from "next/link";
import ListContainer from "../../components/UI/List/ListContainer";

const ViewStudentAttendance = () => {
  return (
    <React.Fragment>
      <div className="main-container">
        <h1>Student Attendance</h1>
        <ListContainer />
      </div>
    </React.Fragment>
  );
};

export default ViewStudentAttendance;

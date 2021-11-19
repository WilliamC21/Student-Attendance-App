import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";

const LogAttendance = () => {
  return (
    <React.Fragment>
      <h1>Log Attendance</h1>

      <div className="main-container">
        <Card>
          <label>Select lecture to attend</label>
          <select />
          <button>Attend this lecture</button>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default LogAttendance;

import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";
import Styles from "./LogAttendance.module.css";
const LogAttendance = () => {
  return (
    <React.Fragment>
      <h1>Log Attendance</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["log-attendance-box"]}>
            <label>Select lecture to attend</label>
            <select>
              <option value="Test 1">Test 1</option>
              <option value="Test 2">Test 2</option>
              <option value="Test 3">Test 3</option>
            </select>
            <button>Attend this lecture</button>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default LogAttendance;

import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";
import Styles from "./StartClass.module.css";

const StartClass = () => {
  return (
    <React.Fragment>
      <h1>Begin a Class</h1>

      <div className="main-container">
        <Card>
          <div className={Styles["start-class-box"]}>
            <select>
              <option value="Test 1">Test 1</option>
              <option value="Test 2">Test 2</option>
              <option value="Test 3">Test 3</option>
              <option value="Test 4">Test 4</option>
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

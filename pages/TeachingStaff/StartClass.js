import React from "react";
import Link from "next/link";
import Card from "../../components/UI/Card";

const StartClass = () => {
  return (
    <React.Fragment>
      <h1>Begin a Class</h1>

      <div className="main-container">
        <Card>
          <select>
            <option value="0"></option>
            <option value="0"></option>
            <option value="0"></option>
            <option value="0"></option>
          </select>
        </Card>

        <Card>
          <button>Start Class</button>
        </Card>

        <Card>
          <h1>Generated Code Here</h1>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default StartClass;

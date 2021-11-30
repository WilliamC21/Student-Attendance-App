import React, { useState } from "react";
import Card from "../../components/UI/Card";
import Styles from "./FormContainer.module.css";

const axios = require("axios");

const NewStudentForm = (props) => {
  //state control to hide or reveal form
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const [enteredCourseID, setEnteredCourseID] = useState("");
  const [enteredCourseName, setEnteredCourseName] = useState("");
  const [enteredCourseTeacher, setEnteredCourseTeacher] = useState("");

  const courseIDChangeHandler = (event) => {
    setEnteredCourseID(event.target.value);
  };

  const courseNameChangeHandler = (event) => {
    setEnteredCourseName(event.target.value);
  };

  const courseTeacherChangeHandler = (event) => {
    setEnteredCourseTeacher(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
      courseID: enteredCourseID,
      courseName: enteredCourseName,
      //courseTeacher: enteredCourseTeacher,
    };

    console.log(data);
    await axios
      .post("/api/Admin/EditCourses", data)
      .then(function (response) {
        //window.location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setEnteredCourseID("");
    setEnteredCourseName("");
    setEnteredCourseTeacher("");
  };

  return (
    <Card>
      <div className={Styles["form"]}>
        {!isEditing && (
          <div className={Styles["hidden-form"]}>
            <button onClick={startEditingHandler}>Add New Course</button>
          </div>
        )}
        {isEditing && (
          <form onSubmit={submitHandler}>
            <div className={Styles["form-control"]}>
              <div className={Styles["input-group"]}>
                <label>Course ID</label>
                <input
                  type="text"
                  value={enteredCourseID}
                  onChange={courseIDChangeHandler}
                />
              </div>

              <div>
                <label>Course Title</label>
                <input
                  type="text"
                  value={enteredCourseName}
                  onChange={courseNameChangeHandler}
                />
              </div>

              <div>
                <label>Teacher</label>
                <input
                  type="text"
                  value={enteredCourseTeacher}
                  onChange={courseTeacherChangeHandler}
                />
              </div>
            </div>

            <div className={Styles["button-group"]}>
              <button type="button" onClick={stopEditingHandler}>
                Cancel
              </button>

              <button type="submit">Add Course</button>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default NewStudentForm;

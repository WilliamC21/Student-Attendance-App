import React, { useState } from "react";
import Card from "../../components/UI/Card";
import Styles from "./FormContainer.module.css";

const axios = require("axios");

const NewStudentForm = (props) => {
  //State allowing choice of what to display in form
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const [availibleCourses, setAvailibleCourses] = useState(props.courses);

  let courseOptions = availibleCourses.map((item, i) => {
    return (
      <option key={i} value={item.courseID}>
        {item.courseName} - {item.courseID}
      </option>
    );
  });

  //States for student data
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredCourse, setEnteredCourse] = useState("");

  //State for availible courses
  const [courses, setCourses] = useState(props.initialCourses);

  //Change state handlers
  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const courseChangeHandler = (event) => {
    setEnteredCourse(event.target.value);
  };

  //Creating student data object on submit
  const submitHandler = async (event) => {
    event.preventDefault();

    const data = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      totalClasses: 0,
      classesAttended: 0,
      attendance: 0,
      //courseID: enteredCourse,
    };

    await axios
      .post("/api/Admin/EditStudents", data)
      .then(function (response) {
        //window.location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    //clear the fields of form
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredCourse("");
  };

  return (
    <Card>
      <div className={Styles["form"]}>
        {!isEditing && (
          <div className={Styles["hidden-form"]}>
            <button onClick={startEditingHandler}>Add New Student</button>
          </div>
        )}
        {isEditing && (
          <form onSubmit={submitHandler}>
            <div className={Styles["form-control"]}>
              <div className={Styles["input-group"]}>
                <label>First Name</label>
                <input
                  type="text"
                  value={enteredFirstName}
                  onChange={firstNameChangeHandler}
                />
              </div>

              <div>
                <label>Surname</label>
                <input
                  type="text"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="text"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
              </div>

              <div className={Styles["select-group"]}>
                <label>Course</label>
                <select value={enteredCourse} onChange={courseChangeHandler}>
                  {courseOptions}
                </select>
              </div>
            </div>

            <div className={Styles["button-group"]}>
              <button type="button" onClick={stopEditingHandler}>
                Cancel
              </button>

              <button type="submit">Add Student</button>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default NewStudentForm;

import React, { useState } from "react";
import Card from "../../components/UI/Card";
import Styles from "./FormContainer.module.css";
import { PrismaClient } from "@prisma/client";

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
  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      course: enteredCourse,
    };

    console.log(studentData);

    //clearing fields of form
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
                  <option></option>
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

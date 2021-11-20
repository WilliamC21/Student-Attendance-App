import React, { useState } from "react";
import Card from "../../components/UI/Card";
import Styles from "./FormContainer.module.css";

const NewStudentForm = (props) => {
  //state control to hide or reveal form
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveStudentDataHandler = (enteredStudentData) => {
    const studentData = {
      ...enteredStudentData,
    };

    setIsEditing(false);
  };

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredCourse, setEnteredCourse] = useState("");

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

  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      course: enteredCourse,
    };

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredCourse("");
  };

  return (
    <Card>
      <div className={Styles["new-expense"]}>
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Student</button>
        )}
        {isEditing && (
          <form onSubmit={submitHandler}>
            <div className={Styles["new-expense__controls"]}>
              <div className={Styles["new-expense__controls"]}>
                <label>First Name</label>
                <input
                  type="text"
                  value={enteredFirstName}
                  onChange={firstNameChangeHandler}
                />
              </div>
              <div className={Styles["new-expense__controls"]}>
                <label>Surname</label>
                <input
                  type="text"
                  value={enteredLastName}
                  onChange={lastNameChangeHandler}
                />
              </div>
              <div className={Styles["new-expense__controls"]}>
                <label>Email</label>
                <input
                  type="text"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                />
              </div>
              <div className={Styles["new-expense__controls"]}>
                <label>Course</label>
                <select value={enteredCourse} onChange={courseChangeHandler}>
                  <option value="example course 1">Example Course 1</option>
                  <option value="example course 2y">Example Course 2</option>
                </select>
              </div>
            </div>

            <div className={Styles["new-expense__controls"]}>
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

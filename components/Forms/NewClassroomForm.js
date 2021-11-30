import React, { useState } from "react";
import Card from "../UI/Card";
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

  const [enteredRoomNum, setEnteredRoomNum] = useState("");
  const [enteredBuilding, setEnteredBuilding] = useState("");

  const roomNumChangeHandler = (event) => {
    setEnteredRoomNum(event.target.value);
  };

  const buildingChangeHandler = (event) => {
    setEnteredBuilding(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // const data = {
    //   firstName: "test",
    //   lastName: "test",
    //   email: "test",
    //   totalClasses: 0,
    //   classesAttended: 0,
    //   attendance: 0,
    //   //courseID: enteredCourse,
    // };

    const data = {
      roomNum: enteredRoomNum,
      building: enteredBuilding,
    };

    await axios
      .post("/api/Admin/EditClassrooms", data)
      .then(function (response) {
        //window.location.reload();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    setEnteredRoomNum("");
    setEnteredBuilding("");
  };

  return (
    <Card>
      <div className={Styles["form"]}>
        {!isEditing && (
          <div className={Styles["hidden-form"]}>
            <button onClick={startEditingHandler}>Add New Classroom</button>
          </div>
        )}
        {isEditing && (
          <form onSubmit={submitHandler}>
            <div className={Styles["form-control"]}>
              <div className={Styles["input-group"]}>
                <label>Room Number</label>
                <input
                  type="text"
                  value={enteredRoomNum}
                  onChange={roomNumChangeHandler}
                />
              </div>

              <div>
                <label>Building</label>
                <input
                  type="text"
                  value={enteredBuilding}
                  onChange={buildingChangeHandler}
                />
              </div>
            </div>

            <div className={Styles["button-group"]}>
              <button type="button" onClick={stopEditingHandler}>
                Cancel
              </button>

              <button type="submit">Add Classroom</button>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default NewStudentForm;

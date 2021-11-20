import React, { useState } from "react";
import Card from "../UI/Card";
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

  const [enteredRoomNum, setEnteredRoomNum] = useState("");
  const [enteredBuilding, setEnteredBuilding] = useState("");

  const roomNumChangeHandler = (event) => {
    setEnteredRoomNum(event.target.value);
  };

  const buildingChangeHandler = (event) => {
    setEnteredBuilding(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const roomData = {
      roomNum: enteredRoomNum,
      building: enteredBuilding,
    };

    console.log(enteredRoomNum);
    console.log(enteredBuilding);

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
                <label>Buidling</label>
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

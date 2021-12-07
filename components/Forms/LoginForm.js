import React from "react";
import useInput from "../hooks/use-input";
import Styles from "./LoginForm.module.css";
const isNotEmpty = (value) => value.trim() !== "";
const validEmail = (value) => value.trim() !== 0 && value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredUsername,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredUsername);
    console.log(enteredPassword);

    usernameReset();
    passwordReset();
  };

  //implement with string literal I think

  // const userameInputClasses = usernameHasError
  //   ? `${Styles["form-control invalid"]}`
  //   : `${Styles["form-control"]}]`;

  // const passwordInputClasses = passwordHasError
  //   ? "form-control invalid"
  //   : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={Styles["control-group"]}>
        <div className={Styles["form-control"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            onBlur={usernameBlurHandler}
          />
          {usernameHasError && (
            <p className={Styles["error-text"]}>
              Username field can&apos;t be empty
            </p>
          )}
        </div>
      </div>
      <div className={Styles["control-group"]}>
        <div className={Styles["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={Styles["error-text"]}>
              Password field can&apos;t be empty
            </p>
          )}
        </div>
      </div>
      <div className={Styles["form-actions"]}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

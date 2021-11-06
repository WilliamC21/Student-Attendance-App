import useInput from "./hooks/use-input";

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

  const userameInputClasses = usernameHasError
    ? "form-control invalid"
    : "form-control";
  const passwordInputClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={userameInputClasses}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
            onBlur={usernameBlurHandler}
          />
          {usernameHasError && (
            <p className="error-text">Username field can't be empty</p>
          )}
        </div>
      </div>
      <div className="control-group">
        <div className={passwordInputClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className="error-text">Password field can't be empty</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

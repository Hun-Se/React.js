import useBasic from "../hooks/use-basic";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: enteredFistNameIsValid,
    hasError: firstNameHasError,
    ChangeHandler: firstNameChangeHandler,
    BlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useBasic(isNotEmpty);

  const {
    value: lastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    ChangeHandler: lastNameChangeHandler,
    BlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useBasic(isNotEmpty);

  const {
    value: emailValue,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    ChangeHandler: emailChangeHandler,
    BlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useBasic(isEmail);

  let formIsValid = false;

  if (enteredFistNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // button이 비활성화되서 기능을하지 않는 코드이지만 사용자들이
    // 직접적으로 브라우저상에서 조작하여 버튼을 활성화 할경우를 생각해서 보다 더 단단한 코드를 작성하기 위함
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetlastName();
    resetEmail();
  };

  const invalidFirstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const invalidLastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const invalidEmailClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={invalidFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && <p className="error-text">입력해주세요</p>}
        </div>
        <div className={invalidLastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
        </div>
      </div>
      <div className={invalidEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

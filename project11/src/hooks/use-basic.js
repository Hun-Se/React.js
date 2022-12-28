import { useReducer } from "react";

const initailInputState = {
  value: "",
  isTouched: false,
};

const inputStateRedcuer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, vlaue: "" };
  }
  return initailInputState;
};

const useBasic = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateRedcuer,
    initailInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.vlaue });
  };

  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    ChangeHandler: inputChangeHandler,
    BlurHandler: inputBlurHandler,
    reset: resetHandler,
  };
};

export default useBasic;

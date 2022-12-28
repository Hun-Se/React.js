import { useState } from "react";

const useBasic = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value: value,
    hasError: hasError,
    ChangeHandler: inputChangeHandler,
    BlurHandler: inputBlurHandler,
    reset: resetHandler,
  };
};

export default useBasic;

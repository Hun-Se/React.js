import React, { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // 매개변수로 받는 값이기 때문에 의존성 배열로 추가해야한다. 의존성이 변경될때마다 useEffect가 재실행

  return counter;
};

export default useCounter;

import { useState, useEffect } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "Get",
        headers: requestConfig.headers ? requestConfig.header : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("데이터 로딩 실패");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,

    // 최신 자바스크립트에서는 값을 넣어주지 않아도 된다.
    // isLoading,
    // error,
    // sendRequest
  };
};

export default useHttp;

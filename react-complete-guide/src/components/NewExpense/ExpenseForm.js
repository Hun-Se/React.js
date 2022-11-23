import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [visibleState, setvisibleState] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // 여러개의 state를 한번에 다룰 수 있지만 상태 업데이트시 다른 값들을 입력해주지 않는다면 새로운 상태로 오버라이드 되서
    // 따라서 상황에 따라 좋지 않은 방법이다. 오래되고 잘못된 방식으로 의존 할 수 있다.
    // setUserInput({ ...userInput, enteredTitle: event.target.value });

    // 전자 보다 안정적인 방법 새로운 함수를 호출하는 방식 항상 계획된 상태 업데이트를 보장한다. state가 이전 상태에 의존하고 있다면
    // 이 방법을 사용하자.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const buttonClickEvent = () => {
    setvisibleState(!visibleState);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0,01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancle}>
          Cancle
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

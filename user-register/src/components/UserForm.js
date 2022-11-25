import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const [isValid, setIsValid] = useState(true);

  const addSubmitevent = (event) => {
    event.preventDefault();
    if (!isValid) {
      alert("나이는 0보다 커야합니다.");
    }
  };

  const checkinputHandler = (event) => {
    if (+event.target.value < 0) {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={addSubmitevent}>
      <Card className={styles.user_form}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="age">Age(Years)</label>
        <input type="number" name="age" onChange={checkinputHandler} />
        <button className={styles.btn_add_user}>Add User</button>
      </Card>
    </form>
  );
};

export default UserForm;

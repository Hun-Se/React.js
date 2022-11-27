import React, { useState } from "react";
import Card from "./UI/Card";
import InvalidModal from "./InvalidModal";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const [visible, setvisible] = useState("");

  const addSubmitevent = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value === undefined) {
      console.log("err1");
    }
  };

  const checkinputHandler = (event) => {
    if (+event.target.value < 0) {
      visible = "visible";
    }
  };

  return (
    <div>
      <form onSubmit={addSubmitevent}>
        <Card className={styles.user_form}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" name="age" onChange={checkinputHandler} />
          <button className={styles.btn_add_user}>Add User</button>
        </Card>
      </form>
      <InvalidModal visible={visible} />
    </div>
  );
};

export default UserForm;

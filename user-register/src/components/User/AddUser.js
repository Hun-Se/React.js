import React, { useState } from "react";
import Card from "./UI/Card";
import InvalidModal from "./InvalidModal";
import styles from "./UserForm.module.css";

const AddUser = () => {
  const [isValid, setIsValid] = useState("");
  const [visible, setVisible] = useState(false);
  const [mesage, setMesage] = useState("");

  const checkInputHandler = (event) => {
    setIsValid(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(isValid);
    if (isValid === "") {
      setVisible(true);
      setMesage("Please enter a valid name and age (none-empty values)");
    }
    if (+isValid < 0) {
      setVisible(true);
      setMesage("Please enter a valid age(>0)");
    }
  };

  return (
    <div>
      <Card className={styles.user_form}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={checkInputHandler} />
          <label htmlFor="age">Age(Years)</label>
          <input type="number" name="age" onChange={checkInputHandler} />
          <button type="submit" className={styles.btn_add_user}>
            Add User
          </button>
        </form>
      </Card>
      {visible ? <InvalidModal mesage={mesage} /> : null}
    </div>
  );
};

export default AddUser;

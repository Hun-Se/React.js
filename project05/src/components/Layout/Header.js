import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food"></img>
      </div>
    </>
  );
};

export default Header;

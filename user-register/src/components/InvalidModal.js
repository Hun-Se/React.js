import React from "react";
import Card from "./UI/Card";
import stlyes from "./InvalidModal.module.css";

const InvalidModal = () => {
  return (
    <div className={stlyes.container_modal}>
      <h1>Invalid input</h1>
      <Card className={stlyes.box_modal}>
        <p>Please enter a valid age({">"}0)</p>
        <button type="button" className={stlyes.btn_okay}>
          Okay
        </button>
      </Card>
    </div>
  );
};

export default InvalidModal;

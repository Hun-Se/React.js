import React from "react";
import Card from "./UI/Card";
import stlyes from "./InvalidModal.module.css";

const InvalidModal = (props) => {
  return (
    <div className={stlyes.container_modal}>
      <h1>Invalid input</h1>
      <Card className={stlyes.box_modal}>
        <div className={`${stlyes.container_alert} ${props.visible}`}>
          <p>{props.mesage}</p>
          <button type="button" className={stlyes.btn_okay}>
            Okay
          </button>
        </div>
      </Card>
    </div>
  );
};

export default InvalidModal;

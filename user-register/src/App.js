import React from "react";
import InvalidModal from "./components/InvalidModal";
import UserForm from "./components/UserForm";
import "./style/reset.css";

const App = () => {
  return (
    <div>
      <UserForm />
      <InvalidModal />
    </div>
  );
};

export default App;

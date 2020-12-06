import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Tabs from "./tabs/Tabs";
import UserContext from "../../context/UserContext";
import ToolTipForm from "./tabs/ToolTipForm";

export default function Subject() {
  const { userData, setUserData } = useContext(UserContext);
  const [subjects, setSubjects] = useState([]);

  function getSubjects() {
    Axios.get(
      "http://localhost:3030/subjects/" + userData.user.id
    ).then((res) => setSubjects([res.data]));
  }

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className="subject-container">
      <div className="suject-container-inner">
        <div className="subject-container-box">
          <Tabs />
          <div className="subject-holder container">
            <button className="add-tech-button" type="button">
              Add
            </button>
            <ToolTipForm />
            <ul>
              {subjects.map((subject) => {
                return <li>{subject.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

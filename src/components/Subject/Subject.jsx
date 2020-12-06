import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Tabs from "./tabs/Tabs";
import UserContext from "../../context/UserContext";

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
          <div className="subject-holder">
            <button className="add-tech-button" type="button">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

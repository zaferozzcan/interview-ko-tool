import React from "react";
import Tabs from "./tabs/Tabs";

export default function Subject() {
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

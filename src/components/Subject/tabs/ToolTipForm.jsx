import React from "react";

export default function ToolTipForm() {
  return (
    <div style={{ "z-index": "10", margin: "0" }} id="tooltip-form">
      <p class="show-tooltip">+</p>
      <div class="tooltip-form">
        <span class="close-tooltip">X</span>
        <h3>Add More Technology</h3>
        <p>Please fill the fields</p>
        <form
          style={{ display: "flex;flex-direction: column" }}
          action="/subjects"
          method="POST"
        >
          <input
            autocomplete="off"
            name="name"
            type="text"
            placeholder="tech name"
          />
          <select name="area" id="new-area">
            <option value="front-end">front-end</option>
            <option value="back-end">back-end</option>
            <option value="coding-data-structure">coding/data structure</option>
          </select>
          <input
            style={{ "background-color": "lightgray; border-radius: 5px" }}
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
}

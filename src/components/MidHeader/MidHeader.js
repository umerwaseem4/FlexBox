import React from "react";
import DropDown from "./DropDown";
import "./MidHeader.css";

const MidHeader = () => {
  return (
    <div className="midheader mt-40">
      <div className="container">
        <div class="row">
          <div class="column side heading">Umer</div>
          <div class="column side">As Player</div>
          <div class="column middle">As Referee</div>
          <div class="column side">
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;

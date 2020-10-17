import React from "react";
import "./TopHeader.css";

const TopHeader = ({ title, div1, div2, div3 }) => {
  return (
    <div className="header mt-40">
      <div className="container">
        <div class="row">
          <div class="column side heading">{title}</div>
          <div class="column side">
            As Player: <span className="span2">{div1}</span>
          </div>
          <div class="column middle">
            As Referee: <span className="span2">{div2}</span>
          </div>
          <div class="column side">
            As Volunteer: <span className="span2">{div3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

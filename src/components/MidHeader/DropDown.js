import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import "./DropDown.css";

const DropDown = () => {
  return (
    <div>
      <nav class="nav-menu">
        <ul>
          <li id="services">
            <a href="/" className="iconbtn">
              <IconButton>
                <ArrowDownwardIcon />
              </IconButton>
            </a>
            <div class="sub-nav">
              <div class="sub-nav-col left">
                <a href="/" class="sub-nav-box" id="box-1">
                  <div class="icon-background" id="icon-1">
                    <i class="fab fa-sellsy icon"></i>
                  </div>
                  <h4>Marketing</h4>
                  <p>Dedicated ad platform</p>
                </a>
                <a href="/" class="sub-nav-box" id="box-2">
                  <div class="icon-background" id="icon-2">
                    <i class="fas fa-user-lock icon"></i>
                  </div>
                  <h4>Consulting</h4>
                  <p>24/7 support team</p>
                </a>
              </div>
              <div class="sub-nav-col right">
                <a href="/" class="sub-nav-box" id="box-6">
                  <div class="icon-background" id="icon-6">
                    <i class="far fa-calendar-check icon"></i>
                  </div>
                  <h4>Onboarding</h4>
                  <p>Get started quickly</p>
                </a>
                <a href="/" class="sub-nav-box" id="box-7">
                  <div class="icon-background" id="icon-7">
                    <i class="fas fa-briefcase icon"></i>
                  </div>
                  <h4>Resources</h4>
                  <p>FAQ questions</p>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropDown;

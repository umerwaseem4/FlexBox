import React from "react";
import RegisterCard from "../RegisterCards/RegisterCard";

// Cards data
const cardsData = [
  {
    id: 1,
    title: "Register",
    desc: "Max Players",
    desc2: "Entry Fees",
    btn: "Register as Player",
  },
  {
    id: 1,
    title: "Referee",
    desc: "Pay Type",
    desc2: "Pay per match",
    btn: "Register as Referee",
  },
  {
    id: 1,
    title: "Volunteer",
    desc: "Register Yourself as a Volunteer",
    btn: "Register as volunteer",
  },
];

const Register = () => {
  return (
    <div className="register">
      <RegisterCard cardsData={cardsData} />
    </div>
  );
};

export default Register;

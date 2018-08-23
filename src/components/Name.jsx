import React from "react";
let d = new Date();
let n = d.getHours();
let greeting = "Good Morning";
if (n > 11) greeting = "Good Afternoon";
if (n > 17) greeting = "Good Evening";

const Name = props => {
  return (
    <span>
      {props.username && `${greeting}, ${props.username}`}
      {}
    </span>
  );
};

export default Name;

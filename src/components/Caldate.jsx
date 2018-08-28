import React from "react";
let datetoday = new Date();
let day = datetoday.toString().slice(0, 3);
let month = datetoday.toString().slice(4, 7);
let date = datetoday.toString().slice(8, 10);
let dateStyle = {
  fontSize: "35px"
};
const Caldate = () => {
  return (
    <span>
      {`${day}`}
      <br />
      <b>
        <span style={dateStyle}>{`${date}`}</span>
      </b>
      <br />
      {`${month}`}
    </span>
  );
};

export default Caldate;

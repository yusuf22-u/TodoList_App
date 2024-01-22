import React, { useEffect, useState } from "react";
// import CalendarDate from "../component/CalendarDate";

export const TodoStatus = ({
  numOfTasked,
  numOfTaskedLeft,
  numOfPercent,
  setNumOfPercent,
}) => {
  let bar = {
    width: ` ${numOfPercent}` + "%",
  };

  return (
    <div className="status">
      <div className="complete">
        <p>Number of tasks completed</p>
        <h1 className="num">{numOfTasked}</h1>
      </div>
      <div className="percentageBox">
        <h1>Percentage tasks completed</h1>
        <p>{numOfPercent} %</p>
        <div className="skill">
          <div style={bar} className="skill_level"></div>
        </div>

        {/* <CalendarDate /> */}
      </div>
      <div className="complete">
        <p>Number of tasks left</p>
        <h1 className="left">{numOfTaskedLeft}</h1>
      </div>
    </div>
  );
};

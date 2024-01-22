import React from "react";

export const CalendarDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  let week = currentDate.getDay();
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  const weekday = currentDate.toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="calendar-date">
      <h2 style={{ marginLeft: "10px" }}>
        Today's Date{" "}
        <strong style={{ color: "blue", fontSize: "2rem" }}> {weekday}</strong>
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          color: "#36454f",
          marginLeft: "10px",
        }}
        className=""
      >
        <p style={{ marginTop: "10px" }}>
          {day}
          <sup>th</sup>
        </p>
        <p>{month}</p>
        <p style={{ color: "darkred", transform: "scale(1.5)" }}>{year}</p>
      </div>
    </div>
  );
};

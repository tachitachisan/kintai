import React from "react";

const style = {
  backgroundColor: "#da70d6",
  width: "400px",
  height: "70px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const DayAttendance = (props) => {
  const {attText, onClickAttendance, onClickHoliday} = props;
  return (
    <div style={style}>
      <span>{attText}</span>
      <button onClick={onClickAttendance}>
        出勤
      </button>
      <button onClick={onClickHoliday}>
        休暇
      </button>
    </div>
  );
};
import React from "react";

// const style = {
//   backgroundColor: "#da70d6",
//   width: "400px",
//   height: "70px",
//   padding: "8px",
//   margin: "8px",
//   borderRadius: "8px"
// };

export const DayAttendance2 = (index, attText, onClickAttendance, onClickHoliday) => {
  //const {attText, onClickAttendance, onClickHoliday} = props;
  return (
    <div className="dayAttendance">
      <span>{attText}</span>
      <button onClick={onClickAttendance(index)}>
        出勤
      </button>
      <button onClick={onClickHoliday}>
        休暇
      </button>
    </div>
  );
};
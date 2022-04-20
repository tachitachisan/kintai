import React from "react";
import { DayAttendance2 } from "./DayAttendance2";



export const MonthAttendance = (props) => {
    const { monAtt, onClickAttendance, onClickHoliday } = props;
    // console.log(monAtt);
    return (
      <div className="monthAttendance-area">
        <ul>
          {monAtt.map((attText, index) => {
            return (                
            //   <div key={index} className="list-row">
            //     <li>{DayAttendance2(index, attText, onClickAttendance, onClickHoliday)}</li>
            //   </div>
              <div className="dayAttendance">
              <span>{attText}</span>
              <button onClick={() => onClickAttendance(index)}>
                出勤
              </button>
              <button onClick={() => onClickHoliday(index)}>
                休暇
              </button>
            </div>
            );
          })}
        </ul>
      </div>
    );
  };
import React, { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { DayAttendance } from "./components/DayAttendance";
import { MonthAttendance } from "./components/MonthAttendance";

var xx =1;
export const App = () => {

  const [attText, setAttText] = useState("");

  const arrAtt = new Array(31).fill("未入力");
  const [monthAttendance, setMonthAttendance] = useState(arrAtt);
  

  // const onClickAttendance = () =>{
  //   setAttText("出勤！");
  // }
  // const onClickHoliday = () =>{
  //   setAttText("休暇～");
  // }

  const onClickAttendance = (index) =>{
    const newMonAtt = [...monthAttendance];
    newMonAtt[index]="出勤";
    setMonthAttendance(newMonAtt);
    // console.log(monthAttendance);
  }
  const onClickHoliday = (index) =>{
    const newMonAtt = [...monthAttendance];
    newMonAtt[index]="休暇";
    setMonthAttendance(newMonAtt);
    // console.log(monthAttendance);
  }
  // console.log(arrAtt);
  // console.log("aaa");
  
  // if(xx === 1){
  // setMonthAttendance(arrAtt);
  // console.log(xx);
  // xx=2;
  // }
   //console.log(arrAtt);
   //console.log(monthAttendance);

  return (
    <>
      <Header/>
      {/* <DayAttendance
        attText={attText==="" || attText}
        onClickAttendance={onClickAttendance}
        onClickHoliday={onClickHoliday}
      /> */}
      <MonthAttendance
        //attText={attText==="" || attText}
        monAtt={monthAttendance}
        onClickAttendance={onClickAttendance}
        onClickHoliday={onClickHoliday}
      />
    </>
  );
};
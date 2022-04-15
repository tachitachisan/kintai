import React, { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { DayAttendance } from "./components/DayAttendance";

export const App = () => {

  const [attText, setAttText] = useState("");
  const onClickAttendance = () =>{
    setAttText("出勤！");
  }
  const onClickHoliday = () =>{
    setAttText("休暇～");
  }

  return (
    <>
      <Header/>
      <DayAttendance
        attText={attText==="" || attText}
        onClickAttendance={onClickAttendance}
        onClickHoliday={onClickHoliday}
      />
    </>
  );
};
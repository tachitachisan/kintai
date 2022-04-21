import React, { useState } from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { MonthAttendance } from "./components/MonthAttendance";
import { Title } from "./components/Title";
import { InputMonth } from "./components/InputMonth";

export const App = () => {
  //年と月からその月の日数を返す関数
  const monthDays = (year, month)=>{
    return new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();
  }
  const [month, setMonth]=useState("");
  const [monthText, setMonthText]=useState("");
  const onChangeMonthText = (event) => setMonthText(event.target.value);
  const [monthAttendance, setMonthAttendance] = useState([]);

  const thisYear=2022;
  //const thisMonth=4;
  
  
  const onClickMonthText = () => {
    var days;
    if (monthText === "") return;
    setMonth(monthText);
    if(monthText!==""){
     days=monthDays(thisYear, monthText);
    }
    const arrAtt = new Array(days).fill("未入力");
    setMonthAttendance(arrAtt);
  };

  const onClickAttendance = (index) =>{
    const newMonAtt = [...monthAttendance];
    newMonAtt[index]="出勤";
    setMonthAttendance(newMonAtt);
  }
  const onClickHoliday = (index) =>{
    const newMonAtt = [...monthAttendance];
    newMonAtt[index]="休暇";
    setMonthAttendance(newMonAtt);
  }

  return (
    <>
      <Header/>
      <InputMonth
        month={monthText}
        onChangeMonthText={onChangeMonthText}
        onClick={onClickMonthText}
      />
      <Title
        thisYear={thisYear}
        thisMonth={month}
      />
      {month!=="" && (
        <MonthAttendance
          monAtt={monthAttendance}
          onClickAttendance={onClickAttendance}
          onClickHoliday={onClickHoliday}
        />
      )}
    </>
  );
};
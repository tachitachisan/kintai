import React from "react";

export const InputMonth = (props) => {
  const { month, onChangeMonthText, year, onChangeYearText, onClick} = props;
  console.log(props);
  return (
    <div>
      <input
        // disabled={disabled}
        placeholder="年を入力"
        value={year}
        onChange={onChangeYearText}
      />
      <input
        // disabled={disabled}
        placeholder="月を入力"
        value={month}
        onChange={onChangeMonthText}
      />
      <button onClick={() => onClick()}>
        決定
      </button>
    </div>
  );
};
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import style from "./HeadingComponent.module.css";
import exportBtn from "../../../assets/exportButton.png";

export const HeadingComponent = () => {
    const [selectedDate, setSelectedDate] = useState("28.06.24")
    let [searchParams] = useSearchParams();
    let paramValue = searchParams.get('pageName');


  return (
    <div className={style.headingComponentContainer}>
        <h2>{paramValue}</h2>
        <div className={style.datesComponent}>
            <div onClick={() => setSelectedDate("28.06.24")} className={`${selectedDate=="28.06.24"? `${style.selectedDate}` : `${style.notSelectedDate}`}`}>28.06.24</div>
            <div onClick={() => setSelectedDate("12.02.23")} className={`${selectedDate=="12.02.23"? `${style.selectedDate}` : `${style.notSelectedDate}`}`}>12.02.23</div>
            <div onClick={() => setSelectedDate("22.02.23")} className={`${selectedDate=="22.02.23"? `${style.selectedDate}` : `${style.notSelectedDate}`}`}>22.02.23</div>
            <img src={exportBtn}/>
        </div>
    </div>
  )
}

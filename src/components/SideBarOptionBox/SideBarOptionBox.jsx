import React from 'react'
import style from "./SideBarOptionBox.module.css";
import {Link, useSearchParams} from "react-router-dom"
export const SideBarOptionBox = ({img, name, href}) => {
  let [searchParams] = useSearchParams();
  let paramValue = searchParams.get('pageName');

  return (
    <Link to={href} className={`${paramValue == name.toLowerCase()? `${style.backGround}` : ""}`}>
    <div className={style.sideBarOptionBoxContainer}>
        <div className={style.imgContainer}>
            <img src={img} alt={name}/>
        </div>
        <span className={style.optionName}>{name}</span>
    </div>
    </Link>
  )
}

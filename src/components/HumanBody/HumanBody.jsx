import React from 'react'
import human_pattern from "../../assets/human_pattern.png";
import human_color from "../../assets/human_colored.png";
import heartRound from "../../assets/heartRound.png"
import Bottom_loading from "../../assets/Bottom_loading.png";
import style from "./HumanBody.module.css";

export const HumanBody = () => {
  return (
    <div className={style.humanBodyContainer}>
        <div className={style.humanBody}>
            <img src={human_pattern} alt="human_pattern"/>
        </div>
        <div className={style.humanBodyHeart}>
            <img src={heartRound} alt="human_pattern"/>
        </div>
        <div className={style.loadingContainer}>
            <img src={heartRound} alt="Bottom_loading"/>
        </div>
    </div>
  )
}

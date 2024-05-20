import React from 'react'
import style from "./AnalysisReport.module.css";
import { HeadingComponent } from './HeadingComponent/HeadingComponent';
import reportGraph from "../../assets/reportGraph.png";
import doctorDetails from "../../assets/doctorDetails.png";
import prescriptionDetails from "../../assets/prescriptionDetails.png"
import graph from "../../assets/graph.png"
export const AnalysisReport = () => {
  return (
    <div className={style.analysisReportContainer}>
        <div className={style.heading}>
            <HeadingComponent/>
        </div>
        <div className={style.reports}>
          <img src={reportGraph}/>
        </div>
        <div className={style.analysisHeading}>
        <HeadingComponent/>
        </div>
        <div className={style.graphs}>
          <img src={graph} alt="" />
        </div>
        <div className={style.contactDetails}>
          <img src={doctorDetails} alt="" />
          <img src={prescriptionDetails}/>
        </div>
    </div>
  )
}

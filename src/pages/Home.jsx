import React from 'react';
import style from "./CSS/Home.module.css"
import { SideNavbar } from '../components/SideNavBar/SideNavbar';
import { HumanBody } from '../components/HumanBody/HumanBody';
import { AnalysisReport } from '../components/AnalysisReport/AnalysisReport';


export const Home = () => {
  return (
    <div className={style.homePageContainer}>
        <div className={style.sideNavBar}>
            <SideNavbar/>
        </div>
        <div className={style.bodyScanner}>
          <HumanBody/>
        </div>
        <div className={style.ScannerDetails}>
          <AnalysisReport/>
        </div>
    </div>
  )
}

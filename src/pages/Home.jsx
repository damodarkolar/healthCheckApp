import React from 'react';
import style from "./CSS/Home.module.css"
import { SideNavbar } from '../components/SideNavBar/SideNavbar';

export const Home = () => {
  return (
    <div className={style.homePageContainer}>
        <div className={style.sideNavBar}>
            <SideNavbar/>
        </div>
        <div className={style.bodyScanner}></div>
        <div className={style.ScannerDetails}></div>
    </div>
  )
}

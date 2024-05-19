import React from 'react'
import general from "../../assets/general.png";
import eye from "../../assets/Eye.png";
import neuron from "../../assets/Neuron.png";
import lungs from "../../assets/Lungs.png";
import heart from "../../assets/heart.png";
import radiology from "../../assets/radiology.png";
import analysis from "../../assets/Analysis.png";
import help from "../../assets/Help.png";
import settings from "../../assets/Settings.png";
import hair from "../../assets/Hair.png"
import { SideBarOptionBox } from '../SideBarOptionBox/SideBarOptionBox';
import style from "./SideNavbar.module.css";
export const SideNavbar = () => {
  return (
    <div className={style.sideNavBarContainer}>
        <SideBarOptionBox {...{img:general, name:"General", href:"/home?pageName=general"}}/>
        <SideBarOptionBox {...{img:eye, name:"Optometry", href:"/home?pageName=optometry"}}/>
        <SideBarOptionBox {...{img:neuron, name:"Neurology", href:"/home?pageName=neurology"}}/>
        <SideBarOptionBox {...{img:lungs, name:"Pulmonology", href:"/home?pageName=pulmonology"}}/>
        <SideBarOptionBox {...{img:heart, name:"Cardiology", href:"/home?pageName=cardiology"}}/>
        <SideBarOptionBox {...{img:radiology, name:"Radiology", href:"/home?pageName=radiology"}}/>
        <SideBarOptionBox {...{img:hair, name:"Dermatology", href:"/home?pageName=dermatology"}}/>
        <SideBarOptionBox {...{img:analysis, name:"Analysis", href:"/home?pageName=analysis"}}/>
        <SideBarOptionBox {...{img:help, name:"Help", href:"/home?pageName=help"}}/>
        <SideBarOptionBox {...{img:settings, name:"Settings", href:"/home?pageName=settings"}}/>
    </div>
  )
}

import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import DropdownList from "./DropdownList";
import {dropdownListElements} from "./dataForElements";

/*
this panel is the 2nd from the top on the left side;
it`s task is to capture user`s Flexbox selection and transform the actionBoxes on the right side as per the settings
all the props starts with set.... are just transiting (passing thru) from App.jsx to it`s children; 
where these fn-s calibrate the DemoPanel`s flexbox settings with the current user`s selections;
all the props ends with ...Data are the dropdown texts (rows) and labels for the dropdown lists*/

const ParentSettingsPanel = ({ id, title, setCurrentFlexDirection, setCurrentFlexWrap, setCurrentJustifyContent, setCurrentAlignItems, setCurrentAlignContent, glowSwitch }) => {
  const [resetAllParentSettings, setResetAllParentSettings]=useState(false);//state is used to warn the dropdownlists to re-set
  const resetParentDivSettings=()=>{
    setResetAllParentSettings(!resetAllParentSettings); //warn the DropdownLists to re-set
  }
  return (
    <StyledParentSettingsPanel id={id} className="panel">
      <h3>{title}</h3>
      <div className="leftColumn">
        <DropdownList dropdownData={dropdownListElements.flexDirectionData} actionToDo={setCurrentFlexDirection} resetAllParentSettings={resetAllParentSettings} glowSwitch={glowSwitch}/>
        <DropdownList dropdownData={dropdownListElements.flexWrapData} actionToDo={setCurrentFlexWrap} resetAllParentSettings={resetAllParentSettings} glowSwitch={glowSwitch}/>
        <DropdownList dropdownData={dropdownListElements.justifyContentData} actionToDo={setCurrentJustifyContent} resetAllParentSettings={resetAllParentSettings} glowSwitch={glowSwitch}/>
      </div>
      <div className="rightColumn">
        <DropdownList dropdownData={dropdownListElements.alignItemsData} actionToDo={setCurrentAlignItems} resetAllParentSettings={resetAllParentSettings} glowSwitch={glowSwitch}/>
        <DropdownList dropdownData={dropdownListElements.alignContentData} actionToDo={setCurrentAlignContent} resetAllParentSettings={resetAllParentSettings} glowSwitch={glowSwitch}/>
        <Button text="reset" id={"btnParentSettingsReset"} actionToDo={resetParentDivSettings}/>
      </div>
    </StyledParentSettingsPanel>
  );
};

export default ParentSettingsPanel;    
const StyledParentSettingsPanel=styled.div`
grid-row: 2;
grid-column: 1/3;
background-image: linear-gradient(to right, white, var(--clr-base2) 20%);
grid-template-columns: 10% repeat(2, 1fr);
`
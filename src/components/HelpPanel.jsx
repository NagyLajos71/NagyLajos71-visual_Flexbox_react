import React from "react";
import styled from "styled-components";
import CheckBox from "./Checkbox";

/*
this is the panel is located in the top left corner.
It`s purpose is to hold two checkboxes. 
The selected checkboxes can reveal the axis directions or additional info about Flexbox settings on mouse hover
*/

const HelpPanel = ({ id, title, axisDirectionVisible, setAxisDirectionVisible, glowSwitch, setGlowSwitch }) => {
  return (
    <StyledHelpPanel id={id} className="panel">
      <StyledH3>{title}</StyledH3>
        <CheckBox id={"axisCheckBox"} text={"show Axis directions"} valueToToggle={axisDirectionVisible} actionToDo={setAxisDirectionVisible}/>      
        <CheckBox id={"helpCheckBox"} text={"additional info when hover"} valueToToggle={glowSwitch} actionToDo={setGlowSwitch}/>  
        
    </StyledHelpPanel>
  );
};
export default HelpPanel;
const StyledHelpPanel=styled.div`
grid-template-columns: 20% auto;
grid-template-rows: repeat(2, 1fr);
grid-row: 1;
grid-column: 1;
background-image: linear-gradient(to right, white, var(--clr-base1) 40%);
`;
const StyledH3=styled.h3`
grid-row: 1/3;
grid-column: 1;
`


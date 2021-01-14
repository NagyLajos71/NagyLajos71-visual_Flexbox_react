import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DropdownList = ({
  //INCOMING PROPS
  dropdownData,
  receivedData,
  actionToDo,
  clickedBoxID,
  resetAllParentSettings,
  resetAllActionBoxSettings,
  glowSwitch
}) => {
  //STATE values
  const [valueToShow, setValueToShow] = useState(dropdownData.options[0]);
  const [glow, setGlow]=useState(null);

  //USEFFECT
  useEffect(() => {
    setValueToShow(receivedData); //if the user clicks on a new actionBox, update the inputfield with the current actionbox css styling
  }, [clickedBoxID]);
  useEffect(()=>{
    setValueToShow(dropdownData.options[0]);
    actionToDo(dropdownData.options[0]);
  },[resetAllParentSettings]);
  useEffect(()=>{
    setValueToShow(dropdownData.options[0]);
    actionToDo(dropdownData.options[0]);
  },[resetAllActionBoxSettings]);
  useEffect(()=>{
    setGlow(glowSwitch?'0 0 21px 1px black':null)
  },[glowSwitch]);

  //HANDLE CLICK EVENT
  const onChangeHandler = (e) => {
    setValueToShow(e.target.value); //show the selected option as a visual feedback
    actionToDo(e.target.value); //send the user provided value to the actionbox so it`s css can be modified accordingly
  };

  //RENDERING OPTIONS for dropdown list
  const allDropDownChoices = dropdownData.options.map((dropdownLine) => {
    return <option key={dropdownLine}>{dropdownLine}</option>;
  });

  //COMPONENT RETURN
  
  return (
    <StyledDropdownContainer>
      <label htmlFor={dropdownData.id}>{dropdownData.selectName} : </label>
      <select
        name={dropdownData.selectName}
        id={dropdownData.id}
        value={valueToShow}
        onChange={onChangeHandler}
        onMouseEnter={(e)=>{console.log(e.target.name, e.target.value)}}
        style={{boxShadow:glow}}
      >
        {allDropDownChoices}
      </select>
    </StyledDropdownContainer>
  );
};
export default DropdownList;

//styled component settings
const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
/*
this component is used in ParentSettingsPanel and ItemSettingsPanel as child component
it creates dropdown lists for different kind of Flexbox settings, like flex direction, align items... etc
dropdownData = all the dropdown options are kept in a separate file; 
The root of the data source is: dropDownListElements.js, although it is received from ParentSettingsPanel.jsx, 
because that component splits it up and sorts out for it`s children.
There are two parent components (ParentSettingsPanel, ItemSettingsPanel) 
the dropdownData contains all the options the user can choose from plus label text and id
the actioTodo is the setter FN for useStates located in App.js. Those apply the current
Flexbox settings for the actionBoxes on the DemoPanel*/

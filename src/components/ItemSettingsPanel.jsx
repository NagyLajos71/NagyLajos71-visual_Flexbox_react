import React, { useState } from "react";
import styled from "styled-components";
import DropdownList from "./DropdownList";
import { dropdownListElements } from "./dataForElements";
import InputField from "./InputField";
import Button from "./Button";

const SettingsPanelItem = ({
  id,
  title,
  clickedBoxID,
  computedActionBoxBgrColor,
  computedOrder,
  setNewOrder,
  computedAlignSelf,
  setNewAlignSelf,
  computedFlexGrow,
  setNewFlexGrow,
  computedFlexShrink,
  setNewFlexShrink,
  computedFlexBasis,
  setNewFlexBasis,
  glowSwitch,
}) => {
  const [resetAllActionBoxSettings, setResetAllActionBoxSettings] = useState(
    false
  ); //state is used to warn the dropdownlists/inputfields to re-set; boolean has no meaning merely to track the clicks with !(reverse)
  const resetActionBoxSettings = () => {
    console.log("clicked!");
    setResetAllActionBoxSettings(!resetAllActionBoxSettings); //warn the DropdownLists to re-set
  };
  return (
    <StyledItemSettingsPanel id={id} className="panel">
      <h3>{title}</h3>
      <div className="leftColumn">
        <InputField
          id={"order"}
          text={"visual order"}
          min={"0"}
          type={"number"}
          defaultVal={"1"}
          clickedBoxID={clickedBoxID}
          receivedData={computedOrder}
          actionToDo={setNewOrder}
          resetAllActionBoxSettings={resetAllActionBoxSettings}
          glowSwitch={glowSwitch}
        />
        <DropdownList
          dropdownData={dropdownListElements.alignSelfData}
          clickedBoxID={clickedBoxID}
          receivedData={computedAlignSelf}
          actionToDo={setNewAlignSelf}
          resetAllActionBoxSettings={resetAllActionBoxSettings}
          glowSwitch={glowSwitch}
        />
        <InputField
          id={"flexGrow"}
          text={"flex grow"}
          min={"0"}
          type={"number"}
          defaultVal={"0"}
          clickedBoxID={clickedBoxID}
          receivedData={computedFlexGrow}
          actionToDo={setNewFlexGrow}
          resetAllActionBoxSettings={resetAllActionBoxSettings}
          glowSwitch={glowSwitch}
        />
      </div>
      <div className="rightColumn">
        <InputField
          id={"flexShrink"}
          text={"flex shrink"}
          min={0}
          type={"number"}
          defaultVal={"1"}
          clickedBoxID={clickedBoxID}
          receivedData={computedFlexShrink}
          actionToDo={setNewFlexShrink}
          resetAllActionBoxSettings={resetAllActionBoxSettings}
          glowSwitch={glowSwitch}
        />
        <InputField
          id={"flexBasis"}
          text={"flex basis"}
          type={"text"}
          defaultVal={"auto"}
          clickedBoxID={clickedBoxID}
          receivedData={computedFlexBasis}
          actionToDo={setNewFlexBasis}
          resetAllActionBoxSettings={resetAllActionBoxSettings}
          glowSwitch={glowSwitch}
        />
        <Button
          text="reset"
          id={"BtnItemSettingsReset"}
          actionToDo={resetActionBoxSettings}
        />
        <StyledLetter
        
        style={{ backgroundColor: computedActionBoxBgrColor }}
      >
        {clickedBoxID}
      </StyledLetter>
      </div>
      
    </StyledItemSettingsPanel>
  );
};
export default SettingsPanelItem;

const StyledItemSettingsPanel=styled.div`
grid-row: 3;
grid-column: 1/3;
background-image: linear-gradient(to right, white, var(--clr-base3) 20%);
position: relative; /*hogy a reference letter-t pozicionalni tudjam absolute modon*/
grid-template-columns: 10% repeat(2, 1fr);
`;
const StyledLetter=styled.div`
--size: 3vw;
position: absolute; /*reference: itemsettingsPanel*/
bottom: 15%;
right: 30%;
width: var(--size);
height: var(--size);
border: 1px solid var(--clr-paint5);
border-radius: 5px;
color: var(--clr-paint2);
text-shadow: var(--text-shadow);
font-weight: 700;
font-size: var(--size);
text-align: center;
line-height: var(--size);
`;
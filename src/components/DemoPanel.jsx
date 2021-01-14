import React from "react";
import styled from "styled-components";
import ActionBox from "./ActionBox";
import { uniqueIdentifiers } from "./dataForElements";

const DemoPanel = ({
  //received PROPS from App.js
  id,
  elementsOnDemoPanel, //number of actionBoxes(colored box-like elements with big letters) to show on the panel
  //PARENT DIV SETTINGS
  currentFlexDirection,
  currentFlexWrap,
  currentJustifyContent,
  currentAlignItems,
  currentAlignContent,
  //ACTION BOX SETTINGS
  clickedBoxID, setclickedBoxID, setComputedActionBoxBgrColor,
  setComputedOrder, newOrder, setNewOrder,
  setComputedAlignSelf,newAlignSelf,setNewAlignSelf,
  setComputedFlexGrow,newFlexGrow,setNewFlexGrow,
  setComputedFlexShrink,newFlexShrink,setNewFlexShrink,
  setComputedFlexBasis,newFlexBasis,setNewFlexBasis
}) => {
  /*
  NUMBER OF ACTIONBOXES based on user setting with plus/minus buttons
  selecting as many letters from the string 'showOnlyThisMuchItems' as many items the user wants to see;
  the letters will serve as unique ID-s*/
  const showOnlyThisMuchItems = Array.from(
    uniqueIdentifiers.slice(0, elementsOnDemoPanel)
  );

  /*
  PARENT CONTAINER Flexbox style settings; 
  these are all PARENT CONTAINER Flexbox settings!
  the parentComponentFlexboxSettings variable will be used in inline styling with Object.assign() FN*/
  const receivedParentComponentStyle = {
    flexDirection: currentFlexDirection,
    flexWrap: currentFlexWrap,
    justifyContent: currentJustifyContent,
    alignItems: currentAlignItems,
    alignContent: currentAlignContent,
  };

  //creating css settings for the active actionBox
  const clickedActionBoxFlexboxSettings = {};

  /*creating as many rendered colored actionBoxes as much the user wants; 
  each has a unique letter to make identifying easy*/
  const asManyNumberOfActionBoxesUserWantsToSee = showOnlyThisMuchItems.map(
    (letter) => {
      return <ActionBox key={letter} letter={letter} clickedBoxID={clickedBoxID} setclickedBoxID={setclickedBoxID} setComputedActionBoxBgrColor={setComputedActionBoxBgrColor} setComputedOrder={setComputedOrder} newOrder={newOrder} setNewOrder={setNewOrder} setComputedAlignSelf={setComputedAlignSelf} newAlignSelf={newAlignSelf} setNewAlignSelf={setNewAlignSelf} setComputedFlexGrow={setComputedFlexGrow} newFlexGrow={newFlexGrow} setNewFlexGrow={setNewFlexGrow} setComputedFlexShrink={setComputedFlexShrink} newFlexShrink={newFlexShrink} setNewFlexShrink={setNewFlexShrink} setComputedFlexBasis={setComputedFlexBasis} newFlexBasis={newFlexBasis} setNewFlexBasis={setNewFlexBasis}/>;
    }
  );

  //COMPONENT RETURN STATEMENT
  return (
    <StyledDemoPanel id={id} className="panel" style={receivedParentComponentStyle}>
      {asManyNumberOfActionBoxesUserWantsToSee}
    </StyledDemoPanel>
  );
};
export default DemoPanel;
const StyledDemoPanel=styled.div`
display: flex;
overflow: hidden;
padding-left: 2vw;
grid-row: 1/4;
grid-column: 3;
background-color: var(--clr-paint2);
background-image: linear-gradient(to left, white, var(--clr-paint2) 10%);
`
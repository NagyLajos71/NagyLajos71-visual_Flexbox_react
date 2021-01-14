//COMPONENT DOCUMENTATION BELOW
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ActionBox = ({
  //INCOMING PROPS

  letter,
  clickedBoxID,
  setclickedBoxID,
  setComputedActionBoxBgrColor,
  setComputedOrder,
  newOrder,
  setNewOrder,
  setComputedAlignSelf,
  newAlignSelf,
  setNewAlignSelf,
  setComputedFlexGrow,
  newFlexGrow,
  setNewFlexGrow,
  setComputedFlexShrink,
  newFlexShrink,
  setNewFlexShrink,
  setComputedFlexBasis,
  newFlexBasis,
  setNewFlexBasis

}) => {
  //STATE values

  const [appliedOrder, setAppliedOrder] = useState('1');
  const [appliedAlignSelf, setAppliedAlignSelf] = useState('auto');
  const [appliedFlexGrow, setAppliedFlexGrow]=useState('0');
  const [appliedFlexShrink, setAppliedFlexShrink]=useState('1');
  const [appliedFlexBasis, setAppliedFlexBasis]=useState('auto');

  //USEFFECTS

  useEffect(() => {
    //usefect#1 to update inputfield with current Order value
    if (letter === clickedBoxID) {
      setAppliedOrder(newOrder);
    }
  }, [newOrder, clickedBoxID]);

  useEffect(() => {
    //usefect#2 to update dropdown with current Align Self value
    if (letter === clickedBoxID) {
      setAppliedAlignSelf(newAlignSelf);
    }
  }, [newAlignSelf, clickedBoxID]);

  useEffect(() => {
    //usefect#3 to update inputfield with current Flex Grow value
    if (letter === clickedBoxID) {
      setAppliedFlexGrow(newFlexGrow);
    }
  }, [newFlexGrow, clickedBoxID]);

  useEffect(() => {
    //usefect#4 to update inputfield with current Flex Shrink value
    if (letter === clickedBoxID) {
      setAppliedFlexShrink(newFlexShrink);
    }
  }, [newFlexShrink, clickedBoxID]);

  useEffect(() => {
    //usefect#5 to update inputfield with current Flex Basis value
    if (letter === clickedBoxID) {
      setAppliedFlexBasis(newFlexBasis);
    }
  }, [newFlexBasis, clickedBoxID]);

  //HANDLE CLICK EVENT

  const handleClick = (e) => {
    // console.log('handleClick')
    const currentActionBoxStylings = window.getComputedStyle(e.target, null); //read current value
    setclickedBoxID(letter);
    setComputedActionBoxBgrColor(currentActionBoxStylings.backgroundColor);
    setNewOrder(currentActionBoxStylings.order); //clear previous setting and update with current one
    setComputedOrder(currentActionBoxStylings.order); //sent the currently read value to dropdown list

    setNewAlignSelf(currentActionBoxStylings.alignSelf);
    setComputedAlignSelf(currentActionBoxStylings.alignSelf);
    
    setNewFlexGrow(currentActionBoxStylings.flexGrow);
    setComputedFlexGrow(currentActionBoxStylings.flexGrow)
    
    setNewFlexShrink(currentActionBoxStylings.flexShrink);
    setComputedFlexShrink(currentActionBoxStylings.flexShrink)

    setNewFlexBasis(currentActionBoxStylings.flexBasis);
    setComputedFlexBasis(currentActionBoxStylings.flexBasis)
  };

  //COMPONENT RETURN

  return (
    <StyledActionDiv
      onClick={handleClick}
      style={{ order: appliedOrder, alignSelf: appliedAlignSelf, flexGrow: appliedFlexGrow, flexShrink: appliedFlexShrink, flexBasis: appliedFlexBasis }}
    >
      {letter}
    </StyledActionDiv>
  );
};
export default ActionBox;

//STYLING

const StyledActionDiv = styled.div`
  order: 1;
  margin: 3px;
  border-radius: 7%;
  box-shadow: 5px 10px rgba(25, 25, 112, 0.562);
  font-weight: 700;
  font-size: 10vmin;
  color: var(--clr-paint2);
  text-align: center;
  text-shadow: var(--text-shadow);
  width: auto;

  &:nth-of-type(3n + 0) {
    background-color: var(--clr-paint5);
    border: 2px solid var(--clr-paint4);
    border-bottom: 4px solid var(--clr-paint4);
  }
  &:nth-of-type(3n + 1) {
    background-color: var(--clr-paint3);
    border: 2px solid var(--clr-paint4);
    border-bottom: 4px solid var(--clr-paint4);
  }
  &:nth-of-type(3n + 2) {
    background-color: var(--clr-paint4);
    border: 2px solid var(--clr-paint4);
    border-bottom: 4px solid var(--clr-paint4);
  }
`;

/*COMPONENT DOCUMENTATION

ActionBoxes- these are the colored boxes on the right side with big letters on them, acting as unique IDs.

it`s Parent Component: DemoPanel.jsx;
it`s Child Component(s): none;
functionality: the actionboxes create the visual representation of all the Flexbbox css changes the user make on the two setting panels.
their number can be modified with the big plus/minus buttons, also their current number is visible next to these buttons

states:
appliedOrder-this value will update the css order setting ONLY of the currently selected actionBox (so not all of them, just one!)

received props:
letter -unique id for every box, this is what the user can see on them as big capital letter
clickedBoxID- the letter on the CLICKED actionBox
setclickedBoxID-the ability to change the clickedBoxID when the user clicks on a new actionBox
setComputedOrder- to read the current css settings for the order property and send it thru to App>ItemSettingSpanel>InputField
newOrder-the new order value set by the user on the InputField of the ItemSettingsPanel; this value will update the currently selected actionBox settings
setNewOrder-the main action happens in the ItemSettingsPanel, but I had to use it here, too, to clear possible previous value,
and update with the currently selected actionBox setting; without that at the new click the new actionBox would be updated with the previous value

useEffects:
when rendering all the actionBoxes, out of the many boxes on the screen, if the actionBox ID is equal to the clicked actionBox id,
change that and only that setting for the clicked actionBox with user set data ( which is received from the ItemSettingsPanel thru prop system via App.js)

handleClick:
when clicking on any actionbox, read the current css settings, clear/update previous incoming information, and sent the currently read information to 
ItemSettingsPanel to display it for the user

style:
inline styling reserved for the dynamic values - those ones the user can modify on ItemSettingsPanel
styled component- all the rest css styling
applied css variables are set in index.css
*/

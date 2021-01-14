import React from "react";
import styled from "styled-components";
import {uniqueIdentifiers} from './dataForElements';//to determine the maximum number allowed when clicking on plus btn

/*
in this app there are 3 kind of buttons: Plus, Minus & Reset; 
Reset occurs 2 times with different settings to target; One re-sets the parent div settings, 
the other re-sets the currently selected actionBox settings
actionBox = colored box with big letter on the right 
the plus /minus btns modify the number of action boxes on DemoPanel.jsx*/

const Button = ({ text, id, numberOfItems, setNumberOfItems, actionToDo }) => {

  const onClickHandler = () => {
    if (id === "btnPlus" && numberOfItems <= uniqueIdentifiers.length) {//if this is the plus button, add one element to the DemoPanel
      setNumberOfItems(numberOfItems + 1);//limiting the maximum number of elements
    } else if (id === "btnMinus" && numberOfItems > 0) {//remove one element from the DemoPanel
      setNumberOfItems(numberOfItems - 1);//count should not go below 0
    } else if (id === "btnParentSettingsReset") {
      actionToDo()//reset parent div settings
      
    } else {
      actionToDo()
    }
  };

  return (
    <StyledBtn id={id} onClick={onClickHandler}>
      {text}
    </StyledBtn>
  );
};
export default Button;

//styled component settings
const StyledBtn = styled.button`
  width: 30%;
  margin-left: auto;
  font-size: 1.5rem;
  transition:500ms;
  border-radius: 5px;
  outline: none;
  color: var(--clr-base2);
  background-color: var(--clr-paint5);
  &:hover{
    transform:scale(1.05);
  }
`;

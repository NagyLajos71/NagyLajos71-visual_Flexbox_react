import React, { useEffect, useState } from "react";
import styled from "styled-components";

/*the only parent component is the HelpPanel.jsx*/

const CheckBox = ({ id, text, valueToToggle, actionToDo}) => {
  const [checked, setChecked]=useState(false);

  //handling changeEvent on checkbox
  const onChangeHandler=()=>{
    setChecked(!checked);
    actionToDo(!valueToToggle); 
  };

  return (
    <StyledDiv>
      <StyledInput type="checkbox" id={id} checked={checked} onChange={onChangeHandler} />
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
      </StyledDiv>
  );
};
export default CheckBox;

//styled component settings
const StyledDiv = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  &:hover label{
    transform:scale(1.05)
  }
`;
const StyledLabel=styled.label`
transition:500ms;
float: right;
width: 100%;
`;
const StyledInput=styled.input`
transform: scale(1.7);
`;



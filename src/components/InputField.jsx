import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputFiled = ({
  ///INCOMING PROPS
  id,
  min,
  defaultVal,//min nem minden esetben egyezik meg a defaultVal ertekevel
  text,
  type,
  clickedBoxID,
  receivedData,
  actionToDo,
  resetAllActionBoxSettings,
  glowSwitch
  
}) => {
  //STATE values
  const [valueToShow, setValueToShow] = useState(defaultVal); //this is what appears in the inputfiled
  const [glow, setGlow]=useState(null);

  //ON CHANGE HANDLER
  const onChangeHandler = (e) => {
    setValueToShow(e.target.value); //show the new value in the inputfiled as a visual feedback
    // actionToDo(e.target.value);//send the user provided value to the actionbox so it`s css can be modified accordingly
  };
  useEffect(()=>{actionToDo(valueToShow)},[valueToShow])
  //USEFFECT
  useEffect(() => {
    setValueToShow(receivedData); //if the user clicks on a new actionBox, update the inputfield with the current actionbox css styling
  }, [
    clickedBoxID,
  ]); /*the inputfield should be updated if
      there was a different actionbox clicked or the user typed in something into the inputfield*/
  /*if inputfiled text has changed, but not because the was a click on a different actionbox,
      but because the user typed new data, send the update to demopanel to change the actionbox styling*/
  useEffect(()=>{setValueToShow(defaultVal)},[resetAllActionBoxSettings])
  useEffect(()=>{
    setGlow(glowSwitch?'0 0 21px 1px black':null)
  },[glowSwitch]);

  //COMPONENT RETURN
  return (
    <StyledInputContainer>
      <label htmlFor={id}>{text}: </label>
      <input
        id={id}
        type={type}
        spellCheck="false"
        name={id}
        value={valueToShow}
        min={min}
        onChange={onChangeHandler}
        style={{boxShadow:glow}}
      />
    </StyledInputContainer>
  );
};
export default InputFiled;

const StyledInputContainer=styled.div`
display: flex;
justify-content: space-between;
`
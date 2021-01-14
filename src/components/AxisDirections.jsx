import React, { useEffect, useState } from "react";
import styled from "styled-components";

/* this panel is not visible by default. 
 a click on the 'show Axis direction' checkbox will reveal it on top 
 of the DemoPanel,jsx (right side)
 It shows the axis [Main, Cross] directions as the texts are aligned
 horizontally and vertically; 
 reminder: the axis directions depend on 'flex direction' settings*/

const AxisDirections = ({ axisDirectionVisible, currentFlexDirection }) => {
  const [horizontalAxis, setHorizontalAxis] = useState("");
  useEffect(() => {
    setHorizontalAxis(
      currentFlexDirection === "row" || currentFlexDirection === "row-reverse"
        ? "MAIN AXIS"
        : "CROSS AXIS"
    );
  }, [currentFlexDirection]);
  if (axisDirectionVisible) {
    return (
      <StyledOverlapPanel className="panel">
        <StyledAxisText style={horizontalPosition}>{horizontalAxis}</StyledAxisText>
        <StyledAxisText style={verticalPosition}>
          {horizontalAxis === "MAIN AXIS" ? "CROSS AXIS" : "MAIN AXIS"}
        </StyledAxisText>
        <StyledHintText>
          Hint: change axis directions with flex-direction property
        </StyledHintText>
      </StyledOverlapPanel>
    );
  } else {
    return null;
  }
};
export default AxisDirections;

//STYLING
const horizontalPosition ={top: '10%',right: '10%'};
const verticalPosition= {bottom: '35%',left: '-5%',transform: 'rotate(-90deg)'};
const StyledOverlapPanel = styled.div`
  background-image: linear-gradient(to left, white, var(--clr-base1) 40%);
  position: relative;
  grid-row: 1/4;
  grid-column: 3;
`;
const StyledAxisText = styled.p`
  position: absolute;
  display: block;
  font-size: 5.5vmin;
  font-weight: 900;
  color: var(--clr-paint5);
  text-shadow: 2px 2px var(--clr-paint2);
`;
const StyledHintText=styled.p`
position: absolute;
bottom: 5%;
right: 5%;
color: var(--clr-paint5);
`;


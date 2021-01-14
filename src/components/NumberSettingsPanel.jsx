import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { numberOfElementsToStartWith } from "./dataForElements"; //initial value: 5 - this many actionBoxes are present initially

/*the purpose of this component is to hold 2 buttons to modify the number of the elements on the right side.
With these buttons the user can change the number of the elements to be seen on screen. All those
elements have alphabetical id;
there is an upper limit how many elements can be added; in Button.jsx the btnPlus imports uniqueIdentifiers.length to determine the maximum number*/

const NumberSettingsPanel = ({ id, title, setElementsOnDemoPanel }) => {
  const [numberOfItems, setNumberOfItems] = useState(
    numberOfElementsToStartWith
  ); //to track how many colored boxes exist on the right panel
  useEffect(() => {
    setElementsOnDemoPanel(numberOfItems);
  }, [numberOfItems]);
  return (
    <StyledNumberSettingsPanel id={id} className="panel">
      <StyledH3>{title}</StyledH3>
      <Button
        id={"btnMinus"}
        text="-"
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
      />
      <StyledLabel id="plusMinusLabel">{numberOfItems} </StyledLabel>
      <Button
        id={"btnPlus"}
        text="+"
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
      />
    </StyledNumberSettingsPanel>
  );
};
export default NumberSettingsPanel;

//styled component settings
const StyledNumberSettingsPanel = styled.div`
  grid-row: 1;
  grid-column: 2;
  background-color: var(--clr-base1);
  grid-template-columns: 20% auto;
  grid-template-rows: repeat(3, 1fr);
`;
const StyledLabel = styled.label`
  width: 30%;
  margin: auto;
  font-size: 1.5rem;
  transform: scale(2);
`;
const StyledH3=styled.h3`
grid-row: 1/4;
grid-column: 1;
`;

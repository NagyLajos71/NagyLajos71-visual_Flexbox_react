//COMPONENT DOCUMENTATION BELOW
import React, { useState } from "react";
import styled from "styled-components";
import HelpPanel from "./components/HelpPanel";
import NumberSettingsPanel from "./components/NumberSettingsPanel";
import DemoPanel from "./components/DemoPanel";
import ParentSettingsPanel from "./components/ParentSettingsPanel";
import ItemSettingsPanel from "./components/ItemSettingsPanel";
import AxisDirections from './components/AxisDirections';


import {
  dropdownListElements,
  numberOfElementsToStartWith,
} from "./components/dataForElements"; //initial value is 5

function App() {
  //STATE values
  //NUMBER OF ACTIONBOXES: setElementsOnDemoPanel creates as many elements on DemoPanel as many is set by user with +- buttons
  const [elementsOnDemoPanel, setElementsOnDemoPanel] = useState(
    numberOfElementsToStartWith
  ); //the elements... will be passed down to DemoPanel, the set... will be passed to NumberSettingsPanel to use in useEffect hook

  //PARENT CONTAINER FLEXBOX SETTINGS (DemoPanel): the values will be passed down to DemoPanel.jsx the setting FN-s to ParentSettingsPanel.jsx and further down to DropdownList.jsx as 'actionTodo'
  const [currentFlexDirection, setCurrentFlexDirection] = useState(
    dropdownListElements.flexDirectionData.options[0]
  ); //initial value 'row'
  const [currentFlexWrap, setCurrentFlexWrap] = useState(
    dropdownListElements.flexWrapData.options[0]
  ); //initial value 'nowrap'
  const [currentJustifyContent, setCurrentJustifyContent] = useState(
    dropdownListElements.justifyContentData.options[0]
  ); //initial value 'flex-start'
  const [currentAlignItems, setCurrentAlignItems] = useState(
    dropdownListElements.alignItemsData.options[0]
  ); //'initial value 'stretch'
  const [currentAlignContent, setCurrentAlignContent] = useState(
    dropdownListElements.alignContentData.options[0]
  ); //initial value 'stretch'

  /*ITEM SETTINGS
  ItemSettingsPanel.jsx has dropdowns and inputfields. Their task is:
  to read and show the current actionBox setting;
  also to set new css values for the currently used actionBox if the user changes any of them;
  So the setting goes back and forth. The clicked actionBox settings determine 
  what kind of values can the user see on the ItemSettingsPanel dropdown lists and input fields;
  also any changes on these fields modify the css settings on the currently observed actionBox;
  all the states are created here in App.js.
  The currently selected action box css settings are read by window.getComputedStyle(actionBox,null) FN, 
  and then the value will be passed as props: App.js > (ItemSettingsPanel.jsx> InputFiled.jsx or DropdownList.jsx)
  note: initially these values are coming from the clicked actionBox getComputedStyle() FN; 
  if the user changes them, they update the current actionBox settings
  the ID letter of the current actionBox is visible on the ItemSettingsPanel next to the reset button*/
  const [clickedBoxID, setclickedBoxID]=useState('');//the letter on the ActionBox; it changes when we click on an other box
  const [computedOrder, setComputedOrder]=useState('');//current Order value, read from window.computedValue(); changes might occur clicking on other actionbox
  const [newOrder, setNewOrder]=useState('');//value set by the user, modifies the currently selected actionBox
  const [computedAlignSelf, setComputedAlignSelf]=useState('');//current AlignSelf value, read from window.computedValue(); changes might occur clicking on other actionbox
  const [newAlignSelf, setNewAlignSelf]=useState('');//value set by the user, modifies the currently selected actionBox`s align self value
  const [computedFlexGrow, setComputedFlexGrow]=useState('');
  const [newFlexGrow, setNewFlexGrow]=useState('');
  const [computedFlexShrink, setComputedFlexShrink]=useState('');//current FlexShrink value, read from window.computedValue(); changes might occur clicking on other actionbox
  const [newFlexShrink, setNewFlexShrink]=useState('');//value set by the user, modifies the currently selected actionBox`s flex shrink value
  const [computedFlexBasis, setComputedFlexBasis]=useState('');//current FlexBasis value, read from window.computedValue(); changes might occur clicking on other actionbox
  const [newFlexBasis, setNewFlexBasis]=useState('');//value set by the user, modifies the currently selected actionBox`s flex Basis value
  const [computedActionBoxBgrColor, setComputedActionBoxBgrColor]=useState('');
  const [axisDirectionVisible, setAxisDirectionVisible]=useState(false);
  const [glowSwitch, setGlowSwitch]=useState(false);
  
  //COMPONENT RETURN
  return (
    <StyledBackground>
      <HelpPanel id="helpPanel" title={"HELP"} axisDirectionVisible={axisDirectionVisible} setAxisDirectionVisible={setAxisDirectionVisible} glowSwitch={glowSwitch} setGlowSwitch={setGlowSwitch}/>
      <NumberSettingsPanel
        id="numberOfItemsPanel"
        title={"ITEMS"}
        setElementsOnDemoPanel={setElementsOnDemoPanel}
      />
      <ParentSettingsPanel
        id="parentSettingsPanel"
        title={"SETTINGS ON PARENT"}
        setCurrentFlexDirection={setCurrentFlexDirection}
        setCurrentFlexWrap={setCurrentFlexWrap}
        setCurrentJustifyContent={setCurrentJustifyContent}
        setCurrentAlignItems={setCurrentAlignItems}
        setCurrentAlignContent={setCurrentAlignContent}
        glowSwitch={glowSwitch}
      />
      <ItemSettingsPanel
        id="itemsettingsPanel"
        title={"SETTINGS ON ITEM"}
        clickedBoxID={clickedBoxID} 
        computedActionBoxBgrColor={computedActionBoxBgrColor}
        computedOrder={computedOrder} 
        setNewOrder={setNewOrder}
        computedAlignSelf={computedAlignSelf}
        setNewAlignSelf={setNewAlignSelf}
        computedFlexGrow={computedFlexGrow}
        setNewFlexGrow={setNewFlexGrow}
        computedFlexShrink={computedFlexShrink}
        setNewFlexShrink={setNewFlexShrink}
        computedFlexBasis={computedFlexBasis}
        setNewFlexBasis={setNewFlexBasis}
        glowSwitch={glowSwitch}
      />
      <DemoPanel
        id="DemoPanel"
        elementsOnDemoPanel={elementsOnDemoPanel}
        /*states to change the entire PARENT component css settings; 
        the setState FN-s are perated by ParentSettingsPanel.jsx*/
        currentFlexDirection={currentFlexDirection}
        currentFlexWrap={currentFlexWrap}
        currentJustifyContent={currentJustifyContent}
        currentAlignItems={currentAlignItems}
        currentAlignContent={currentAlignContent}
        clickedBoxID={clickedBoxID} 
        setclickedBoxID={setclickedBoxID} 
        setComputedActionBoxBgrColor={setComputedActionBoxBgrColor}
        setComputedOrder={setComputedOrder} 
        newOrder={newOrder} 
        setNewOrder={setNewOrder}

        setComputedAlignSelf={setComputedAlignSelf}
        newAlignSelf={newAlignSelf}
        setNewAlignSelf={setNewAlignSelf}

        setComputedFlexGrow={setComputedFlexGrow}
        newFlexGrow={newFlexGrow}
        setNewFlexGrow={setNewFlexGrow}

        setComputedFlexShrink={setComputedFlexShrink}
        newFlexShrink={newFlexShrink}
        setNewFlexShrink={setNewFlexShrink}
        
        setComputedFlexBasis={setComputedFlexBasis}
        newFlexBasis={newFlexBasis}
        setNewFlexBasis={setNewFlexBasis}
      />
    <AxisDirections axisDirectionVisible={axisDirectionVisible} currentFlexDirection={currentFlexDirection}/> 
    </StyledBackground>
  );
};
export default App;

const StyledBackground=styled.div`
/*this is the background for all the visible panels*/
width: 100vw;
height: 100vh;
background-color: var(--clr-base1);
display: grid;
grid-template-columns: repeat(2, minmax(15vw, 30vw)) 60vw;
grid-template-rows: 20vh 40vh 40vh;
`

/*COMPONENT DOCUMENTATION
App.js -the goal is to visually represent the effexts of different flexbox settings; 
the left side of the screen is sed for user settings, the right side is to show the effects of the settings changes
it`s Parent Component: none
it`s Child Components: 
always visible: HelpPanel,NumberSettingsPanel, ParentSettingsPanel,ItemSettingsPanel,DemoPanel;
sometimes visible: MISSSING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..................................................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
states - hence this is the common ancestor of all components, all of the states ended up here based on 'lifting the state up' method

HelpPanel (label:HELP): contains to options; To show Main and Cross axis directions, and option to visually indicate which setting has more info if the user moves the mouse over the item
NumberSettingsPanel(label: ITEMS): the user can modify the number of ActionBoxes on the right side.
ActionBox is the colored box with big letter on it.
ParentSettingsPanel, & ItemSettingsPanel : hence the flexboxsettings have two distinct group: one group of settings aim the parent container, the other gropu of settings
targets the item itself, I separated these settings onto two different panels. Flexbox has more settings, but all those missing settings are groupings for those options i show separately on these panels.
Demopanel- the right side of the screen, this is where the user can see the effect of the changes. This panel holds all the ActionBoxes.
*/
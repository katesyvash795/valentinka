
import React, { useState } from 'react';
import { TestС } from './testC';
import { Button,Text,Image } from './teststyled';
import Cactus from './кактус.gif'
export const TestB=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [isNo,setIsNo]= useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [returnHome, setReturnHome] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(true);
        setButtonsDisabled(true);
      };
      const handleButtonClickNo = () => {
        setIsNo(true);
        setButtonsDisabled(true);
      };
      const handleReturnHomeClick = () => {
        setIsOpen(false);
        setIsNo(false);
        setButtonsDisabled(false);
        setReturnHome(true);
    };
    return (
<div>
{!isOpen && !isNo && (
                <>
                    <Text>Ти кохаєшь Катю?</Text>
                    <Button onClick={handleButtonClick} disabled={buttonsDisabled}>Так</Button>
                    <Button onClick={handleButtonClickNo} disabled={buttonsDisabled}>Ні</Button>
                </>
            )}
{isOpen && <TestС/>}
{isNo &&(<>
<Text>Кактус ділимо пополам,негіднику!</Text>
<Image src={Cactus} alt='' width="300" height="300"/>
 <Button onClick={handleReturnHomeClick} return={returnHome}>Змінити відповідь</Button> 
 </>
     )}
</div>
    )
}
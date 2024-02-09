import React, { useState } from 'react';
import { Valentinka } from '../valentinka/valentinka';
import { Button,Text,Image } from './teststyled';
import Razvod from './razvod.jpg';
export const TestС=()=>{
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
    return(       
    <div>
        {!isOpen && !isNo && (
            <>
        <Text>Останнє питання...Ти будешь її валентинкою?</Text>
                <Button onClick={handleButtonClick} disabled={buttonsDisabled}>Так</Button>
                <Button onClick={handleButtonClickNo} disabled={buttonsDisabled}>Ні</Button>
            </>
        )}
        {isNo &&(
        <>
<Text>Це була твоя остання можливість,<br/> але це кінець, геть звідси!</Text>
<Image src={Razvod} alt='' width="300" height="300"/>
 <Button onClick={handleReturnHomeClick} return={returnHome}>Змінити відповідь</Button> 
 </>
     )}
        {isOpen && <Valentinka/>}
</div>

    )
}
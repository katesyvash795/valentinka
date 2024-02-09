
import React, { useState } from 'react';
import{Button, Text,Image} from './teststyled'
import { TestB } from './testB';
import Test1 from './test1-1.webp'
export const TestA=()=>{

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
                    <Text>Ти Олег?</Text>
                    <Button onClick={handleButtonClick} disabled={buttonsDisabled}>Так</Button>
                    <Button onClick={handleButtonClickNo} disabled={buttonsDisabled}>Ні</Button>
                </>
            )}

{isOpen && <TestB/>}
{isNo &&(<>
<Text>Ану йди звідси, розбійнику! <br/>Не для тебе моя троянда цвіла!</Text>
<Image src={Test1} alt='' width="300" height="300"/>
 <Button onClick={handleReturnHomeClick} return={returnHome}>Змінити відповідь</Button> 
 </>
     )}

</div>
    )
}
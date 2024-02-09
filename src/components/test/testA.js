import React, { useState, useEffect } from 'react';
import{Button, Text,ImageContainer } from './teststyled'
import { TestB } from './testB';
import Test1 from './test1-1.webp'
export const TestA=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [isNo,setIsNo]= useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [returnHome, setReturnHome] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 748);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 748);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
<ImageContainer 
                        marginLeft={isSmallScreen ? '120px' : '155px'} // Передаем значение marginLeft через props
                    >
                        <img 
                            src={Test1} 
                            alt='' 
                            width={isSmallScreen ? '150' : '300'} 
                            height={isSmallScreen ? '150' : '300'} 
                        />
                    </ImageContainer>
 <Button onClick={handleReturnHomeClick} return={returnHome}>Змінити відповідь</Button> 
 </>
     )}

</div>
    )
}
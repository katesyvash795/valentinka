
import React, { useState,useEffect } from 'react';
import { TestС } from './testC';
import { Button,Text,ImageContainer } from './teststyled';
import Cactus from './кактус.gif'
export const TestB=()=>{

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
                    <Text>Ти кохаєшь Катю?</Text>
                    <Button onClick={handleButtonClick} disabled={buttonsDisabled}>Так</Button>
                    <Button onClick={handleButtonClickNo} disabled={buttonsDisabled}>Ні</Button>
                </>
            )}
{isOpen && <TestС/>}
{isNo &&(<>
<Text>Кактус ділимо пополам,негіднику!</Text>
<ImageContainer 
                        marginLeft={isSmallScreen ? '120px' : '155px'} // Передаем значение marginLeft через props
                    >
                        <img 
                            src={Cactus} 
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
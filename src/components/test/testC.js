import React, { useState,useEffect } from 'react';
import { Valentinka } from '../valentinka/valentinka';
import { Button,Text,ImageContainer } from './teststyled';
import Razvod from './razvod.jpg';
export const TestС=()=>{
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
<ImageContainer 
                        marginLeft={isSmallScreen ? '120px' : '155px'}
                         // Передаем значение marginLeft через props
                    >
                        <img 
                            src={Razvod} 
                            alt='' 
                            width={isSmallScreen ? '150' : '300'} 
                            height={isSmallScreen ? '150' : '300'} 
                        />
                    </ImageContainer>
 <Button onClick={handleReturnHomeClick} return={returnHome}>Змінити відповідь</Button> 
 </>
     )}
        {isOpen && <Valentinka/>}
</div>

    )
}
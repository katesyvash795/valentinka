import { TestA } from "../test/testA";
import { Button } from "./homestyled";
import React, { useState } from 'react';
export const Home=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
      setIsOpen(true);
    };
  
    return (
<div>
{!isOpen && <Button onClick={handleButtonClick}>Натисни мене!</Button>}
    {isOpen && <TestA/>}
</div>
    )
}
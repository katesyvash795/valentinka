import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalContent, ModalOverlay, HeartsOverlay, Button } from './valentinkastyled';
import valentinka from './valentinka.png';

export const Valentinka = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hearts, setHearts] = useState([]);
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

    useEffect(() => {
        if (isOpen) {
            const newHearts = Array.from({ length: 10000 }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
            }));
            setHearts(newHearts);
        }
    }, [isOpen]);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <Button onClick={openModal}>Відкривай! Це для тебе!</Button>
            {isOpen && (
                <ModalOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <HeartsOverlay
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {hearts.map((heart, index) => (
                            <motion.p
                                key={index}
                                style={{ position: 'absolute', top: heart.y, left: heart.x }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index > 0 ? index * 0.02 : 0 }} 
                            >
                                ❤️
                            </motion.p>
                        ))}
                    </HeartsOverlay>
                    <ModalContent>
                        <img
                            src={valentinka}
                            alt="valentinka"
                            width={isSmallScreen ? '300' : '600'} // Уменьшаем размер изображения для маленьких экранов
                            height={isSmallScreen ? '250' : '500'} // Уменьшаем размер изображения для маленьких экранов
                        />
                    </ModalContent>
                </ModalOverlay>
            )}
        </div>
    );
};

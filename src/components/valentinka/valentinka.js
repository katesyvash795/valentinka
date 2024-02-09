import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ModalContent,ModalOverlay,HeartsOverlay,Button } from './valentinkastyled';
import valentinka from './valentinka.png'
export const Valentinka = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hearts, setHearts] = useState([]);
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
                                transition={{ delay: 0.5 + (index * 0.02) }}
                            >
                                ❤️
                            </motion.p>
                        ))}
                    </HeartsOverlay>
                    <ModalContent>
                    <img
    src={valentinka}
    alt="valentinka"
    width="600"
    height="500" />
                       
                    </ModalContent>
                </ModalOverlay>
            )}
        </div>
    );
};

import styled from 'styled-components';
import { motion } from 'framer-motion';
export const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    position: relative; 
    background-color: #fff; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
  `
  export const Button =styled.button`
  padding: 10px 20px;
  margin-left:20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover,
  &:focus {
  background-color: #0056b3;
  `

export const HeartsOverlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    z-index: -1; 
`;
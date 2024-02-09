import styled from 'styled-components';
export const Text=styled.p`
font-size:38px;
margin-bottom:20px;
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
}
`
export const ImageContainer = styled.div`
display:flex;
margin-top:50px;
margin-bottom:50px;
    margin-left: ${props => props.marginLeft}; // Принимаем значение marginLeft из props
`;

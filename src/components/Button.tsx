import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: dodgerblue;
  border: none;
  line-height: 48px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 16px;

  &:hover {
    background: #165a9c;
    cursor: pointer;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonTotal = styled.button`
  color: white;
  background-color: dodgerblue;
  border: none;
  line-height: 48px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 0 16px;
  position: fixed;
  bottom: 15px;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
`;

export const ButtonCalc = styled.button`
color: white;
background-color: dodgerblue;
border: none;
line-height: 48px;
border-radius: 4px;
font-size: 18px;
font-weight: 500;
cursor: pointer;
padding: 0 16px;
width: 55px;

&:hover {
  background: #165a9c;
  cursor: pointer;
}

&:first-letter {
  text-transform: uppercase;
}
  

`

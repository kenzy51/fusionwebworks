import { styled } from "styled-components";

export const Button = styled.button`
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 0.5rem 0.6rem;
  border-radius: 30px;
  border:none;
  cursor:pointer;
  background:#DDE1E5;
  box-shadow: 0 4px 20px rgba(43,49,52,.1);
  color:black;
  max-width:140px;
  transition-duration: .3s;
  font-weight:800;
  &:hover{
    background: black;
    color:white;
  }
`
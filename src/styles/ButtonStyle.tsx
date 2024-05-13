import styled from "@emotion/styled";
import { epilogue } from "@/lib/font";

export const ButtonStyle = styled.button`
  background-color: #4640DE;
  font-family: ${epilogue.style};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  border-radius: 0;
  padding: 12px 50px;
  text-transform: capitalize;
  /* max-width: fit-content; */
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #6e6ae2;
    transition: ease-in-out 0.3s;
  }
`
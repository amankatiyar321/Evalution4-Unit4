import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 60%;
  margin: 20px auto;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Select = styled.select`
  background-color: teal;
  border: none;
  outline: none;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Flex = styled.div`
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
`;
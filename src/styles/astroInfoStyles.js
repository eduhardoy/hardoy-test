import styled from "styled-components";
import { AccordionSummary } from "@material-ui/core";

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
`;

export const ButtonWrapper = styled.div`
  width: calc(60% - 100px);
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    width: calc(80% - 100px);
  padding: 20px;
  }
  @media (max-width: 600px) {
    width: calc(100% - 50px);
  padding: 10px;
  }
`;

export const ActiveButton = styled.button`
  width: 30%;
  margin: 10px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  background-color: #28a745;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #218838;
    color: white;
  }
  :focus {
    border: 3px solid #bfe5c8;
    background-color: #28a745;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    padding: 0;
    padding-left: 10px;
    @media (max-width: 600px) {
    font-size: 15px;
  }
  }
  @media (max-width: 600px) {
    width: 40%;
  }
`;

export const RetiredButton = styled.button`
  width: 30%;
  margin: 10px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  background-color: #dc3545;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #c82333;
    color: white;
  }
  :focus {
    border: 3px solid #f2b1b8;
    background-color: #dc3545;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    padding: 0;
    padding-left: 10px;
    @media (max-width: 600px) {
    font-size: 15px;
  }
  }
  @media (max-width: 600px) {
    width: 40%;
  }
`;

export const AccordionWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  align-items: center;
  height: 120px;
  h2 {
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: "Roboto";
    font-weight: 500;
    text-transform: uppercase;
    @media (max-width: 600px) {
    font-size: 25px;
  }
  }
  @media (max-width: 600px) {
    height: 100px;
  }
`;

export const ListDetails = styled.div`
  width: 100%;
  img {
    min-width: 200px;
    max-width: 300px;
  }
  p {
    font-size: 20px;
    font-family: "Roboto";
  }
`;

export const NumberButton = styled.button`
  width: 40px;
  margin: 10px;
  height: 40px;
  font-weight: 500;
  outline: none;
  font-size: 15px;
  background-color: #343a40;
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  text-align: center;
  :hover {
    background-color: #23272b;
    color: white;
  }
  :focus {
    border: 3px solid #b1b3b6;
    background-color: #23272b;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

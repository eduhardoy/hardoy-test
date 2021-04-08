import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { obtenerDatos } from "../api/astro";

import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  align-items: center;
  h2 {
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 35px;
    font-family: "Roboto";
    font-weight: 300;
  }
`;

const ListDetails = styled.div`
  width: 100%;
  padding-left: 40px;
  img {
    min-width: 200px;
    max-width: 300px;
  }
  p {
    font-size: 20px;
    font-family: "Roboto";
  }
`;

const ButtonWrapper = styled.div`
  width: 50%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActiveButton = styled.button`
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
  }
`;

const RetiredButton = styled.button`
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
  }
`;

const NumberButton = styled.button`
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
`;

const AccordionWrapper = styled.div`
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
`;

export default function AstroInfo() {
  const [astro, setAstro] = useState({});
  const [queries, setQueries] = useState("");

  console.log(astro);
  useEffect(() => {
    const setUp = async () => {
      const datos = await obtenerDatos(queries);
      if (datos) {
        setAstro(datos);
      }
    };
    setUp();
  }, [queries]);

  const onActiveButtonClick = () => setQueries("&status=1");
  const onRetiredButtonClick = () => setQueries("&status=2");

  const onePageButtonClick = () => setQueries(`&offset=`);
  const twoPageButtonClick = () => setQueries(`&offset=10`);
  const threePageButtonClick = () => setQueries(`&offset=20`);
  const fourPageButtonClick = () => setQueries(`&offset=30`);
  const fivePageButtonClick = () => setQueries(`&offset=40`);

  return (
    <InfoWrapper>
      <ButtonWrapper>
        <ActiveButton onClick={onActiveButtonClick}>
          <h4>ACTIVE</h4>
        </ActiveButton>
        <RetiredButton onClick={onRetiredButtonClick}>
          <h4>RETIRED</h4>
        </RetiredButton>
      </ButtonWrapper>
      <AccordionWrapper>
        {astro?.results?.map(item => (
          <Accordion key={item.id.toString()}>
            <StyledAccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h2>{item.name}</h2>
            </StyledAccordionSummary>
            <AccordionDetails>
              <ListDetails>
                <img src={item.profile_image} alt='' />
                <p>Name: {item.name}</p>
                <p>Date of Birth: {item.date_of_birth}</p>
                <p>Nationality: {item.nationality}</p>
                <p>Agency: {item.agency.name}</p>
              </ListDetails>
            </AccordionDetails>
          </Accordion>
        ))}
      </AccordionWrapper>
      <ButtonWrapper>
        <NumberButton onClick={onePageButtonClick}>
          <h4>1</h4>
        </NumberButton>
        <NumberButton onClick={twoPageButtonClick}>
          <h4>2</h4>
        </NumberButton>
        <NumberButton onClick={threePageButtonClick}>
          <h4>3</h4>
        </NumberButton>
        <NumberButton onClick={fourPageButtonClick}>
          <h4>4</h4>
        </NumberButton>
        <NumberButton onClick={fivePageButtonClick}>
          <h4>5</h4>
        </NumberButton>
      </ButtonWrapper>
    </InfoWrapper>
  );
}

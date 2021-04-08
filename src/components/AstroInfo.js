import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { obtenerDatos } from "../api/astro";

import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  InfoWrapper,
  ListDetails,
  ButtonWrapper,
  ActiveButton,
  RetiredButton,
  NumberButton,
  AccordionWrapper,
} from "./styles";

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

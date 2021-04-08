import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import Pagination from "@material-ui/lab/Pagination";

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
  }
`;

const ListDetails = styled.div`
  width: 100%;
  padding-left: 40px;
  p {
    font-size: 20px;
    font-family: "Lato";
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

const PaginationWrapper = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPagination = styled.div`
  color: white;
  background-color: #fafafa;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AstroInfo() {
  const [astro, setAstro] = useState([]);
  const [offset, setOffset] = useState(0);
  const [astroStatus, setAstroStatus] = useState();

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://ll.thespacedevs.com/2.0.0/astronaut?limit=15&offset=${offset}`
    );
    const astronauts = await data.json();
    setAstro(astronauts.results);
  };

  useEffect(() => {
    obtenerDatos();
  }, [offset]);

  return (
    <InfoWrapper>
      <ButtonWrapper>
        <ActiveButton>
          <h4>ACTIVE</h4>
        </ActiveButton>
        <RetiredButton>
          <h4>RETIRED</h4>
        </RetiredButton>
      </ButtonWrapper>
      <AccordionWrapper>
        {astro.map(item => (
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
      <PaginationWrapper>
        <StyledPagination>
          <Pagination count={10} />
        </StyledPagination>
      </PaginationWrapper>
    </InfoWrapper>
  );
}

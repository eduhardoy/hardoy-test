import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const StyledPagination = styled.div`
  color: white;
  background-color: #fafafa;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AstroPagination = () => {
  return (
    <div>
      <StyledPagination>
        <Pagination count={10} />
      </StyledPagination>
    </div>
  );
};

export default AstroPagination;

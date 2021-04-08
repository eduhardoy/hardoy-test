import React, { useState } from "react";
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
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <StyledPagination>
        <Pagination count={5} page={page} onChange={handleChange} />
      </StyledPagination>
    </div>
  );
};

export default AstroPagination;

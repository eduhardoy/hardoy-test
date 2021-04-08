import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components';

const StyledPagination = styled.div`
color: white;
background-color: #fafafa;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
`

export default function BasicPagination() {
  return (
    <StyledPagination >
      <Pagination count={10} />
    </StyledPagination>
  );
}
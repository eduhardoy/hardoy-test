import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: url("./images/space.png");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;

  img{
    position: absolute;
    top: 20px;
    left: 20px;
    height: 80px;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
  }

  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  `

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <h1>ASTRONAUTS API</h1>
        <img src="./images/earth.png" className="App-logo" alt="logo" />
      </StyledHeader>
    </div>
  )
}

export default Header

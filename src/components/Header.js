import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: url("./images/space2.png");
  filter: grayscale(0.4);
  background-size: cover;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #fbf2af;
  text-align: center;
  h1 {
    text-shadow: 0px 0px 7px rgba(219, 75, 69, 0.92);
  }
  @media (max-width: 860px) {
    align-items: flex-end;
    font-size: 40px;
    h1 {
      margin-bottom: 200px;
    }
  }
  @media (max-width: 550px) {
    font-size: 30px;
    h1 {
      margin-bottom: 180px;
    }
  }
  @media (max-width: 426px) {
    font-size: 25px;
    h1 {
      margin-bottom: 140px;
    }
  }
  img {
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
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <h1>ASTRONAUTS</h1>
        <img src='./images/earth.png' className='App-logo' alt='logo' />
      </StyledHeader>
    </div>
  );
};

export default Header;

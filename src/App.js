import React from "react";
import Header from "./components/Header";
import AstroInfo from "./components/AstroInfo";
import { GlobalStyle } from "./styles/globalStyles";


const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Header />
      <AstroInfo />
    </div>
  );
};

export default App;

import React from "react";
import {Route} from "react-router-dom";
import styled from "styled-components"

import Home from "./Home"
import FormPage from "./FormPage"
// import Header from "./Header"

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header>
        <h1>단어장</h1>
        <hr/>
      </Header>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/FormPage">
        <FormPage />
      </Route>         
    </div>
  );
}

const Header = styled.div`
  
  text-align: center;
 
`;


export default App;

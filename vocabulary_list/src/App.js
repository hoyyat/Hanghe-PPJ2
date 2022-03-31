import React, {useCallback, useEffect} from "react";
import {Route} from "react-router-dom";
import styled from "styled-components"

import Home from "./Home";
import FormPage from "./FormPage";
import {db} from "./firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";
// import Header from "./Header"

// const dispatch = useDispatch();



function App() {
  useEffect(() => {
    console.log(db);
    collection(db, "word")
    const query =  getDocs(collection(db, "word"));
    console.log(query);
  });

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

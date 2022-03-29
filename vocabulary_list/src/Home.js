import React from "react";
import styled, {Button}  from "styled-components";
import {useHistory} from "react-router-dom";

// import WordCard from "./WordCard";
import FormPage from "./FormPage";
// import { useSelector } from "react-redux"


const Home = (props) => {
    const history = useHistory();
    return (
        <div>
            <Cards>
                <p>단어</p>
                <button onClick={ () => history.push("/FormPage")}>v</button>
            </Cards>
            <Cards>
                <p>단어</p>
                <button>v</button>
            </Cards>
            <Cards>
                <p>단어</p>
                <button>v</button>
            </Cards>
            <AddBtn>
                <button>+</button>
            </AddBtn>
        </div>
    );
}
// const Title = styled.div`
//     margin-top: 2px;
//     margin: 2px auto;
//     height: 30px;
// `;

// const Contents = styled.div`
//     padding: 2px auto;
// `;

const Cards = styled.div`
    margin: 10px;
    padding: 10px;
    width: 400px;
    height: 100px;
    background-color: #ddd;
    
`;

const AddBtn = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;
    
`;

export default Home;
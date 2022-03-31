import React, { useEffect } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux";
import {db} from "./firebase"
import { collection, getDoc, getDocs, } from "firebase/firestore";

import FormPage from "./FormPage";

function App() {
    React.useEffect(async() => {
        console.log(db);

        const query = await getDocs(collection(db, "word"));
        console.log(query);
        query.forEach((doc) => {
            console.log(doc.id, doc.data());
        });
        
    }, []);
};





const WordCard = (props) => {
    let data = props.word_list
    let index = props.index
    const history = useHistory();
    return (
        <Card>
            <p>{data[index]}</p>
            <button>-</button>
            <button onClick={() => history.push("/FormPage")}>추가하기</button>
            <button>*</button>
        </Card>
    );
};

const Card = styled.div`
    margin: 10px;
    padding: 10px;
    width: 400px;
    height: 100px;
    background-color: #ddd;
`;

export default WordCard;
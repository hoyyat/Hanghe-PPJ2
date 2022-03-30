import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

const WordCard = (props) => {
    let data = props.word_list
    let index = props.index
    return (
        <Card>
            <p>{data[index]}</p>
            <button>-</button>
            <button>+</button>
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
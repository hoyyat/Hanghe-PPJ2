import React, {useState} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import {createDictionary, updateWidget} from "./redux/modules/words"


const FormPage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const dispatch = useDispatch();
    // let idtext = props.id

    // const updateWidget = (word) => {
    //     dispatch(updateWidget(idtext));
    // };
    const [input, setInput] = useState({
        word : "",
        mean : "",
        example : ""
    });
    
    const {word, mean, example} = input
    const onChange = (e) => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]:value
        })
    }
    
    const create = () => {
        dispatch(createDictionary(input))
    }
    console.log(input)
    return (
        <Container>
            <Subtitle>단어 추가하기</Subtitle>
            <input onChange={onChange} name="word" value={word}></input>
            <input onChange={onChange} name="mean" value={mean}></input>
            <input onChange={onChange} name="example" value={example}></input>
            <button onClick={()=>{create(); history.goBack()}}>제출하기</button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Subtitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #F08080
`;

export default FormPage;
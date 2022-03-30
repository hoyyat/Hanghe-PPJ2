import React from "react";
import styled, {Button}  from "styled-components";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
//useSelector 데이터를 가져오는 훅, useDispatch는 데이터를 입력할 때

// import WordCard from "./WordCard";
import FormPage from "./FormPage";
import WordCard from "./WordCard";
// import { useSelector } from "react-redux"


const Home = (props) => {
    // const history = useHistory();
    
    const word_list = useSelector((state) => state.word.list);
    // useSelector 안에는 (state): 스토어가 가지고있는 전체데이터, store: ()없으면 리턴되는 값, 을 넣어준다.


    return (
        <div>
            {word_list.map((list, index) => {
                return (
                    <WordCard word_list={word_list} index={index}/>
                );
            })}
            {/* <Cards>
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
            </AddBtn> */}
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
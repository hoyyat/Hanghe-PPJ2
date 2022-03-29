import React from "react";
import styled from "styled-components";

import CustomInput from "./CustomInput";

const FormPage = (props) => {
    return (
        <Container>
            <Subtitle>단어 수정하기</Subtitle>
            <CustomInput
            
            />
        </Container>
    );
};

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
import React from "react";
import styled from "styled-components";

const CustomInput = (props) => {
    return (
        <Container>
            {/* <Label for={idText}{title}></Label> */}
            <Input
                type="text"
            />
        </Container>
        
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 200px;
    height: 28px;
    border: none;
    border-bottom: 2px solid;
    border-color: #ff6347;
    font-size: 10px;
    font-weight: 500;
`;
export default CustomInput;
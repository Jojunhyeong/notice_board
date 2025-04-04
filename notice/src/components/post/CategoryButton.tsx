import React from "react";
import styled from "styled-components";
import { DetailText, MenuText } from "../../font";

export const CategoryButton = () => {
    return(
        <Container>
            <CategoryText>공지사항</CategoryText>
            </Container>
    )
}

const Container = styled.button`
    position: absolute;
    border-radius: 1vh;
    background-color: #48bcd6;
    width: 60px;
    height: 40px;
    white-space: nowrap;
`

const CategoryText = styled(DetailText)`
    font-weight: bold;
    color: white;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
`
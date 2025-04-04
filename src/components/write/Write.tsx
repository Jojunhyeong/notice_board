import React from "react";
import { styled } from "styled-components";
import { DetailText, TitleText } from "../../font";

export const Write = () => {
    return (
        <Container>
            <WriteContainer>
            <Title>새 글 작성</Title>
            <CategoryText>카테고리</CategoryText>
            </WriteContainer>
        </Container>

    )
}

const Container = styled.div`
position: fixed;
top: 0;
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-start;
background-color: #f0eeee;

`

const WriteContainer = styled.div`
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 0;
    background-color: white;
    transform: translate(-50%);
    left: 50%;
    
`;

const Title = styled(TitleText)`
    position: relative;
    font-weight: bold;
    margin-top: 100px;
    margin-left: 50px;
`

const CategoryText = styled(DetailText)`
    position: relative;
    color: grey;
    margin-left: 50px;
    font-weight: bold;
    margin-top: 20px;
`
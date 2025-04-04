import React from "react";
import styled from "styled-components";
import { CategoryButton } from "./CategoryButton";
import { DetailText, MenuText, TitleText } from "../../font";
import { Content } from "./Content";
import { CommentInput } from "./CommentInput";

export const Post = () => {
    return(
        <Container>
            <PostContiner>
                <TitleContainer>
                    <CategoryButton/>
                    <Title>2025년 봄 신제품 출시 안내</Title>
                </TitleContainer>
                <Info>김지원 · 202503-19 · 조회 2103</Info>
                <Content></Content>
                <CommentText>댓글</CommentText>
                <CommentInput></CommentInput>
            </PostContiner>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    background-color: #f0eeee;
    display: flex-start;
`;

const PostContiner = styled.div`
    width: 1800px;
    height: 1000px;
    position: absolute;
    top: 0;
    background-color: white;
    transform: translate(-50%);
    left: 50%;
    
`;

const TitleContainer = styled.div`
    width: 1000px;
    height: 40px;
    position: relative;
    margin-left: 250px;
    margin-top: 100px;
    display: flex;

`

const Title = styled(TitleText)`
    font-weight: bold;
    position: absolute;
    left: 80px;
`

const Info = styled(DetailText)`
    color: #afaeae;
    position: relative;
    margin-left: 332px;
`

const CommentText = styled(MenuText)`
    margin-left: 250px;
    margin-top: 30px;
    position: relative;
    font-weight: bold;
`
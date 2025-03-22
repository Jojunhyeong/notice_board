import React from "react";
import styled from "styled-components";
import { DetailText, MenuText, TitleText } from "../../font";

const Container = styled.div`
    background-color: white;
    height: 8vh;
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0 0 1vh rgba(0, 0, 0, 0.1);
    display: flex;
    z-index: 2;
`
const StyledTitleText = styled(TitleText)`
    position: relative;
    font-weight: bold;
    margin-left: 8vh;
    margin-right: 3vh;
`

const StyledMenuText = styled(DetailText)`
    position: relative;
    font-weight: bold;
    color: grey;
`

const Menu = styled.div`
    display: flex;
    margin-left: auto;
    margin-left: 2vh;
    align-items: center;
    gap: 2vh;
`
export const TopNav = () => {
    return (
        <Container>
            <Menu>
                <StyledTitleText>게시판</StyledTitleText>
            <StyledMenuText>전체</StyledMenuText>
            <StyledMenuText>공지사항</StyledMenuText>
            <StyledMenuText>자유게시판</StyledMenuText>
            <StyledMenuText>질문과답변</StyledMenuText>
                <StyledMenuText>정보공유</StyledMenuText>
            </Menu>
        </Container>
    )
}
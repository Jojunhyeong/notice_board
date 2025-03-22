import React from "react";
import styled from "styled-components";
import { NoticeBoard } from "./NoticeBoard";

export const Home = () => {
    return(
        <Container>
            <NoticeBoard/>
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
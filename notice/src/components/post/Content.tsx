import React from "react";
import { styled } from "styled-components";
import { ContextText, DetailText, MenuText } from "../../font";

export const Content = () => {
    return(
        <ContentContainer>
            <ContentText>
                안녕하세요, 새로운 봄 시즌 라인업을 소개합니다. <br/><br/>
                1. 스프링 에디션 스마트 워치 <br/>
                - 벚꽃 디자인의 특별 패키지 <br/>
                - 새로운 건강 모니터링 기능 탑재 <br/>
                - 무선 충전 지원 <br/><br/>
                2. 에코 프렌들리 노트북<br/>
                - 재활용 소재 사용<br/>
                - 초경량 디자인 <br/>
                - 최대 20시간 배터리 지원<br/><br/>
                자세한 내용은 공식 홈페이지를 참고해 주시기 바랍니다.
            </ContentText>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    position: relative;
    width: 1300px;
    height: auto;
    overflow: scroll;
    background-color: #f9f9f9;
    transform: translate(-50%);
    margin-left: 50%;
    margin-top: 30px;
    text-align: start;
    padding-bottom: 20px;
`

const ContentText = styled(ContextText)`
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
`
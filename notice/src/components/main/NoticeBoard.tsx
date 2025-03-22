import React from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
    width: 145vh;
    height: 80vh;
    background-color: white;
    position: relative;
    margin-left: 25vh;
    margin-top: 12vh;
    border-radius: 1vh;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
    position: absolute;
    width: 140vh;
    top: 2vh;
    left: 2vh;
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    position: relative;
    width: 120vh;
    height: 4.6vh;
    display: flex;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 90%;
    padding: 1vh 1.5vh;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #1e88e5;
    }
`;

const StyledLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 1vh;
    transform: translateY(-50%);
    font-size: 1.4vh;
    color: #6c757d;
    transition: 0.3s ease-in-out;
    pointer-events: none;

    ${StyledInput}:focus ~ &,
    ${StyledInput}:not(:placeholder-shown) ~ & {
        top: 0;
        font-size: 12px;
        color: #1e88e5;
    }
`;

const StyledButton = styled.button`
    position: absolute;
    right: 0;
    height: 100%; 
    padding: 0 2vh; 
    background-color: #0066ff;
    color: white;
    white-space: nowrap;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-size: 16px;
`;



const TableContainer = styled.div`
    margin-top: 2vh;
    width: 100%;
    overflow-x: auto;

    table {
        width: 100%;
        border-collapse: collapse; /* 테두리 겹침 방지 */
    }

    th, td {
        border-bottom: 1px solid #dee2e6; /* 경계선 추가 */
        padding: 2vh; /* 줄 간격 증가 */
        text-align: center;
    }

    thead {
        background-color: #f8f9fa; /* 헤더 배경색 */
    }
`;

export const NoticeBoard = () => {
    return (
        <NoticeContainer>
            <StyledForm>
                <InputContainer>
                    <StyledInput
                        type="text"
                        id="floatingInputValue"
                        placeholder=""
                    />
                    <StyledLabel htmlFor="floatingInputValue">
                        제목, 작성자 검색
                    </StyledLabel>
                    <StyledButton>검색</StyledButton>
                </InputContainer>

                <TableContainer>
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>카테고리</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>공지사항</td>
                                <td>2025년 봄 신제품 출시 안내</td>
                                <td>김지원</td>
                                <td>2025-03-19</td>
                                <td>2103</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>공지사항</td>
                                <td>개발자 채용 공고</td>
                                <td>이현우</td>
                                <td>2025-03-17</td>
                                <td>850</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>자유게시판</td>
                                <td>신입 개발자 스터디 모집</td>
                                <td>박서연</td>
                                <td>2025-03-16</td>
                                <td>1250</td>
                            </tr>
                        </tbody>
                    </table>
                </TableContainer>
            </StyledForm>
        </NoticeContainer>
    );
};

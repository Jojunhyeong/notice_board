import React from "react";
import { Link, useNavigate } from "react-router-dom"; // 추가
import styled from "styled-components";
import write from "../../assets/write.png"
import search from "../../assets/search.png"
import { Write } from "../write/Write";

const NoticeContainer = styled.div`
    width: 145vh;
    height: 80vh;
    background-color: white;
    position: relative;
    margin-left: 50%;
    transform: translate(-50%);
    margin-top: 12vh;
    border-radius: 1vh;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.div`
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
    width: 87%;
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

const WriteImage = styled.img`
position: absolute;
height: 20px;
left: 10px;
`
const SearchImage = styled.img`
position: absolute;
height: 20px;
left: 10px;
`
const StyledButton = styled.button`
    position: absolute;
    right: 10px;
    width: 80px;
    height: 38px; 
    padding: 0 2vh; 
    background-color: #0066ff;
    color: white;
    white-space: nowrap;
    text-align: end;
    align-items: center; 
    justify-content: center; 
    font-size: 16px;
`;

const WriteButton = styled.button`
    position: absolute;
    right: 0;
    height: 38px; 
    width: 100px;
    padding: 0 2vh; 
    background-color: #0066ff;
    color: white;
    white-space: nowrap;
  text-align: right;
    align-items: center; 
    font-size: 16px;
`;

const TableContainer = styled.div`
    margin-top: 2vh;
    width: 100%;
    overflow-x: auto;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        border-bottom: 1px solid #dee2e6;
        padding: 2vh;
        text-align: center;
    }

    thead {
        background-color: #f8f9fa;
    }

    /* 제목 링크 스타일 */
    .post-link {
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
    }

    .post-link:hover {
        text-decoration: underline;
    }
`;

export const NoticeBoard = () => {

    const navigate = useNavigate();

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
                    <StyledButton>
                        <SearchImage src={search}/>
                        검색</StyledButton>
                </InputContainer>
                <WriteButton type="button" onClick={() => {navigate("/write")}}>
                    <WriteImage src={write}/>
                    글쓰기
                </WriteButton>

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
                                <td>
                                    <Link to="/post/1" className="post-link">
                                        2025년 봄 신제품 출시 안내
                                    </Link>
                                </td>
                                <td>김지원</td>
                                <td>2025-03-19</td>
                                <td>2103</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>공지사항</td>
                                <td>
                                    <Link to="/post/2" className="post-link">
                                        개발자 채용 공고
                                    </Link>
                                </td>
                                <td>이현우</td>
                                <td>2025-03-17</td>
                                <td>850</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>자유게시판</td>
                                <td>
                                    <Link to="/post/3" className="post-link">
                                        신입 개발자 스터디 모집
                                    </Link>
                                </td>
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

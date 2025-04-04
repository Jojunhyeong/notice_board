import React, { useState } from "react";
import styled from "styled-components";

export const CommentInput = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <StyledInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="댓글을 작성해주세요"
        ></StyledInput>
    )
}

const StyledInput = styled.input`
position: relative;
  width: 1270px;
  height: 120px;
  margin-top: 10px;
  padding-left: 30px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  margin-left: 250px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
  &::placeholder {
    font-size: 20px; /* placeholder 글자 크기 조정 */
    color: #888; /* 색상 변경 */
    position: absolute;
    top: 20px;
  }
`;
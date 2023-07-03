import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import backbtn from "../assets/images/backBtn.svg";

export default function Header({ type }) {
    const arr = "맞춤형 콘텐츠 찾기";
    const navigate = useNavigate();

    const handleBackBtn = () => {
        navigate(-1);
    }

    return (
        <Wrap>
            <BackBtn src={backbtn}  alt="뒤로 가기" onClick={handleBackBtn} />
            {
                {
                    search: <h1>맞춤형 콘텐츠 찾기</h1>,
                    choice: <h1>중학생 1학년 영단어</h1>,
                    step: <h1>1. You and me</h1>,
                    step1: <h1>1. You and me_STEP1</h1>,
                    step2: <h1>1. You and me_STEP2</h1>,
                    step3: <h1>1. You and me_STEP3</h1>,
                    step4: <h1>1. You and me_STEP4</h1>,
                    drawer: <h1>제 1번째 기억의 서랍</h1>
                }[type]
            }
        </Wrap>
    );
}

export const Wrap = styled.div`
    display: flex;
    height: 56px;
    width: 360px;
    align-items: center;
    position: relative;
    justify-content: center;
    font-size: 16px;
    font-family: Noto Sans CJK KR;
    font-weight: 700;
    box-shadow: 0px 2px 0px 0px #eef1fa;
    background-color: white;
`;

export const BackBtn = styled.img`
    position: absolute;
    top: 18px;
    left: 24px;
    cursor: pointer;
`;

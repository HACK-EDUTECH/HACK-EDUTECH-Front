import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";

import { useRecoilValue } from 'recoil';
import { isWordAtom } from '../../atom/atoms.ts';


import { useNavigate } from "react-router-dom";

export default function Choice({ type }) {
    const navigate = useNavigate();

    const isWord = useRecoilValue(isWordAtom);

    const arr = [
        "You and Me",
        "Let's Have Fun Together",
        "What Do People Eat Around the World?",
        "Stories from Our History",
        "My Dream Trip",
        "Animals Around Us",
        "The World of Work",
    ];

    console.log(isWord);
    return (
        <div style={{ backgroundColor: "#F7F7F8" }}>
            <Header type={type} />
            <H2>학습할 단원을 선택해주세요</H2>
            <Wrap>
                {arr.map((x, idx) => (
                    <Cont
                        onClick={() => {
                            navigate("/step");
                        }}
                    >
                        <span>{idx + 1}</span>
                        <h3>{x}</h3>
                    </Cont>
                ))}
            </Wrap>
        </div>
    );
}

export const Wrap = styled.div`
    margin: 0 64px;
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
`;

export const H2 = styled.h2`
    margin: 40px 0 56px;
    font-size: 16px;
    font-family: Noto Sans CJK KR;
`;

const scale = keyframes` 
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
`;

export const Cont = styled.button`
    width: 96px;
    height: 96px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 18px 8px;
    cursor: pointer;
    ${"span"} {
        font-size: 24px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 24px;
    }

    ${"h3"} {
        font-size: 12px;
        font-family: Roboto;
        line-height: 24px;
    }
    &:hover {
        animation: ${scale} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;


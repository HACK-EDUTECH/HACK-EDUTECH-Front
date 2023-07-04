import React from 'react'
import styled, { keyframes } from "styled-components";



const scale = keyframes` 
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
`;
export const SearchBtn = styled.button`
    border-radius: 40px;
    background: #fff;
    width: 208px;
    height: 48px;
    margin-top: 40px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;

    &:hover {
        animation: ${scale} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;


export const StartBtn = styled.button`
    position: absolute;
    bottom: 25px;
    right: 21px;
    width: 272px;
    height: 64px;
    border-radius: 20px;
    background: #fff;
    font-size: 16px;
    font-family: Noto Sans CJK KR;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${"span"} {
        color: #ff5555;
    }

    &:hover {
        animation: ${scale} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;


export const LoginBtn = styled.button`
    width: 292px;
    height: 64px;
    border-radius: 20px;
    background: #ff5656;
    color: #fff;

    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.25px;

    &:hover {
        animation: ${scale} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;

export const QuestionBtn = styled.button`
    position: absolute;
    bottom: 25px;
    right: 21px;
    width: 272px;
    height: 64px;
    border-radius: 20px;
    background: #f4f6fa;
    font-size: 16px;
    font-family: Noto Sans CJK KR;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    ${"img"} {
        position: absolute;
        right: 21px;
    }


    &:hover {
    background: #ff5656;
    color: #fff;

        animation: ${scale} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;

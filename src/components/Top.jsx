import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import what from "../assets/images/what.png";
import arrowDown from "../assets/images/arrow-down.png";

export default function Top() {
    return (
        <Wrap>
            <Side>
                <img src={what} alt="" />{" "}
            </Side>
            <MainBox>
                <NameBox>
                    <div
                        style={{
                            width: 177,
                            height: 38.88,
                            color: "white",
                            fontSize: 16,
                            fontFamily: "Noto Sans CJK KR",
                            fontWeight: "700",
                            wordWrap: "break-word",
                        }}
                    >
                        나에게 맞는 암기 학습 방법
                    </div>
                    <div
                        style={{
                            width: 150,
                            height: "fit-content",
                            color: "white",
                            fontSize: 32,
                            fontFamily: "Noto Sans CJK KR",
                            fontWeight: "700",
                            wordWrap: "break-word",
                            textAlign: "left",
                        }}
                    >
                        MY <br />
                        MEMORY’
                        <br />
                        STYLE
                    </div>
                    <div
                        style={{
                            width: 300,
                            height: "fit-content",
                            color: "white",
                            fontSize: 12,
                            fontFamily: "Noto Sans CJK KR",
                            fontWeight: "350",
                            wordWrap: "break-word",
                            textAlign: "left",
                            marginTop: "8px",
                        }}
                    >
                        각자의 뇌에 맞는 암기학습법은 다르다
                        <br />내 스타일에 맞게 빠르게 암기하고 바로 활용하자!
                    </div>
                </NameBox>
            </MainBox>
        </Wrap>
    );
}

export const Wrap = styled.div`
    display: flex;
`;

export const Side = styled.div`
    width: 48px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 29px;
    justify-content: center;
    height: 327px;
`;

export const MainBox = styled.div`
    width: 100%;
    position: relative;
    height: 327px;

    background: linear-gradient(42deg, #cf1818 0%, #f55 100%);
`;

export const NameBox = styled.div`
    position: absolute;
    top: 78px;
    left: 30px;
    width: 177px;
    height: 400px;
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
`;

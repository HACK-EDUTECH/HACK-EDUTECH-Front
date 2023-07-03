import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import what from "../../assets/images/what.png";
import arrowDown from "../../assets/images/arrow-down.png";
import { StartBtn } from "../../components/Button";



export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Side>
                <img src={what} alt="" />{" "}
            </Side>
            <Main>
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
                            width: 150,
                            height: "fit-content",
                            color: "white",
                            fontSize: 16,
                            fontFamily: "Noto Sans CJK KR",
                            fontWeight: "350",
                            wordWrap: "break-word",
                            textAlign: "left",
                            marginTop: "45px",
                        }}
                    >
                        각자의 뇌에 맞는 암기학습법은 다르다
                        <br />내 스타일에 맞게 <br />
                        빠르게 암기하고 바로 활용하자!
                    </div>
                </NameBox>
                <StartBtn
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    <div>
                        가입하고 <span>암기 뽀개기</span>
                    </div>
                    <img src={arrowDown} alt="" />
                </StartBtn>
            </Main>
        </>
    );
}


export const Side = styled.div`
    width: 48px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 29px;
    justify-content: center;
`;

export const Main = styled.div`
    width: 100%;
    position: relative;

    background: linear-gradient(42deg, #cf1818 0%, #f55 100%);
`;

export const NameBox = styled.div`
    position: absolute;
    top: 155px;
    left: 30px;
    width: 177px;
    height: 400px;
`;

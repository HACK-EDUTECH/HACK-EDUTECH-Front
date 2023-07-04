import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import what from "../../assets/images/whats.svg";
import arrowDown from "../../assets/images/arrow-down.svg";
import room1 from "../../assets/images/학교.png";
import room2 from "../../assets/images/방.png";
import room3 from "../../assets/images/바다.png";
import room4 from "../../assets/images/놀이공원.png";
import { SearchBtn } from "../../components/Button";

export default function Main() {
    const navigate = useNavigate();

    const arr = ["중1 영단어 3단원", "중2 사회 6단원", "완료된 기억의 방 "];
    const imgArr = [room1,room2,room3];
    return (
        <>
            <Cont>
                <Wrap>
                    <Side>
                        <img src={what} alt="" />{" "}
                    </Side>
                    <BigBox>
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
                                    <br />내 스타일에 맞게 빠르게 암기하고 바로
                                    활용하자!
                                </div>
                            </NameBox>
                        </MainBox>
                    </BigBox>
                </Wrap>

                <ContentBox>
                    <h2>학습컨텐츠</h2>
                    <SearchContent>
                        <div
                            style={{
                                textAlign: "center",
                                color: "black",
                                fontSize: 14,
                                fontFamily: "Noto Sans CJK KR",
                                fontWeight: "400",
                                wordWrap: "break-word",
                            }}
                        >
                            암기가 어려운 과목이 있나요?
                        </div>
                        <SearchBtn
                            onClick={() => {
                                navigate("/search");
                            }}
                        >
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "black",
                                    fontSize: 16,
                                    fontFamily: "Noto Sans CJK KR",
                                    fontWeight: "700",
                                    wordWrap: "break-word",
                                }}
                            >
                                콘텐츠 찾기
                            </div>
                            <img src={arrowDown} alt="" />
                        </SearchBtn>
                    </SearchContent>
                </ContentBox>
                <RememberRoom>
                    <h2>최종 기억의 방</h2>
                    <RoomList>
                        {arr.map((arr,idx) => (
                            <Room imgArr={imgArr[idx]}>
                                <img  alt="" /> 
                                {arr}
                            </Room>
                        ))}
                    </RoomList>
                </RememberRoom>
            </Cont>
        </>
    );
}

export const Cont = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Wrap = styled.div`
    width: 360px;
    /* height: 100vh; */
    /* min-height: 844px; */

    display: flex;
    margin: 0 auto;
    text-align: center;
`;

export const Side = styled.div`
    width: 48px;
    height: 327px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 29px;
    justify-content: center;
    /* height: 327px; */
`;

export const BigBox = styled.div`
    width: 312px;
`;
export const MainBox = styled.div`
    position: relative;
    height: 327px;
    background: linear-gradient(42deg, #cf1818 0%, #f55 100%);
`;

export const ContentBox = styled.div`
    position: relative;
    /* top: 327px; */
    padding: 40px 40px 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RememberRoom = styled.div`
    position: relative;
    padding: 37px 40px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RoomList = styled.div`
    margin-top: 20px;
    display: grid;
    gap: 20px 24px;
    grid-template-columns: 1fr 1fr;
`;

export const Room = styled.button`
    width: 128px;
    height: 110px;
    border-radius: 40px;
    background: url(${(props) => props.imgArr});

 
`;

export const SearchContent = styled.div`
    width: 280px;
    height: 178px;
    margin-top: 21px;
    border-radius: 40px;
    padding: 48px 0 21px;
    background: #f4f6fa;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const NameBox = styled.div`
    position: absolute;
    top: 78px;
    left: 30px;
    width: 177px;
    height: fit-content;
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

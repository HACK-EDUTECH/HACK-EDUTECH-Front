import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Step3({ type }) {
    const navigate = useNavigate();

    const arr = ["13", "7", "3"];
    // const pos =[[95,130],[255,55],[400,220],[570,300]]
    const pos =[[125,140],[365,140],[630,140]]
    return (
        <Wrap style={{ backgroundColor: "#F7F7F8" }}>
            <Header type={type} />
            {/* <h2>못외운 단어들을 모아둔 <br /> 나만의 비밀의방</h2> */}
            <ImgDiv/>
            {arr.map((a,idx)=>
                (<RemBtn top={pos[idx][0]} left={pos[idx][1]} onClick={() => {navigate("/drawer");}} >{a}</RemBtn>)
            )}


        </Wrap>
    );
}

export const ImgDiv = styled.div`
    width: 360px;
    height: 740px;
    background: url("./놀이공원.png")  center  ;
    background-size: cover;
    background-position: -140px;
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-repeat: no-repeat;
    ${"h2"}{
        padding-top: 60px;
        font-size: 16px;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    }
`;

const RemBtn = styled.button`
    width: 94px;
    height: 64px;
    position: absolute;
    text-align: center;
    color: #FFF;
    font-size: 36px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
`;



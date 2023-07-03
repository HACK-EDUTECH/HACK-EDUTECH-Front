import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";


import { Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Step3({ type }) {
    const arr = [1, 2, 3, 4];
    const pos =[[95,130],[255,55],[400,220],[570,300]]
    return (
        <Wrap style={{ backgroundColor: "#F7F7F8" }}>
            <Header type={type} />
            <ImgDiv/>
            {arr.map((a,idx)=>
                (<RemBtn top={pos[idx][0]} left={pos[idx][1]}>{a}</RemBtn>)
            )}
        </Wrap>
    );
}

export const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/drawer.png");
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-repeat: no-repeat;
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
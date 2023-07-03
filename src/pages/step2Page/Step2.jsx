import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";

import mix from "../../assets/images/mix.png";
import audio from "../../assets/images/headphones.svg";

import { Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Step2({ type }) {
    const arr = [1, 2, 3, 4, 5];

    return (
        <Wrap style={{ backgroundColor: "#F7F7F8" }}>
            <Header type={type} />
            <State>
                {arr.map((a, i) => (
                    <Rate range={i + 1}></Rate>
                ))}
            </State>
            <img style={{ width: "280px", height: "280px" }} src={mix} alt="" />


       
            <Cont>
        <Swiper
      direction={'horizontal'} // 슬라이드의 방향을 설정합니다. ( "vertical"/"horizontal" )
    //   pagination={{ clickable: true }} // dots를 클릭했을 때, 클릭한 슬라이드로 이동하게 됩니다.
      
      mousewheel // 마우스 휠 동작을 허용합니다.
      keyboard // 키보드 방향키에 의한 동작을 허용합니다.
      modules={[Pagination, Mousewheel, Keyboard]} // 페이지네이션, 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
      allowTouchMove // 터치 동작을 허용합니다.
      className="main_slider"
      threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.
      speed={1000} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
      onActiveIndexChange={(swiper) => {
        console.log(swiper.activeIndex);
      }}
    >

        <SwiperSlide>
            <Div>
                The _____ food in this restaurant is delicious.
                <img src={audio} alt="" />
            </Div>
        </SwiperSlide>
        <SwiperSlide>
            <Div>
                    The _____ food in this restaurant is delicious.
                    <img src={audio} alt="" />
                </Div>
        </SwiperSlide>
  </Swiper>
                <SimulBtn>시뮬레이션 해보기 ></SimulBtn>
  </Cont>
{/* 

            <Div>
                The _____ food in this restaurant is delicious.
                <img src={audio} alt="" />
            </Div>
            <Div2>시뮬레이션 해보기 ></Div2> */}
        </Wrap>
    );
}

export const Wrap = styled.div`
    /* margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center; */
    position: relative;
`;

export const H2 = styled.h2`
    margin: 40px 0 7px;
    font-size: 12px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const State = styled.div`
    display: flex;
    margin: 38px 0 25px;
    justify-content: center;
`;

export const Rate = styled.div`
    /* margin-top: 6px; */
    width: 12px;
    height: 12px;
    background-color: ${(props) =>
        props.range > props.level ? "white" : "#777B8A"};
    /* background-color:#EF6363; */
    margin-left: 10px;
    border-radius: 50%;
`;

export const Btn = styled.button`
    display: flex;
    width: 80px;
    border-radius: 20px;
    border: none;
    background: #fff;
    height: 48px;
    padding: 15px 0;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cf1818;
    margin: 10px;
`;

const Div = styled.div`
    display: flex;

    position: relative;

    width: 251px;
    margin: 28px auto;
    border-radius: 20px;
    background: #fff;
    padding: 15px;

    color: #000;
    font-size: 18px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    text-align: left;
    align-items: flex-end;
    ${"img"} {
        margin-bottom: 3px;
        cursor: pointer;
    }
`;
const scale = keyframes` 
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
`;
const SimulBtn = styled.button`
    width: 204px;
    height: 48px;
    border-radius: 40px;
    border: 1px solid #777b8a;
    background: #fff;
    padding: 12px 15px;
    font-size: 16px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    &:hover {
        animation: ${scale} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;


export const Cont = styled.div`
    position: absolute;

    width: 360px;
    height: 48px;
`;





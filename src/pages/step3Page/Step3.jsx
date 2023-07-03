import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";

import audio from "../../assets/images/headphones.svg";
import profile from "../../assets/images/profile.png";

import { Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Step3({ type }) {
    const arr = [1, 2, 3, 4, 5];
    
    return (
        <Wrap style={{ backgroundColor: "#F7F7F8" }}>
            <Header type={type} />
            <State>
                {arr.map((a, i) => (
                    <Rate range={i + 1}></Rate>
                ))}
            </State>

            <Swiper
                style={{ width: "360px", height: "100%" }}
                direction={"horizontal"} // 슬라이드의 방향을 설정합니다. ( "vertical"/"horizontal" )
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
                    <ImgDiv></ImgDiv>
                </SwiperSlide>
                <SwiperSlide>
                    <WordDiv>
                        <span>DELICIOUS</span>
                        <span>맛있는</span>
                    </WordDiv>
                </SwiperSlide>
            </Swiper>
            <Div>
                <img class="profile" src={profile} alt="" />
                <div>
                    WOW! IT’S LOOKS SO DELICIOUS!
                    <NickName>
                        <img class="audio" src={audio} alt="" />
                        <span>JENNY</span>
                    </NickName>
                </div>
            </Div>

            {/* <Cont>
        <Div2>

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
        <img class="profile" src={profile} alt="" />
        <div>
            WOW! IT’S LOOKS SO DELICIOUS!
            <NickName>
                <img class="audio" src={audio} alt="" />
                <span>JENNY</span>
            </NickName>
        </div>

        </Div>
        </SwiperSlide>
        <SwiperSlide>
<Div>
        <img class="profile" src={profile} alt="" />
        <div>
            WOW! IT’S LOOKS SO DELICIOUS!
            <NickName>
                <img class="audio" src={audio} alt="" />
                <span>JENNY</span>
            </NickName>
        </div>

        </Div>
        </SwiperSlide>
        <SwiperSlide>
<Div>
        <img class="profile" src={profile} alt="" />
        <div>
            WOW! IT’S LOOKS SO DELICIOUS!
            <NickName>
                <img class="audio" src={audio} alt="" />
                <span>JENNY</span>
            </NickName>
        </div>

        </Div>
        </SwiperSlide>
    {/* <SliderItem />  
    <SwiperSlide>
    <Div>
        <img class="profile" src={profile} alt="" />
        <div>
            WOW! IT’S LOOKS SO DELICIOUS!
            <NickName>
                <img class="audio" src={audio} alt="" />
                <span>JENNY</span>
            </NickName>
        </div>

        </Div>
        </SwiperSlide>
  </Swiper>
  </Div2>

</Cont> */}
        </Wrap>
    );
}

export const ImgDiv = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("/wordImage.png");
`;

export const WordDiv = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: #f55;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f55;
    ${"span"} {
        color: #fff;
        text-align: center;
        font-size: 24px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 22px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-repeat: no-repeat;
`;

export const Cont = styled.div`
    position: absolute;
    bottom: 50px;
    left: 30px;
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
    position: absolute;
    top: 38px;
    z-index: 999;
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

    width: 264px;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    text-align: left;

    position: absolute;
    bottom: 30px;
    z-index: 30;

    border-radius: 30px;
    background: #ffe8e8;

    color: var(--00-on-surface-high-emphasis, rgba(0, 0, 0, 0.87));
    font-size: 12px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;

    ${".profile"} {
        margin-right: 16px;
    }
    ${".audio"} {
        cursor: pointer;
        vertical-align: bottom;
        margin-right: 3px;
    }
`;

const NickName = styled.div`
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
`;

const Div2 = styled.div`
    width: 360px;
    height: 48px;
`;

import React, { useEffect, useLayoutEffect, useState } from "react"
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";

import audio from "../../assets/images/headphones.svg";
import profile from "../../assets/images/profile.png";
import girl1 from "../../assets/images/girl1.png";
import girl2 from "../../assets/images/girl2.png";

import { Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Step4({ type }) {
    const arr = [1, 2, 3, 4, 5];
    const completionWord = [" What do they taste like?              ", "  They have a unique flavor, some say they're salty and briny.             ", "What about omelets? Do you like them?                      "];
    const [blogTitle, setBlogTitle] = useState('')
    const [count, setCount] = useState(0)
    const [wordCount, setWordCount] = useState(0)


const handleTyping= ()=>{
    const typingInterval = setInterval(() => {
        setBlogTitle((prevTitleValue) => {
            let result = prevTitleValue ? prevTitleValue + completionWord[wordCount][count] : completionWord[wordCount][0]
            setCount(count + 1)
            if (count >= completionWord[wordCount].length) {
                setCount(count)
                setBlogTitle(completionWord[wordCount])
            }
            return result
        })
    }, 100);
    return () => {
        clearInterval(typingInterval)
    }
}

    useEffect(() => {

        if(completionWord[wordCount]){
            const typingInterval = setInterval(() => {
                setBlogTitle((prevTitleValue) => {
                    let result = prevTitleValue ? prevTitleValue + completionWord[wordCount][count] : completionWord[wordCount][0]
                    setCount(count + 1)
                    if (count >= completionWord[wordCount].length) {
                        setCount(count)
                        setBlogTitle(completionWord[wordCount])
                    }
                    return result
                })
            }, 100);
            return () => {
                clearInterval(typingInterval)
            }

        }
    })


    useEffect(() => {

        if(completionWord[wordCount]===blogTitle){
            setCount(0)
            setBlogTitle("")
            setWordCount(wordCount+1)

        }
    },[blogTitle])
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
                        <span>Omelet</span>
                        <span>오믈렛</span>
                    </WordDiv>
                </SwiperSlide>
            </Swiper>
            <Div>
                <img class="profile" src={profile} alt="" />
                <div style={{position:"relative", height:"24px"}}>
                    <Scenario>{blogTitle}</Scenario>
                    <NickName>
                        <img class="audio" src={audio} alt="" />
                        <span>JENNY</span>
                    </NickName>
                </div>
            </Div>
            <Div1>
                <img class="profile" src={profile} alt="" />
                <div style={{position:"relative", height:"24px"}}>
                    <Scenario>{blogTitle}</Scenario>
                    <NickName>
                        <img class="audio" src={audio} alt="" />
                        <span>JENNY</span>
                    </NickName>
                </div>
            </Div1>
            <Div2>
                <img class="profile" src={profile} alt="" />
                <div style={{position:"relative", height:"24px"}}>
                    <Scenario>{blogTitle}</Scenario>
                    <NickName>
                        <img class="audio" src={audio} alt="" />
                        <span>JENNY</span>
                    </NickName>
                </div>
            </Div2>

            <Girl1 src={girl1}></Girl1>
            <Girl2 src={girl2}></Girl2>
            <Girl3 src={girl2}></Girl3>

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
    width: 360px;
    height: 740px;
    background: url("/오믈렛.png");
    background-size: cover;

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
    bottom: 200px;
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

    animation: box-ani 4s cubic-bezier(0, 0, 0.97, 0.6) forwards;

    ${".profile"} {
        margin-right: 16px;
    }
    ${".audio"} {
        cursor: pointer;
        vertical-align: bottom;
        margin-right: 3px;
    }

    @keyframes box-ani {
	0% {
		opacity: 0;
	}
    
	30%{
        opacity: 1;

transform: translate(0, 0);

    }
    
    80%{
        opacity: 1;

transform: translate(0, 0);

    }
    100% {
		opacity: 0;

		transform: translate(-50px, 0px);
        display: hidden;
		/* transform: translate(100px, 100px); */
	}
}
`;

const Div1 = styled.div`
    display: flex;

    width: 264px;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    text-align: left;

    position: absolute;
    bottom: 115px;
    z-index: 30;
    height: 100px;

    border-radius: 30px;
    background: #ffe8e8;

    color: var(--00-on-surface-high-emphasis, rgba(0, 0, 0, 0.87));
    font-size: 12px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;

    animation: box-ani1 13s cubic-bezier(0, 0, 1, 0.07) forwards;

    ${".profile"} {
        margin-right: 16px;
    }
    ${".audio"} {
        cursor: pointer;
        vertical-align: bottom;
        margin-right: 3px;
    }

    @keyframes box-ani1 {
    0% {
		opacity: 0;
	}
    
	25% {
		opacity: 0;
	}
    
	35%{
        opacity: 1;

transform: translate(0, 0);

    }
    
    90%{
        opacity: 1;

transform: translate(0, 0);

    }
    100% {
		opacity: 0;

		transform: translate(50px, 0px);
		/* transform: translate(100px, 100px); */
	}
}
`;

const Div2 = styled.div`
    display: flex;
    height: 100px;

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

    animation: box-ani2 18s cubic-bezier(0, 0, 0.97, 0.6) forwards;

    ${".profile"} {
        margin-right: 16px;
    }
    ${".audio"} {
        cursor: pointer;
        vertical-align: bottom;
        margin-right: 3px;
    }

    @keyframes box-ani2 {
        0% {
		opacity: 0;
	}
    
	60% {
		opacity: 0;
	}
    
	70%{
        opacity: 1;

transform: translate(0, 0);

    }
    
    
    95%{
        opacity: 1;

transform: translate(0, 0);

    }
    100% {
		opacity: 0;

		transform: translate(-50px, 0px);
        display: hidden;
		/* transform: translate(100px, 100px); */
	}
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

const Girl1 = styled.img`
    width: 260px;
    /* height: ; */
    position: absolute;
    bottom: 120px;
    left:220px;

    z-index: 20;
    animation: fade-in1 13s cubic-bezier(0, 0, 0.6, 0.07) forwards;
    @keyframes fade-in1 {
        
    0% {
		opacity: 0;
	}
    
	25% {
		opacity: 0;
	}
    
	35%{
        opacity: 1;
        transform: translate(-50px, 0);


    }
    
    90%{
        opacity: 1;
        transform: translate(-50px, 0);


    }
    100% {
		opacity: 0;

		transform: translate(50px, 0px);
		/* transform: translate(100px, 100px); */
	}
}

    
`;

const Girl2 = styled.img`
    position: absolute;
    width: 260px;

    bottom: 0px;
    right:220px;
    
    z-index: 20;

    animation: fade-in 4s cubic-bezier(0, 0, 0.97, 0.6) forwards;
    @keyframes fade-in {
        0% {
		opacity: 0;
	}
    
	30%{
        opacity: 1;

transform: translate(50px, 0);

    }
    
    80%{
        opacity: 1;

transform: translate(50px, 0);

    }
    100% {
		opacity: 0;

		transform: translate(-50px, 0px);
        display: hidden;
		/* transform: translate(100px, 100px); */
	}
}
 
`;

const Girl3 = styled.img`
    position: absolute;
    width: 260px;

    bottom: 0px;
    right:180px;
    
    z-index: 20;

    animation: fade-in2 18s cubic-bezier(0, 0, 0.6, 0.6) forwards;
    @keyframes fade-in2 {
        0% {
		opacity: 0;
	}
    
	60% {
		opacity: 0;
	}
    
	70%{
        opacity: 1;

transform: translate(0, 0);

    }
    
    
    95%{
        opacity: 1;

transform: translate(0, 0);

    }
    100% {
		opacity: 0;

		transform: translate(-50px, 0px);
        display: hidden;
		/* transform: translate(100px, 100px); */
	}
}
 
`;

const Scenario = styled.p`
/* font-size: 20px;
  min-width:11px;
  white-space: nowrap;
  margin: 0;
  position: fixed;
  color: transparent;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%); */
  /* color: #FFE8E8;; */

  

@keyframes typing{
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }

}
`;


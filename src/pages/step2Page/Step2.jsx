import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import mix from "../../assets/images/비빔밥.jpeg";
import audio from "../../assets/images/headphones.svg";

import { Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import noImg from "../../assets/images/noImg.svg";
import yesImg from "../../assets/images/yesImg.svg";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { setStep1 } from "../../count/step1Slice";
import { setStep2 } from "../../count/step2Slice";
import { setWord } from "../../count/counterSlice";
import { shuffle, random } from "lodash";

import { useSelector, useDispatch } from "react-redux";

export default function Step2({ type }) {
    const [level, setLevel] = useState(1);
    const [checked, setChecked] = useState(false);
    const [inputData, setInputData] = useState();
    let [toastState, setToastState] = useState(false);
    
    const [answerWord, setAnswerWord] = useState("");

    const navigate = useNavigate();
    const wordReal = useSelector((state) => state.step2.value);
    const levelCount = useSelector((state) => state.step1.value).length;
    const [wordlist, setWordlist] = useState(shuffle(wordReal));
    const inputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    let wordgood = useSelector((state) => state.word.value);

    useEffect(() => {
        setIsLoading(true);
        console.log(wordReal);

    }, [wordgood]);

    // console.log(wordgood[wordReal[level]].sent);

    console.log(wordgood);

    const handleAnswer = (e) => {
        // Input을 체크해서 state를 변경하는 함수.
        setAnswerWord(e.target.value);
    };

    const handleOnKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value);
            setChecked(true);
            setLevel(level + 1);
            setAnswerWord("");
            console.log(wordReal[level] , e.target.value);

            if (wordReal[level] == e.target.value) {
                setToastState("answer");
            } else {
                setToastState("false");
            }
        }

        if(level==wordReal.length){
            navigate("/step3");

        }
    };

    useEffect(() => {
        let timer = setTimeout(() => {
            setToastState(false); // 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [toastState]);

    return (
        isLoading && (
            <Wrap style={{ backgroundColor: "#F7F7F8" }}>
                <Header type={type} />
                <State>
                    {level}/{wordReal.length}
                </State>
                <img
                    style={{
                        width: "280px",
                        height: "280px",
                        borderRadius: "20px",
                    }}
                    src={mix}
                    alt=""
                />

                <Cont>
                    <Div>
                        <p>
                            {wordgood[wordReal[level]].sentence.split("/")[0]}
                        </p>

                        <input
                            type="text"
                            ref={inputRef}
                            value={answerWord}
                            onChange={handleAnswer}
                            onKeyPress={handleOnKeyPress}
                        />
                        <p>
                            {wordgood[wordReal[level]].sentence.split("/")[1]}
                        </p>
                        <img src={audio} alt="" />
                    </Div>
                    <SimulBtn
                        onClick={() => {
                            navigate("/step3");
                        }}
                    >
                        시뮬레이션 해보기 >
                    </SimulBtn>
                </Cont>
                {toastState === "answer" && (
                    <ContToastAnswer>
                        <img src={yesImg} alt="" />
                        <p>OK!</p>
                    </ContToastAnswer>
                )}
                {toastState === "false" && (
                    <ContToastFalse>
                        <img src={noImg} alt="" />
                        <p>
                            {" "}
                            정답 : {wordReal[level - 1]} <br />
                            SAVED!
                        </p>
                    </ContToastFalse>
                )}
            </Wrap>
        )
    );
}

export const focusIn = keyframes`
        0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
                
        }
        22% {
        -webkit-transform: scale(1);
                transform: scale(1);
        }
        90% {
        -webkit-transform: scale(1);
                transform: scale(1);
                opacity:100%;
        
            }

        100% {
        -webkit-transform: scale(0.3);
                transform: scale(0.3);
                opacity:0%;
        }
`;

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
        display:: inline-block;

    position: relative;

    width: 251px;
    margin: 20px auto;
    border-radius: 20px;
    background: #fff;
    padding: 15px;

    color: #000;
    font-size: 17px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1.25px;
    text-align: left;
    align-items: flex-end;
    ${"img"} {
        margin-top: 3px;
    	vertical-align: top;

        cursor: pointer;
    }

    ${"input"}{
        display:inline;
        width: 80px;
        margin: 0 10px;
        line-height: 25px;
        padding: 0 5px;
        text-align: center;
        border-bottom: 2px dashed #777B8A;
    }
    ${"p"}{
        display:inline;

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

export const ContToastAnswer = styled.div`
    width: 203px;
    height: 203px;
    background-color: green;
    border-radius: 20px;
    position: absolute;
    top: 152px;
    right: 78px;

    text-align: center;
    animation: ${focusIn} 2s forwards;

    ${"img"} {
        margin: 70px 0 20px;
    }

    ${"p"} {
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const ContToastFalse = styled.div`
    width: 203px;
    height: 203px;
    background-color: #ff7878;
    border-radius: 20px;
    position: absolute;
    top: 152px;
    right: 78px;

    text-align: center;
    animation: ${focusIn} 2s forwards;

    ${"img"} {
        margin: 70px 0 20px;
    }

    ${"p"} {
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

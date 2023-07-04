import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useRecoilState, 
    useRecoilValue, 
    useSetRecoilState, 
    useResetRecoilState 
  } from 'recoil';

import { isWordAtom } from '../../atom/atoms.ts';
import { step1Atom } from '../../atom/atoms.ts';

import mix1 from "../../assets/images/디저트.jpeg";
import mix2 from "../../assets/images/img3.jpeg";
import noToast from "../../assets/images/noToast.png";
import yesToast from "../../assets/images/yesToast.png";
import yesImg from "../../assets/images/yesImg.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";

export default function Step1({ type }) {
    const arr = [["Piano","Dessert", "Sea", "Bicycle", "Television"],["Chair","Cloud","Book","Shoe", "Meal"] ];

    const [imgArr, setImgArr] = useState(mix1);
    const navigate = useNavigate();
    
    // const isWord = useRecoilValue(isWordAtom);
    // const counterHandler = useSetRecoilState(isWord);
    const [isWord, setIsWord] = useRecoilState(isWordAtom); 
    const [isStep1Word, setIsStep1Word] = useRecoilState(step1Atom); 
    // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
    const currentWord= useRecoilValue(isWordAtom);  // 읽기 전용!
    const wordHandler = useSetRecoilState(step1Atom); // 값만 변경 시키기 
    const resetWord = useResetRecoilState(isWordAtom); // 디폴트값으로 값 변경
    
    const dataset = isWord.CHAPTER1.STEP1[0].word_set;
    const [level, setLevel] = useState(1);

    const [checked, setChecked] = useState();

    useEffect(() => {
        // console.log(isStep1Word);
    }, [checked]);

    const handleChecked = (e) => {
        let arr=[...isStep1Word]
        console.log(e.target.innerText); 
        console.log(isStep1Word);
        console.log(isWord);

        const nodes = [...e.target.parentElement.children];
        arr.pop()
    
        const index = nodes.indexOf(e.target);
        setChecked(index);
        wordHandler(arr)

    };


    const handleLevel = (e) => {
        setChecked();
        setLevel(level+1);
        setImgArr(mix2);
    }

    return (
        <div style={{ backgroundColor: "#F7F7F8" , position:" relative"}}>
            <Header type={type} />
            <State>
                {level}/27
            </State>
            <p style={{ marginBottom: "10px"}}>연관된 단어를 하나 고르세요</p>
            <img src={imgArr} alt="" style={{width: "212px",height: "212px", borderRadius: "20px"}} />


            <Div>
                {arr[level-1].map((a, idx) => (
                    <Btn idx={idx} checked={checked} onClick={handleChecked}>{a}</Btn>
                ))}
                
            </Div>
            <Div2>
                <button  onClick={() => { navigate("/step2"); }}>예시문</button>
                <button>시뮬레이션 해보기</button>
            </Div2>
            <RightBtn src={arrowRight}  onClick={handleLevel}></RightBtn>
            <LeftBtn src={arrowLeft}  onClick={handleLevel}></LeftBtn>

            {checked&&<ContToastFalse >
                <img src={yesImg} alt="" />
                <p>OK!</p>
            </ContToastFalse>}
        </div>
    );
}

export const Wrap = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H2 = styled.h2`
    margin: 40px 0 7px;
    font-size: 12px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Word = styled.div`
    margin: 30px;
    font-size: 20px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

export const State = styled.div`
    display: flex;
    margin: 38px;
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
    font-size: 16px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cf1818;
    margin: 10px;
    background-color: ${(props) =>
         props.idx===props.checked ? "#FF5656" : "#FFF"};
    color: ${(props) =>
         props.idx===props.checked ? "#FFF" : "#cf1818"};

&:hover {
        animation: scale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes scale{
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }

    } 
`;

const Div = styled.div`
    display: flex;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const Div2 = styled.div`
    ${"button"} {
        border-radius: 40px;
        border: 1px solid #777b8a;
        background: #fff;
        padding: 12px 15px;
        margin-right: 20px;
    }
`;



export const focusIn =  keyframes`
        0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
                
        }
        22% {
        -webkit-transform: scale(1);
                transform: scale(1);
        }
        80% {
        -webkit-transform: scale(1);
                transform: scale(1);
                opacity:100%;
        
            }

        100% {
        -webkit-transform: scale(0.3);
                transform: scale(0.3);
                opacity:0%;
        }
`


export const focusOut =  keyframes`
        0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
                
        }
        22% {
        -webkit-transform: scale(1);
                transform: scale(1);
        }
        70% {
        -webkit-transform: scale(1);
                transform: scale(1);
                opacity:100%;
        
            }

        100% {
        -webkit-transform: scale(0);
                transform: scale(0);
                opacity:0;
        }
`



export const ContToastFalse = styled.div`
    width: 203px;
    height: 203px;
    background-color: #A3FF78;
    border-radius: 20px;
    position: absolute;
    top: 178px;
    right: 78px;

    text-align: center; 
    animation: ${focusIn} 2s forwards ;

    ${"img"}{
        margin: 70px 0 40px;
    }

    ${"p"}{
        color: #000;
text-align: center;
font-size: 16px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
`

export const ContToastAnswer = styled.div`
    width: 330px;
    position: absolute;
    top: 177px;
    left: 90px
    margin: 0 auto;
    text-align: center; 
    /* margin: 0 auto; */
    animation: ${focusOut} 1.5s cubic-bezier(1, 1, 1, 1) alternate;
    animation-fill-mode: forwards;

`

export const RightBtn = styled.img`
    position: absolute;
    top: 250px;
    right:20px;
    cursor: pointer;
`;

export const LeftBtn = styled.img`
    position: absolute;
    top: 250px;
    left:20px;
    cursor: pointer;

`;
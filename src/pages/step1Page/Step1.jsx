import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";

import { useRecoilState, 
    useRecoilValue, 
    useSetRecoilState, 
    useResetRecoilState 
  } from 'recoil';

import { isWordAtom } from '../../atom/atoms.ts';
import { step1Atom } from '../../atom/atoms.ts';

import mix from "../../assets/images/mix.png";

export default function Step1({ type }) {
    const arr = ["MEAT", "CURRY", "RICE", "FRIED", "APPLE"];
    // const isWord = useRecoilValue(isWordAtom);
    // const counterHandler = useSetRecoilState(isWord);
    const [isWord, setIsWord] = useRecoilState(isWordAtom); 
    const [isStep1Word, setIsStep1Word] = useRecoilState(step1Atom); 
    // useState와 같지만, useRecoilState을 사용하여 다른 파일에 있는 아톰을 읽을 수 있다.
    const currentWord= useRecoilValue(isWordAtom);  // 읽기 전용!
    const wordHandler = useSetRecoilState(step1Atom); // 값만 변경 시키기 
    const resetWord = useResetRecoilState(isWordAtom); // 디폴트값으로 값 변경
    
    const dataset = isWord.CHAPTER1.STEP1[0].word_set;
    const level=3;
    const [checked, setChecked] = useState();

    useEffect(() => {
        // console.log(isStep1Word);
    }, [checked]);
    
        
    const minusCount = () => {
      };
    

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


    return (
        <div style={{ backgroundColor: "#F7F7F8" }}>
            <Header type={type} />
            <State>
                {arr.map((a, i) => (
                    <Rate range={i + 1} level={level}></Rate>
                ))}
            </State>
            <img src={mix} alt="" />
            <Word>카레밥</Word>
            <Div>
                {arr.map((a, idx) => (
                    <Btn idx={idx} checked={checked} onClick={handleChecked}>{a}</Btn>
                ))}
            </Div>
            <Div2>
                <button>예시문</button>
                <button>시뮬레이션 해보기</button>
            </Div2>
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

    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cf1818;
    margin: 10px;
    background-color: ${(props) =>
         props.idx===props.checked ? "#FF5656" : "#FFF"};
    color: ${(props) =>
         props.idx===props.checked ? "#FFF" : "#cf1818"};

    /* &:active{
    background: #cf1818;
    color: #fff;
    } */
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

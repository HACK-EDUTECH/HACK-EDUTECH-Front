import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useRecoilValue } from 'recoil';
import { isWordAtom, step1Atom, step2Atom } from '../../atom/atoms.ts';


export default function Step({ type }) {
    const navigate = useNavigate();
    const arr = [1, 2, 3, 4];
    const step1Word= useRecoilValue(isWordAtom);  // 읽기 전용!
    const step2Word= useRecoilValue(step2Atom);  // 읽기 전용!
    
    const count = step1Word.CHAPTER1.STEP2.length
    const current_count = step1Word.CHAPTER1.STEP1.length
console.log(current_count);
    return (
        <div>
            <Header type={type} />
            <H2>
                {" "}
                <bold style={{ fontWeight: 700 }}>STEP,</bold> 효율적 암기
                단계를 제안합니다
            </H2>
            <Wrap>
                {arr.map((x, idx) => (
                    <>
                        <Cont onClick={() => { navigate(`/step${idx+1}`);}}>
                            <span>{idx + 1}</span>
                            <TitleBox>
                                <h3>기본 암기</h3>
                                <p>밈을 맞춰보며 모르는 단어 찾기</p>
                                <State>
                                    <p>{count}/{current_count}</p>
                                    <MyProgress>
                                        <StateBar width={count} maxWidth={current_count}></StateBar>
                                    </MyProgress>
                                </State>
                            </TitleBox>
                        </Cont>
                        {idx !== 3 && <div>:</div>}
                    </>
                ))}
            </Wrap>
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
    font-size: 16px;
    font-family: Noto Sans CJK KR;
`;

export const Cont = styled.div`
    width: 286px;
    height: 96px;
    margin: 23px 0;
    padding: 12px 18px 14px 16px; //수정예정
    display: flex;
    align-items: flex-start;
    border-radius: 20px;
    background: #f7f7f9;
    justify-content: space-between;
    cursor: pointer;
    ${"span"} {
        width: 64px;
        height: 64px;
        font-size: 24px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 64px;
        border-radius: 64px;
        background: #fff;
    }
    &:hover { 
        outline: 1px solid #FF5656;;

    }
`;

export const TitleBox = styled.div`
    margin: 0 10px;
    text-align: left;
    ${"h3"} {
        font-size: 12px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 18px;
    }

    ${"p"} {
        margin: 5px 0;
        font-size: 12px;
        font-family: Roboto;
    }
`;

export const State = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ${"p"} {
        text-align: right;
        font-size: 10px;
        font-family: Roboto;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 1.25px;
        text-transform: uppercase;
    }
`;

export const MyProgress = styled.div`
    width: 116px;
    height: 4px;
    border-radius: 10px;
    background: rgba(151, 151, 151, 0.38);
`;

export const StateBar = styled.div`
    width: calc(100 / ${(props) => props.maxWidth} * ${(props) => props.width}%);
    /* transition: 0.5s; */
    height: 4px;
    border-radius: 10px;
    background: #9a9a9a;
`;

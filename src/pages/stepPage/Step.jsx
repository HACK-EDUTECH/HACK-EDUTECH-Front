import React from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";



export default function Step({ type }) {
    const navigate = useNavigate();
    const arr = [{title: "기본 암기", comment: "밈을 맞춰보며 모르는 단어 찾기", count:27, newCount:17 }, {title: "예시문 단어맞추기", comment: "예시문을 통해 문법, 문장 학습하기", count:14, newCount:10 }, {title: "외운 단어 복습하기", comment: "카드 맞추기와 시뮬레이션", count:10, newCount:5 },];
    
    

    return (
        <div>
            <Header type={type} />
            <Cotainer>
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
                                    <h3>{x.title}</h3>
                                    <p>{x.comment}</p>
                                    <State>
                                        <p>{x.newCount}/{x.count}</p>
                                        <MyProgress>
                                            <StateBar width={x.newCount} maxWidth={x.count}></StateBar>
                                        </MyProgress>
                                    </State>
                                </TitleBox>
                            </Cont>
                            {idx !== 2 && <div>:</div>}
                        </>
                    ))}
                </Wrap>

            </Cotainer>
        </div>
    );
}

export const Cotainer = styled.div`
    height: 100%;
    /* background-image: url("/놀이공원.png") ; */
`;

export const Wrap = styled.div`
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H2 = styled.h2`
    padding: 40px 0 7px;
    font-size: 18px;
    font-weight: 800;
    color: white;
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
        min-width: 64px;
        height: 64px;
        font-size: 24px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 64px;
        border-radius: 64px;
        background: #fff;
    }
    &:hover { 
        ${"span"} {
            color: #f7f7f9;
            background: #777B8A;
        }
        background: #fff;

    }
`;

export const TitleBox = styled.div`
    width: 100%;
    margin: 0 10px;
    text-align: left;
    ${"h3"} {
        font-size: 14px;
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

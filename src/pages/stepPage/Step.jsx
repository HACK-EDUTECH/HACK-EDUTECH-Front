import React, { useEffect,useState, useCallback } from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setWord } from "../../count/counterSlice";
import { setStep1 } from "../../count/step1Slice";
import { setStep2 } from "../../count/step2Slice";

import { ref, child, get } from "firebase/database";
import { db } from "../../api/firebaseConfig";


export default function Step({ type }) {
    const navigate = useNavigate();
    const [ wordList, setWordList ] = useState();
    const [ wordStep1, setWordStep1 ] = useState(0);
    const [ wordStep2, setWordStep2 ] = useState(0);
    const [ wordStep3, setWordStep3 ] = useState(0);
    const [ wordStepList, setWordStepList ] = useState([{count:0}, {count:0}, {count:0}]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const arr = [{title: "기본 암기", comment: "밈을 맞춰보며 모르는 단어 찾기", count:wordStep2.length, newCount:wordStep1.length }, {title: "예시문 단어맞추기", comment: "예시문을 통해 문법, 문장 학습하기", count:14, newCount:10 }, {title: "외운 단어 복습하기", comment: "카드 맞추기와 시뮬레이션", count:wordStep2.length, newCount:wordStep3.length },];


    const { chapter } = useParams();

    const readOne = () => {
        const dbRef = ref(db);
        get(child(dbRef, `/DATA_TABLE/CHAPTER${chapter}/words`))
          .then(snapshot => {
          if (snapshot.exists()) {
            console.log("0",snapshot.val());

            setWordList(Object.keys(snapshot.val()));
            dispatch(
                setWord(snapshot.val())
            );
            dispatch(
                setStep1(Object.keys(snapshot.val()))
            );
          } else {
            console.log("No data available");
          }
        })

        get(child(dbRef, `/USER_TABLE/HACK-EDUTECH-0607/CHAPTER3/STEP1/`))
          .then(snapshot => {
          if (snapshot.exists()) {
            setWordStep1(snapshot.val());
            
            console.log("1",snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        
        get(child(dbRef, `/USER_TABLE/HACK-EDUTECH-0607/CHAPTER3/STEP2/`))
        .then(snapshot => {
        if (snapshot.exists()) {
          setWordStep2(snapshot.val());
          console.log("2",snapshot.val(), wordStep2);

        } else {
          setWordStep2(false);
          console.log("No data available");
        }
      })

      get(child(dbRef, `/USER_TABLE/HACK-EDUTECH-0607/CHAPTER3/STEP3/`))
      .then(snapshot => {
      if (snapshot.exists()) {
        setWordStep3(snapshot.val());
        console.log("3",snapshot.val());

      } else {
        setWordStep3(false);
        console.log("No data available");
      }
    })

    }

useEffect(() => {
    readOne()
    setIsLoading(true)
    
}, [])

useEffect(() => {
    dispatch(setStep2(wordStep2));
}, [wordStep2])
 
 

    return (
        isLoading&&
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
                            <Cont onClick={() => { navigate(`/step${idx+1}`);}} wordStep={x.newCount}>
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
        color: black;

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

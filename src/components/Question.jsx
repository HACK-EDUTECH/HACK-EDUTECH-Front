import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import arrowDown from "../assets/images/arrow-down.png";
import { useNavigate } from "react-router-dom";
import { QuestionBtn } from "./Button";

export default function Question() {
    const navigate = useNavigate();

    const [Selected, setSelected] = useState();
    const [Selected1, setSelected1] = useState();
    const [Selected2, setSelected2] = useState();

    const [Checked1, setChecked1] = useState();
    const [Checked2, setChecked2] = useState();
    const [Checked3, setChecked3] = useState();

    const [isDisabled1, setIsDisabled1] = useState(false);
    const [isDisabled2, setIsDisabled2] = useState(false);
    const [isDisabled3, setIsDisabled3] = useState(false);

    useEffect(() => {
        if (Selected) {
            setIsDisabled1(true);
        }
        if (Selected1) {
            setIsDisabled2(true);
        }
        if (Checked1 || Checked2 || Checked3) {
            setIsDisabled3(true);
        }
    }, [Selected, Selected1, Checked1, Checked2, Checked3]);

    const handleSelect = (e) => {
        if (e.target.name === "1") {
            setSelected(e.target.value);
        } else if (e.target.name === "2") {
            setSelected1(e.target.value);
        }
    };

    const handleCheck = (e) => {
        if (e.target.name === "1") {
            setChecked1(e.target.checked);
        }
        if (e.target.name === "2") {
            setChecked2(e.target.checked);
        }
        if (e.target.name === "3") {
            setChecked3(e.target.checked);
        }
    };

    return (
        <>
            <Wrap>
                <h2>어떤 과목이 암기가 어렵나요?</h2>
                <Selete>
                    <select
                        name="1"
                        id=""
                        onChange={handleSelect}
                        value={Selected}
                    >
                        <option value="none">=== 선택 ===</option>
                        <option>사회</option>
                        <option>영어</option>
                        <option>과학</option>
                        <option>프랑스어</option>
                    </select>
                </Selete>
            </Wrap>
            {isDisabled1 && (
                <Wrap>
                    <h2>몇학년 인가요?</h2>
                    <Selete>
                        <select
                            name="2"
                            id=""
                            onChange={handleSelect}
                            value={Selected1}
                        >
                            <option value="none">=== 선택 ===</option>
                            <option>중학교 1학년</option>
                            <option>중학교 2학년</option>
                            <option>중학교 3학년</option>
                        </select>
                    </Selete>
                </Wrap>
            )}
            {isDisabled2 && (
                <Wrap>
                    <h2>어느 부분 학습이 필요한가요?</h2>

                    <CheckBox>
                        <label>
                            <input
                                type="checkbox"
                                name="1"
                                onChange={handleCheck}
                                value={Checked1}
                            />{" "}
                            단어
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="2"
                                onChange={handleCheck}
                                value={Checked2}
                            />{" "}
                            문법
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="3"
                                onChange={handleCheck}
                                value={Checked3}
                            />{" "}
                            회화
                        </label>
                    </CheckBox>
                </Wrap>
            )}
            {isDisabled3 && (
                <QuestionBtn
                    onClick={() => {
                        navigate("/choice");
                    }}
                >
                    학습하러가기
                    <img src={arrowDown} alt="" />
                </QuestionBtn>
            )}
        </>
    );
}

export const Wrap = styled.div`
    text-align: left;
    margin-bottom: 24px;
    ${"h2"} {
        color: #000;
        font-size: 16px;
        font-family: Noto Sans CJK KR;
        font-weight: 700;
    }
`;

export const Selete = styled.div`

width: fit-content;
box-shadow: 0px 5px 5px 0px #E1E2E7, 0px 3px 14px 0px #E1E2E7, 0px 8px 10px 0px #E1E2E7;
margin-top: 20px;
padding: 3px 5px;
border-radius: 8px;
${"select"}{
    cursor: pointer;

}
`;

export const CheckBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 41px;
    ${"label"}{
    cursor: pointer;}
`;


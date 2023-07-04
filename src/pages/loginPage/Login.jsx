import React from "react";
import styled, { keyframes } from "styled-components";
import key from "../../assets/images/key.svg";
import lock from "../../assets/images/lock.svg";
import { useNavigate } from "react-router-dom";
import { LoginBtn } from "../../components/Button";

export default function Login() {
    const navigate = useNavigate();

    return (
        <Wrap>
            <Cont>
                <span>어서와!</span>
                <p>
                    암기는 쉽게 활용은 빠르게
                    <br />
                    하도록 도와줄게
                </p>
            </Cont>

            <CustomInp>
                <img src={key} alt="" />
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="아이디(이메일)를 입력해주세요."
                />
            </CustomInp>
            <CustomInp>
                <img src={lock} alt="" />
                <input
                    type="password"
                    name=""
                    id=""
                    placeholder="비밀번호를 입력해주세요."
                />
            </CustomInp>

            <a href="">비밀번호를 잊으셨나요?</a>

            <Ment>서비스가 처음이세요?</Ment>
            <LoginBtn
                onClick={() => {
                    navigate("/main");
                }}
            >
                가입하기
            </LoginBtn>
        </Wrap>
    );
}

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    align-items: center;

    ${"a"} {
        width: 286px;
        text-align: right;
        font-size: 12px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
    }
`;

export const Cont = styled.div`
    padding: 88px 0 26px;
    ${"span"} {
        font-size: 24px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        margin: 9px 0;
    }

    ${"p"} {
        font-size: 14px;
        font-family: Noto Sans CJK KR;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const CustomInp = styled.div`
    display: flex;
    padding: 20px 18px;
    align-items: center;
    width: 292px;
    height: 64px;
    border-radius: 20px;
    background: #f9fafb;
    margin-bottom: 20px;
    ${"input"} {
        width: 100%;
        margin-left: 20px;
        font-size: 14px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.25px;
    }
`;


export const Ment = styled.p`
    font-size: 16px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 79px 0 26px;
`;

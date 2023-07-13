import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import mix from "../assets/images/img2.jpeg";
import noBtn from "../assets/images/nobtn.svg";
import okBtn from "../assets/images/okbtn.svg";
import { useSelector, useDispatch } from "react-redux";
import data from "../data/data.json";
import seafood from "../assets/images/HACK-EDUTECH-0607/chapter3_seafood1.jpeg";
import pancake from "../assets/images/HACK-EDUTECH-0607/chapter3_pancake1.jpeg";
import topping from "../assets/images/HACK-EDUTECH-0607/chapter3_topping1.jpeg";
import omelet from "../assets/images/HACK-EDUTECH-0607/chapter3_omelet1.jpeg";
import syrup from "../assets/images/HACK-EDUTECH-0607/chapter3_syrup1.jpeg";
import blueberry from "../assets/images/HACK-EDUTECH-0607/chapter3_blueberry1.jpeg";
import bacon from "../assets/images/HACK-EDUTECH-0607/chapter3_bacon1.jpeg";
import amazing from "../assets/images/HACK-EDUTECH-0607/chapter3_amazing1.jpeg";
import healthy from "../assets/images/HACK-EDUTECH-0607/chapter3_healthy1.jpeg";

export default function WordDetail({
    setArr,
    idx,
    checked,
    setChecked,
    setRemoved,
}) {
    let wordkr = useSelector((state) => state.word.value);
    const [isLoading, setIsLoading] = useState(false);
    const [imgArr, setImgArr] = useState([
        blueberry,
        seafood,
        pancake,
        topping,
        omelet,
        syrup,
        bacon,
        amazing,
        healthy,
    ]);

    useEffect(() => {

        setIsLoading(true);
    }, []);

    return (
        isLoading && (
            <WordBox>
                <WordImg src={imgArr[idx]} alt="" />
                <span>{checked}</span>
                <span>{data[checked].mean}</span>
                <WordCont>
                    <img
                        src={okBtn}
                        alt=""
                        onClick={() => {
                            setChecked();
                            imgArr.pop();
                            // setWord(
                            //     word.splice(idx, 1)

                            //     );
                            setRemoved(true);
                            setArr(imgArr);
                        }}
                    />
                    <img
                        src={noBtn}
                        alt=""
                        onClick={() => {
                            setChecked();
                        }}
                    />
                </WordCont>
            </WordBox>
        )
    );
}

export const WordBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 315px;
    height: 501px;
    border-radius: 40px;
    background: #fff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
    margin: 30px auto;
    align-items: center;
    padding: 42px 0;
    ${"span"} {
        display: flex;
        width: 80px;
        height: 48px;
        margin: 10px 0;
        border-radius: 20px;
        background: #f7f7f8;
        align-items: center;
        justify-content: center;
    }
`;

export const WordCont = styled.div`
    display: flex;
    width: 180px;
    margin-left: 10px;
    justify-content: space-between;
    ${"img"} {
        cursor: pointer;
    }
`;

export const WordImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 20px;
`;

import React, {useState, useEffect} from "react";
import styled, { keyframes } from "styled-components";
import mix from "../assets/images/img2.jpeg";
import noBtn from "../assets/images/nobtn.svg";
import okBtn from "../assets/images/okbtn.svg";


export default function WordDetail({imgArr, setArr, setChecked, setRemoved}) {
  return (
    <WordBox>
          <WordImg src={mix} alt="" />
          <span>블루베리</span>
          <span>blueberry</span>
          <WordCont>
            <img src={okBtn} alt=""  onClick={()=>{
              setChecked()
              imgArr.pop()
              setRemoved(true)
              setArr(imgArr)}} />
            <img src={noBtn} alt="" onClick={()=>{
              setChecked()}}/>
          </WordCont>
    </WordBox>
  )
}




export const WordBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 501px;
  border-radius: 40px;
  background: #FFF;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  margin: 30px auto;
  align-items: center;
  padding: 42px 0;
${"span"}{
  display: flex;
  width: 80px;
height: 48px;
  margin: 10px 0;
  border-radius: 20px;
background: #F7F7F8;
align-items: center;
    justify-content: center;
}
`;

export const WordCont = styled.div`
  display: flex;
  width: 180px;
  margin-left: 10px;
  justify-content: space-between;
  ${"img"}{
    cursor: pointer;

  }
`;

export const WordImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 20px;

`;


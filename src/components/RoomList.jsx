import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import styled, { keyframes } from "styled-components";
import edit from "../assets/images/edit.svg";
import img1 from "../assets/images/img1.jpeg";
import img9 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/스파게티.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/비빔밥.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img7.jpeg";
import img8 from "../assets/images/img8.jpeg";
import img2 from "../assets/images/img9.jpeg";

import { useNavigate } from "react-router-dom";

export default function RoomList({arr, setChecked, removed}) {
  const navigate = useNavigate();
  // const arr = ["학교", "내 방", "운동장", "도시", "놀이공원","학교", "내 방", "운동장", "도시"];
  // const [checked, setChecked] = useState();

  const [imgArr, setImgArr]  = useState([img1,img2,img3,img4,img5,img6,img7,img8,img9]);  

  const handleChecked = (e) => {
      const nodes = [...e.target.parentElement.children];
      // arr.pop()
  
      const index = nodes.indexOf(e.target);
      setChecked(index);

  };

  return (
    <Wrap>
        <h2>단어카드로 복습해보세요</h2>
        <Div>
            {arr.map((a, idx) => (
                <Btn src={imgArr[idx]} alt="" idx={idx} onClick={handleChecked} />
            ))}
        </Div>
            <p class="ment1">그래도 안외워지시나요?</p>
            <p class="ment2">시물레이션으로  한번에 활용하며 외우기</p>
        <ChoiceBtn  onClick={() => { navigate("/setting");  }}>A. Introducing Korean food</ChoiceBtn>
        <ChoiceBtn onClick={() => { navigate("/setting")}} >B. Questions about favorite food</ChoiceBtn>
    </Wrap>
  )
}



export const Wrap = styled.div`
  background: #F7F7F8;

  ${"h2"}{
    margin:25px 0 25px;


  font-size: 16px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  }

  ${".ment1"}{
    font-size: 16px;
font-family: Noto Sans CJK KR;
margin: 80px 0 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }

  ${".ment2"}{
    margin-bottom: 30px;

    font-size: 14px;
font-family: Noto Sans CJK KR;
font-style: normal;
font-weight: 400;
line-height: normal;
  

  }
`

export const Btn = styled.img`
    display: flex;
    width: 91px;
    height: 85px;
    border-radius: 20px;
  
    background-color: ${(props) =>
         props.idx===props.checked ? "#FF5656" : "#FFF"};
    color: ${(props) =>
         props.idx===props.checked ? "#FFF" : "#cf1818"};
    cursor: pointer;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 12px;
    margin: 0 30px;
`;


const ChoiceBtn = styled.button`
display: flex;
width: 290px;
  height: 54px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cf1818;
    margin: 10px auto;
    background-color: ${(props) =>
         props.checked ? "#FF5656" : "white"};
    color: ${(props) =>
         props.checked ? "#FFF" : "#FF5656"};

&:hover {
        animation: scale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    @keyframes scale{
      0% {
        transform: scale(1);
      }
      100% {
        background-color: #FF5656;
        color: #fff;
        transform: scale(1.05);
      }

    } 

`;

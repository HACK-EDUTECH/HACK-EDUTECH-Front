import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import edit from "../../assets/images/edit.svg";
import { useNavigate } from "react-router-dom";

export default function Setting({ type }) {
  const navigate = useNavigate();

  const arr = ["부모님", "친구", "선생님"];
  const [checked, setChecked] = useState();

  

  const handleChecked = (e) => {
      const nodes = [...e.target.parentElement.children];
      arr.pop()
  
      const index = nodes.indexOf(e.target);
      setChecked(index);

  };

  return (
    <Wrap>
            <Header type={type} />
            <h2>누구와 <br /> 대화해 볼까요?</h2>
            <Div>
                {arr.map((a, idx) => (
                    <Btn idx={idx} checked={checked} onClick={handleChecked}>{a}</Btn>
                ))}
            </Div>

            <MadeBtn checked={checked} onClick={() => { navigate("/step4"); }}>시뮬레이션하러가기</MadeBtn>

    </Wrap>
  )
}

export const Wrap = styled.div`
  background: #F7F7F8;

  ${"h2"}{
    margin:69px 0;

    font-size: 20px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }
`

export const Btn = styled.button`
    display: flex;
    width: 80px;
    border-radius: 20px;
    border: none;
    background: #fff;
    height: 48px;
    padding: 15px 0;
    font-size: 16px;
    font-weight: 700;
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
    margin: 20px 20px 60px;
    flex-wrap: wrap;
    justify-content: center;

`;

const InpCont = styled.div`
  width: 298px;
  height: 48px;
  border-radius: 20px;
  background: #FFF;
  margin: 0 auto;
  padding: 7px 0;

  ${"input"}{
    width: 221px;
    padding: 5px 0;
    border-bottom: 1px solid black; 
    text-align: center;
  }

  ${"img"}{
    vertical-align: bottom;

  }
`;


const MadeBtn = styled.button`
    width: 160px;
    border-radius: 20px;
    height: 48px;
    padding: 15px 0;
    font-size: 16px;
    font-weight: 700;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #cf1818;
    margin: 60px;

    background-color: ${(props) =>
         props.checked ? "#FF5656" : "#F7F7F8"};
    color: ${(props) =>
         props.checked ? "#FFF" : "#F7F7F8"};

`;

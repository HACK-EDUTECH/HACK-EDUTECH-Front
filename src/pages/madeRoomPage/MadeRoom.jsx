import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import styled, { keyframes } from "styled-components";
import edit from "../../assets/images/edit.svg";
import { useParams, useNavigate } from "react-router-dom";

export default function MadeRoom({ type }) {
  const navigate = useNavigate();

  const arr = ["학교", "내 방", "운동장", "도시", "놀이공원"];
  const [checked, setChecked] = useState();
  const { chapter } = useParams();

  

  const handleChecked = (e) => {
      const nodes = [...e.target.parentElement.children];
      arr.pop()
  
      const index = nodes.indexOf(e.target);
      setChecked(index);

  };

  return (
    <Wrap>
            <Header type={type} />
            <p>아직 외워지지 않은 단어는 기억의 방으로!</p>
            <h2>나만의 기억의 방의 <br/> 이미지를 선택해주세요.</h2>
            <Div>
                {arr.map((a, idx) => (
                    <Btn idx={idx} checked={checked} onClick={handleChecked}>{a}</Btn>
                ))}
            </Div>
            <InpCont>
              <input type="text" placeholder="직접 입력해주세요!"/>
              <img src={edit} alt="" />
            </InpCont>
            <MadeBtn checked={checked} onClick={() => { navigate(`/step/${chapter}`); }}>기억의 방 생성하기</MadeBtn>

    </Wrap>
  )
}

export const Wrap = styled.div`
  background: #F7F7F8;
  ${"p"}{
    margin:69px 0 20px;
  }

  ${"h2"}{
    margin-bottom:67px;

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

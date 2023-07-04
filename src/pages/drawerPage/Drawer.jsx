import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import WordDetail from "../../components/WordDetail";
import RoomList from "../../components/RoomList";
import styled, { keyframes } from "styled-components";
import edit from "../../assets/images/edit.svg";
import mix from "../../assets/images/mix.png";

export default function Drawer({ type }) {

  const [arr, setArr]  = useState(["학교", "내 방", "운동장", "도시", "놀이공원","학교", "내 방", "운동장", "도시"]);
  const [checked, setChecked] = useState();
  const [removed, setRemoved] = useState();


  useEffect(() => {

  }, [checked])
  

  // const handleChecked = (e) => {
  //     const nodes = [...e.target.parentElement.children];
  //     arr.pop()
  
  //     const index = nodes.indexOf(e.target);
  //     setChecked(index);

  // };

  return (
    <Wrap>
            <Header type={type} />
            {checked ?<WordDetail imgArr={arr} setArr={setArr} setChecked={setChecked} setRemoved={setRemoved}/>:<RoomList arr={arr} setChecked={setChecked} removed={removed}/>}

    </Wrap>
  )
}


export const Wrap = styled.div`
  background: #F7F7F8;
`;
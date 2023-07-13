import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import WordDetail from "../../components/WordDetail";
import RoomList from "../../components/RoomList";
import styled, { keyframes } from "styled-components";
import edit from "../../assets/images/edit.svg";
import mix from "../../assets/images/mix.png";
import axios from "axios";
import { shuffle, random } from "lodash";

import { useSelector, useDispatch } from "react-redux";
import { setWord } from "../../count/counterSlice";
import { setStep1 } from "../../count/step1Slice";

import { db } from "../../api/firebaseConfig";
import { ref, child, get, set } from "firebase/database";

export default function Drawer({ type }) {
    const [word, setWord] = useState();

    const [arr, setArr] = useState([
        "학교",
        "내 방",
        "운동장",
        "도시",
        "놀이공원",
        "학교",
        "내 방",
        "운동장",
        "도시",
    ]);
    const [checked, setChecked] = useState();
    const [removed, setRemoved] = useState();
    const [idx, setIdx] = useState();

    const dbRef = ref(db);
    get(child(dbRef, `/USER_TABLE/HACK-EDUTECH-0607/CHAPTER3/STEP2/`)).then(
        (snapshot) => {
            if (snapshot.exists()) {
                setWord(snapshot.val());
            } else {
                console.log("No data available");
            }
        }
    );

    const fetchData = async () => {
        // setLoading(true)
        const answer = shuffle(word)[2];
        console.log(answer);
        const url = `/api/step3/HACK-EDUTECH-0607/chapter/3/?situation=b&partner=mom&words=pancake`;
        console.log(url);
        try {
            const response = await axios.get(url);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
        // setLoading(false)
    };
    useEffect(() => {
        console.log("eho");

        fetchData();
    }, []);

    // const handleChecked = (e) => {
    //     const nodes = [...e.target.parentElement.children];
    //     arr.pop()

    //     const index = nodes.indexOf(e.target);
    //     setChecked(index);

    // };

    return (
        <Wrap>
            <Header type={type} />
            {checked ? (
                <WordDetail
                    imgArr={arr}
                    setArr={setArr}
                    checked={checked}
                    idx={idx}
                    setChecked={setChecked}
                    setRemoved={setRemoved}
                    setWord={setWord}
                    word={word}
                />
            ) : (
                <RoomList
                    arr={arr}
                    setIdx={setIdx}
                    word={word}
                    setChecked={setChecked}
                    removed={removed}
                />
            )}
        </Wrap>
    );
}

export const Wrap = styled.div`
    background: #f7f7f8;
`;

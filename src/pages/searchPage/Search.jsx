import React from "react";
import Header from "../../components/Header";
import Question from "../../components/Question";
import styled, { keyframes } from "styled-components";

export default function Search({ type }) {
    return (
        <div>
            <Header type={type} />
            <Wrap>
                <Question />
            </Wrap>
        </div>
    );
}

export const Wrap = styled.div`
    margin: 35px 31px;
    height: 85%;
    position: relative;
`;

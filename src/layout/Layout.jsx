import React from "react";
import { Outlet } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function Layout({ children }) {
    return (
        <Wrap>
            <Outlet />
        </Wrap>
    );
}

export const Wrap = styled.div`
    width: 360px;
    height: fit-content;
    min-height: 100vh;
    display: flex;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
`;

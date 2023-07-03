import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function Bottom() {
    return (
        <ContentBox>
            <h2>학습컨텐츠</h2>
            <SearchContent></SearchContent>
        </ContentBox>
    );
}

export const ContentBox = styled.div`
    position: relative;
    /* top: 327px; */
    padding: 40px;
`;

export const SearchContent = styled.div`
    width: 280px;
    height: 178px;
    border-radius: 40px;
    background: #f4f6fa;
`;

import styled from "styled-components";

export const SquareContainer = styled.div`
    width: 70px;
    height: 70px;
    background-color: #848484;
    margin: 5px;
    transition: all .2s;
    border-radius: 0%;
    clip-path: polygon(36% 0,0 0, 0 29%, 0 57%, 0 100%, 30% 100%, 73% 100%, 100% 100%, 100% 59%, 100% 31%, 100% 0, 74% 0);
`

export const SquareX = styled.div`
    background-color: #CD493A;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
`

export const SquareO = styled.div`
    background-color: #4392F1;
    border-radius: 50%;
`

export const SquareChoise = styled.div`
    background-color: ${props => props.theme.fontColour};
    border-radius: ${props => props.figure.figure};
`
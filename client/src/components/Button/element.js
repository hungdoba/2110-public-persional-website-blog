import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ButtonRoute = styled(LinkR)`
    display: ${({ visible }) => (visible ? "block" : "none")};

    position: fixed;
    margin: 0;
    top: 30%;
    right: 45%;

    border-radius: 50px;
    padding: 20px 32px;
    background: #01bf71;
    color: #fff;
    font-size: 31px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
    background-color: black;
`;

export const Container = styled.div`
    width: 61.8vw;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    @media screen and (max-width: 1025px) {
        width: 100%;
        height: 10vw;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 20vw;
    }
`;

export const Title = styled.a`
    margin: 5%;
    color: white;
    @media screen and (max-width: 1007px) {
    }
`;

export const Website = styled(Link)`
    color: white;
    margin-left: 2vw;
    margin-right: auto;
    text-decoration: none;
`;

export const Image = styled.img`
    &:hover {
        border-bottom: 1px solid green;
        padding-bottom: 10px;
        cursor: pointer;
    }
`;

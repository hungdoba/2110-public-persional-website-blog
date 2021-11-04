import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 999;
    height: 64px;
    background-color: black;
    visibility: ${({ hide }) => (hide ? "hidden" : "visible")};
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 1025px) {
        height: 100px;
    }

    @media screen and (max-width: 767px) {
        height: 64px;
    }
`;

export const Container = styled.div`
    height: 100%;
    width: 61.8vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 1025px) {
        width: 90vw;
        justify-content: space-between;
    }

    @media screen and (max-width: 767px) {
        width: 90vw;
        justify-content: space-between;
    }
`;

export const MenuNav = styled(Link)`
    text-decoration: none;
    display: ${({ mobile }) => (mobile ? "none" : "block")};

    @media screen and (max-width: 767px) {
        display: ${({ fixed, mobile }) => (fixed || mobile ? "block" : "none")};
    }
`;

export const Menu = styled.h3`
    align-items: center;
    color: white;
    font-weight: normal;

    &:hover {
        color: orange;
        cursor: pointer;
    }

    display: ${({ pcShow }) => (pcShow ? "block" : "none")};

    @media screen and (max-width: 767px) {
        display: ${({ mobileShow }) => (mobileShow ? "block" : "none")};
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    @media screen and (max-width: 767px) {
        display: none;
    }
    &:hover > Input {
        opacity: 1;
        width: 100px;
    }
`;

export const Input = styled.input.attrs((props) => ({
    type: "text",
    placeholder: "Search .. ",
}))`
    width: 0;
    opacity: 0;
    padding: 5px;
    font-size: 16px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
`;

export const Submit = styled.button.attrs(() => ({
    type: "submit",
}))`
    border: none;
    background: transparent;
`;

export const SearchResult = styled.div`
    width: 61.8vw;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid red;
    display: ${({ show }) => (show ? "block" : "none")};
`;

export const ResultTitle = styled.div`
    font-size: 18px;
    color: green;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid red;
`;

export const Result = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const CloseButton = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row-reverse;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: lightblue;
    border: none;
    &:hover {
        cursor: pointer;
        background-color: lightgreen;
    }
`;

export const Language = styled.img`
    margin: 0;
    padding-bottom: ${({ selected }) => (selected ? "10px" : "0")};
    border-bottom: ${({ selected }) => (selected ? "1px solid white" : "none")};

    &:hover {
        border-bottom: 1px solid green;
        padding-bottom: 10px;
        cursor: pointer;
    }
`;

export const Image = styled.img`
    &:hover {
        border-bottom: 1px solid green;
        padding-bottom: 10px;
        cursor: pointer;
    }
`;

export const Website = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        border-bottom: 1px solid green;
        padding-bottom: 10px;
        cursor: pointer;
    }
`;

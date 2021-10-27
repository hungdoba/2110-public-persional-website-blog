import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.aside`
    z-index: 99;
    display: flex;
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    background-color: black;
    justify-content: flex-end;
    padding-top: 64px;

    transition: all 1s ease 0s;
    opacity: ${({ showSidebar }) => (showSidebar ? "100%" : "0")};
    top: ${({ showSidebar }) => (showSidebar ? "0" : "-200%")};
`;

export const Container = styled.div`
    height: 95%;
    width: 100%;
    margin: 5vw;
`;

export const NavBar = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
`;

export const MenuNav = styled(Link)`
    text-decoration: none;
`;

export const Menu = styled.h3`
    color: white;
    font-weight: normal;
    line-height: 2vw;
`;

export const Search = styled.div`
    width: 100%;
    height: 80%;
`;

export const SearchBar = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Result = styled.div``;

export const SearchResult = styled.div`
    width: 100%;
    height: 85%;
    overflow: auto;
    display: ${({ show }) => (show ? "block" : "none")};
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Input = styled.input.attrs((props) =>
    props.language === "ja"
        ? {
              type: "text",
              placeholder: "検索 .. ",
          }
        : props.language === "vi"
        ? {
              type: "text",
              placeholder: "Tìm kiếm.. ",
          }
        : {
              type: "text",
              placeholder: "Search.. ",
          }
)`
    width: 95%;
    padding: 5px;
    margin: 20px;
    font-size: 16px;
`;

export const Submit = styled.button.attrs(() => ({
    type: "submit",
}))`
    border: none;
    background: transparent;
`;

export const ResultTitle = styled.div`
    font-size: 18px;
    color: lightgreen;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid lightcoral;
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

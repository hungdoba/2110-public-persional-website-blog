import styled from "styled-components";

export const Background = styled.div`
    display: ${({ show }) => (show ? "flex" : "none")};
    position: fixed;
    width: 40vw;
    top: 50%;
    left: 50%;
    margin-top: -20vh;
    margin-left: -20vw;
    border-radius: 5px;
    background-color: white;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgray;
`;

export const Container = styled.form`
    width: 95%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

export const Close = styled.h1`
    margin: 1vh;
    align-self: flex-end;
    &:hover {
        cursor: pointer;
    }
`;

export const Label = styled.h3`
    margin-bottom: 1vw;
`;

export const Input = styled.input`
    margin-bottom: 2vw;
    font-size: 16px;
    padding: 5px;
`;

export const Submit = styled.button.attrs(() => ({
    type: "submit",
}))`
    border: none;
    color: white;
    padding: 1vw;
    font-size: 24px;
    margin-bottom: 2vw;
    border-radius: 5px;
    background-color: steelblue;

    &:hover {
        cursor: pointer;
        background-color: skyblue;
    }

    &:disabled {
        cursor: not-allowed;
        background-color: coral;
    }
`;

export const ErrorLogin = styled.div`
    display: ${({ show }) => (show ? "block" : "none")};
    color: red;
    align-self: center;
    margin-bottom: 2vw;
`;

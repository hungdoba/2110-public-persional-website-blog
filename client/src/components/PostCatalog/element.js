import styled from "styled-components";

export const Container = styled.div`
    width: 61.8vw;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
    overflow: hidden;

    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1025px) {
        width: 90%;
    }

    @media screen and (max-width: 767px) {
        width: 95%;
    }

    background-color: lightgrey;
`;

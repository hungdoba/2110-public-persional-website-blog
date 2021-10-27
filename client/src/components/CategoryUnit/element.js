import styled from "styled-components";

export const Container = styled.div`
    width: 49%;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    border-right: 10px solid light;
    background-color: lightgray;
    @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

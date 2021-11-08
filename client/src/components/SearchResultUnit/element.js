import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    display: flex;
    width: 49%;
    max-height: 100px;
    margin-top: 10px;
    border: 1px solid;
    border-color: #e5e8e8 #e5e8e8 #e5e8e8 #e5e8e8;
    border-radius: 3px;
    text-decoration: none;

    @media screen and (max-width: 1007px) {
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin: 15px;
    border: none;
    overflow: hidden;

    @media screen and (max-width: 1007px) {
        margin: 3vw;
        width: 20vw;
        height: 20vw;
    }
`;

export const Img = styled.img`
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 15px;
    margin: 10px 5px;
    overflow: hidden;
`;

export const ContentTitle = styled.div`
    color: darkgreen;
    font-weight: bold;
    font-size: 20px;
`;

export const ContentTime = styled.div`
    color: darkgreen;
`;

export const ContentContent = styled.p`
    width: 100%;
    color: black;
    height: 14vw;
    overflow: hidden;
    margin-right: 10px;
    margin-bottom: 10px;
    @media screen and (max-width: 1007px) {
        color: white;
    }
`;

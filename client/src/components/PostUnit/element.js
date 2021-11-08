import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 24%;
    margin: 5px 0;
    border: 1px solid;
    text-decoration: none;
    border-radius: 5px;
    overflow: hidden;
    border-bottom-right-radius: 2%;
    border-color: #fff #e5e8e8 #e5e8e8 #fff;
    margin-left: 1%;

    @media screen and (max-width: 767px) {
        width: 48%;
    }
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 35vh;
    overflow: hidden;

    @media screen and (max-width: 1025px) {
        height: 31vw;
    }

    @media screen and (max-width: 767px) {
        height: 55vw;
    }
`;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
`;

export const TitleDiv = styled.div`
    width: 100%;
    margin: 5px 0;
`;

export const Title = styled.h3`
    margin-left: 2%;
    color: black;
`;

export const ContentDiv = styled.div`
    width: 100%;
    margin: 5px 0;
`;

export const Content = styled.p`
    font-weight: normal;
    margin-left: 2%;
    color: gray;
`;

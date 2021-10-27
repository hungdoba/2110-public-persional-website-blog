import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 61.8vw;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    margin-top: 7px;
    display: block;
    border: 1px solid;
    border-color: #e5e8e8 #ccd1d1 #ccd1d1 #e5e8e8;
    border-radius: 5px;
    padding-bottom: 10px;

    @media screen and (max-width: 1025px) {
        width: 90%;
    }

    @media screen and (max-width: 767px) {
        width: 95%;
    }
`;

export const ContainerImage = styled.div`
    max-height: 40vh;
    overflow: hidden;

    @media screen and (max-width: 1025px) {
        max-height: 30vw;
    }

    @media screen and (max-width: 767px) {
        max-height: 50vw;
    }
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Title = styled.h2`
    color: green;
    margin: 20px 0 20px 5px;

    @media screen and (max-width: 1025px) {
        margin: 5px;
    }
`;

export const Content = styled.p`
    color: black;
    margin: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 1025px) {
        margin: 5px;
    }
`;

export const NavPost = styled(Link)`
    float: right;
    color: #7d3c98;
    text-decoration: none;
    margin: 5px 25px 5px 5px;
`;

export const PostTime = styled.h4`
    margin: 5px;
    color: darkblue;
    font-weight: normal;
    display: inline-block;
`;

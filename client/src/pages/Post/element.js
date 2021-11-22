import styled from "styled-components";

export const Container = styled.div`
    width: 61.8vw;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;

    @media screen and (max-width: 1025px) {
        width: 90%;
    }

    @media screen and (max-width: 767px) {
        width: 95%;
    }
`;

export const Title = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 5px;
    border-bottom: 1px solid green;
`;

export const TitleText = styled.h2`
    color: darkgreen;
    margin-right: auto;
    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`;

export const ModifyButton = styled.button`
    display: ${({ show }) => (show ? "block" : "none")};
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: lightgreen;
    margin-right: 1vw;

    &:hover {
        color: white;
        cursor: pointer;
        background-color: green;
    }
`;

export const DeleteButton = styled.button`
    display: ${({ show }) => (show ? "block" : "none")};
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: orange;

    &:hover {
        color: white;
        cursor: pointer;
        background-color: red;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding-bottom: 10px;
`;

export const Suggest = styled.div`
    width: 100%;
    border-radius: 10px;
`;

export const PostList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    background-image: linear-gradient(to right, white, #d5f5e3);
`;

export const CategoryList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Image = styled.div`
    width: 100%;
    height: 40vh;
    overflow: hidden;
    margin-bottom: 10px;

    @media screen and (max-width: 1025px) {
        height: 30vw;
    }

    @media screen and (max-width: 767px) {
        height: 50vw;
    }
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const Paragraph = styled.div`
    width: 100%;
    padding-bottom: 10px;
    overflow: auto;
`;

export const RenderArea = styled.div`
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0), #d6eaf8);

    line-height: 1.5rem;

    h1,
    h2,
    h3,
    h4 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    ul {
        margin-left: 40px;
    }

    li {
        margin-bottom: 0.5rem;
    }

    img {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

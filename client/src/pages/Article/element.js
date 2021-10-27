import styled from "styled-components";

export const Container = styled.div`
    background-color: hsl(255, 6%, 25%);
    height: 100vh;
`;

export const Header = styled.div`
    height: 10vh;
    width: 98vw;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    display: grid;
    grid-template-areas:
        "language category mainPhoto post"
        "title title smallPhoto post";
    grid-template-columns: 3fr 3fr 4fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

export const Language = styled.div`
    grid-area: language;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Category = styled.div`
    grid-area: category;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MainPhoto = styled.div`
    grid-area: mainPhoto;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SmallPhoto = styled.div`
    grid-area: smallPhoto;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.div`
    grid-area: title;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Post = styled.div`
    grid-area: post;
`;

export const InputTitle = styled.input`
    color: blue;
    width: 80%;
    border: none;
    padding: 5px;
    margin-left: 20px;
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    width: 80%;
    padding: 2vw;

    &:hover {
        background-color: lightblue;
        cursor: pointer;
    }
`;

export const ImportPhoto = styled.form`
    margin-left: 2vw;
`;

export const InputPhoto = styled.input.attrs(() => ({
    type: "file",
    accept: "image/png, image/jpeg",
}))`
    color: white;
    padding: 5px;
`;

export const ButtonConfirm = styled.button.attrs(() => ({
    type: "submit",
}))`
    padding: 5px;
`;

export const ArticleContent = styled.div`
    flex: 1;
    height: 88vh;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    overflow: hidden;
`;

export const ImportArea = styled.div`
    width: 48.5vw;
    height: 100%;
    margin: 0vw 0.5vw 1vw 1vw;
`;

export const RenderArea = styled.iframe`
    width: 48.5vw;
    height: 93.5vh;
    margin: 0vw 1vw 1vw 0.5vw;
    background-color: white;
    border-radius: 8px;
`;

export const Popup = styled.div`
    display: ${({ show }) => (show ? "flex" : "none")};
    position: fixed;
    height: 10vh;
    width: 30vw;
    top: 50%;
    left: 50%;
    margin-left: -15vw;
    margin-top: -5vh;
    align-items: center;
    justify-content: center;
    background-color: lightcoral;
    color: white;
`;

export const TitleSelect = styled.h3`
    color: lightblue;
    margin-left: 1vw;
`;

export const Select = styled.select`
    width: 50%;
    padding: 5px;
    margin-left: 5%;
`;
export const Option = styled.option``;

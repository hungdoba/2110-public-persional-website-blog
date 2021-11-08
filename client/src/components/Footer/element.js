import styled, { keyframes } from "styled-components";

export const Background = styled.div`
    background-color: black;
`;

export const Container = styled.div`
    width: 61.8vw;
    height: 90px;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    @media screen and (max-width: 1025px) {
        width: 100%;
        height: 10vw;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        height: 20vw;
    }
`;

export const Title = styled.a`
    margin: 5%;
    color: white;
    @media screen and (max-width: 1007px) {
    }
`;

export const Website = styled.a`
    color: white;
    margin-left: 2vw;
    margin-right: auto;
    text-decoration: none;
    &:hover {
        border-bottom: 1px solid green;
        padding-bottom: 10px;
        cursor: pointer;
    }
`;

const heartBeat = keyframes`
  0%
  {
    transform: scale( 0.7 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( 0.7 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( 0.7 );
  }
  100%
  {
    transform: scale( 0.7 );
  }
`;

export const AboutmeImage = styled.img`
    animation: ${heartBeat} 1s infinite;
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

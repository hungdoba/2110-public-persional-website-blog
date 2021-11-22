import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid green;

    padding: 10px 0 10px 5px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h3`
    color: black;
`;

export const NavCategory = styled(Link)`
    display: ${({ seemore }) => (seemore ? "block" : "none")};
    font-weight: normal;
    text-decoration: none;
    color: #7d3c98;
`;

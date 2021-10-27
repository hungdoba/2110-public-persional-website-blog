import React from "react";
import { Container, NavCategory, Title } from "./element";

const Category = ({ title, link, language, seemore }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <NavCategory to={link} seemore={seemore}>
                {language === "ja"
                    ? "もっと見る"
                    : language === "vi"
                    ? "Xem thêm"
                    : "See more"}
            </NavCategory>
        </Container>
    );
};

export default Category;

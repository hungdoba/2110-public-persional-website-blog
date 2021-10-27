import React from "react";
import { ButtonRoute } from "./element";

export const Button = ({ visible }) => {
    return (
        <ButtonRoute to="/blog" visible={visible}>
            Main Page
        </ButtonRoute>
    );
};

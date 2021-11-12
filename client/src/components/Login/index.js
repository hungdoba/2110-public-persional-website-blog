import axios from "axios";

import { Context } from "../../context/Context";
import { useContext, useRef, useState } from "react";
import {
    Background,
    Close,
    Container,
    ErrorLogin,
    Input,
    Label,
    Submit,
} from "./element";

const Login = ({ show, clickHandler }) => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            clickHandler();
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setShowError(true);
        }
    };

    return (
        <Background show={show}>
            <Container onSubmit={handleSubmit}>
                <Close onClick={clickHandler}>&times;</Close>
                <Label>Username</Label>
                <Input ref={userRef} placeholder="Enter Username" />
                <Label>Password</Label>
                <Input
                    ref={passwordRef}
                    type="password"
                    placeholder="Enter Password"
                />
                <ErrorLogin show={showError}>
                    Login Error. This function is still developing. It will
                    comeback soon!
                </ErrorLogin>
                <Submit disabled={isFetching}>Login</Submit>
            </Container>
        </Background>
    );
};

export default Login;

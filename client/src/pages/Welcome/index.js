import { useEffect } from "react";

const Welcome = () => {
    useEffect(() => {
        if (window.location.pathname === "/") {
            window.location.replace("/welcome.html");
        }
    }, []);
    return <></>;
};

export default Welcome;

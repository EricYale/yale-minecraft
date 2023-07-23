import React, { useCallback } from "react";
import TextContainer from "./TextContainer";

export default function HomePage() {
    const casLogin = useCallback(() => {
        const redirect = `${window.location.protocol}//${window.location.host}/result`;
        window.location.href = `https://secure.its.yale.edu/cas/login?service=${encodeURIComponent(redirect)}`;
    }, []);

    return (
        <TextContainer>
            <h1>Yale Modded Minecraft Server</h1>
            <p>Welcome to the student-run modded Minecraft server for Yale students!</p>
            <p>To become whitelisted on the server, please log in with your NetID.</p>
            <p>Questions? Contact sysadmin eric[dot]yoon[at]yale[dot]edu.</p>
            <button onClick={casLogin}>Log in with CAS</button>
        </TextContainer>
    );
}

import React, { useCallback, useEffect, useState } from "react";
import TextContainer from "./TextContainer";

export default function HomePage() {
    const [mcUsername, setMcUsername] = useState("");
    
    const casLogin = useCallback(() => {
        if(mcUsername.length < 3) return;
        window.location.href = `/api/cas?mcUsername=${mcUsername}`;
    }, [mcUsername]);

    return (
        <TextContainer>
            <h1>Yale Modded Minecraft Server</h1>
            <p>Welcome to the student-run modded Minecraft server for Yale students!</p>
            <p>To become whitelisted on the server, please log in with your NetID.</p>
            <p>Questions? Contact sysadmin eric[dot]yoon[at]yale[dot]edu.</p>
            <input
                type="text"
                value={mcUsername}
                onChange={(e) => setMcUsername(e.target.value)}
                placeholder="Your minecraft username"
            />
            <button onClick={casLogin} disabled={mcUsername.length < 3}>Log in with CAS</button>
        </TextContainer>
    );
}

import React, { useCallback } from "react";
import TextContainer from "./TextContainer";

export default function LoginCallbackPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const ticket = urlParams.get("ticket");

    const validate = useCallback(() => {
        if(!ticket) return;
        const redirect = `${window.location.protocol}//${window.location.host}/result`;
        fetch(`https://secure.its.yale.edu/cas/serviceValidate?service=${encodeURIComponent(redirect)}&ticket=${ticket}`, {
            headers: {
                "Content-Type": "text/xml",
            },
        }).then((res) => {
            console.log(res);
        })
    }, []);

    if(!ticket) {
        return (
            <TextContainer>
                <h1>Invalid URL</h1>
                <p>It looks like you tried to access this page directly. Please log in through the main page.</p>
            </TextContainer>
        );
    }

    return (
        <TextContainer>
            <h1>Yahooooo</h1>
            <p>Hi</p>
            <button onClick={validate}>Test</button>
        </TextContainer>
    );
}

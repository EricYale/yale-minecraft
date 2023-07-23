import React from "react";
import TextContainer from "./TextContainer";

export default function FailurePage() {
    return (
        <TextContainer>
            <h1>Something went wrong</h1>
            <p>We couldn't add you to the whitelist. The Minecraft server might be down.</p>
            <p>Please contact me on Discord or email me at eric[dot]yoon[at]yale[dot]edu.</p>
        </TextContainer>
    );
}

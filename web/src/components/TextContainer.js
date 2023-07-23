import React from "react";
import Creeper from "../resources/creeper.png";

export default function TextContainer({ children }) {
    return (
        <div id="text-container">
            <img src={Creeper} alt="Minecraft Creeper" id="minecraft-logo" />
            {children}
        </div>
    );
}
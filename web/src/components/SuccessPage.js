import React from "react";
import TextContainer from "./TextContainer";

export default function SuccessPage() {
    return (
        <TextContainer>
            <h1>Success!</h1>
            <p>
                Your Minecraft username has been whitelisted on the server. Here are some instructions for
                installing Forge, downloading the modpack, and logging in.
            </p>
            <ol>
                <li>
                    Download the Forge Mod Loader for 1.19.2:<br />
                    <a href="https://files.minecraftforge.net/net/minecraftforge/forge/index_1.19.2.html" target="_blank" rel="noreferrer"><button>Go to download</button></a><br />
                    (Under <b>Download Latest</b>, click <b>Installer</b>; wait 5 seconds, then press <b>Skip</b> in the top right.)
                </li>
                <li>
                    Open the .jar installer that was downloaded.<br />
                    If you're on Mac, to bypass the warning, right click the .jar file and press "Open".<br />
                    If you're on Windows, open the .jar file and click through any Windows Defender warnings.<br />
                    In the installer menu, select <b>Install client</b>.<br />
                </li>
                <li>
                    From the Minecraft Launcher, launch the game using the new profile that should have been added.<br />
                    Once the game is open, click on <b>Mods</b>, and select <b>Open mods folder</b>.
                </li>
                <li>
                    Download the modpack here:<br />
                    <a href="https://drive.google.com/drive/folders/1pjdvyftvtLqTtBfL96IX87gen8cccKYb?usp=sharing" target="_blank" rel="noreferrer"><button>Download modpack</button></a><br />
                    Extract/decompress the .zip. Copy each .jar file within the modpack into the mods folder you opened.
                </li>
                <li>
                    <b>IMPORTANT: Quit and reopen the game.</b><br />
                    Now join with server address <b>mc.yoonicode.com</b>.
                </li>
                <li>
                    HAVE FUN!!
                </li>
            </ol>
        </TextContainer>
    );
}

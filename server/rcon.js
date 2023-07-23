const fs = require("fs");
const RconClient = require("rcon-client");

let rcon;

async function initializeRcon() {
    rcon = await RconClient.Rcon.connect({
        host: process.env.RCON_IP,
        port: process.env.RCON_PORT,
        password: process.env.RCON_PASSWORD,
    });
    console.log("RCON connected");
}

async function onUserLinked(netId, username) {
    const newLine = `${netId},${username},${new Date().toISOString()}\n`;
    fs.appendFile("linked-users.csv", newLine, (err) => {
        if(err) console.error(err);
    });
    console.log("RCON response: " + await rcon.send(`/whitelist add ${username}`));
}

module.exports = {
    initializeRcon,
    onUserLinked,
};

const fs = require("fs");
const RconClient = require("rcon-client");

async function onUserLinked(netId, username, res) {
    const newLine = `${netId},${username},${new Date().toISOString()}\n`;
    fs.appendFile("linked-users.csv", newLine, (err) => {
        if(err) console.error(err);
    });

    // Create a new RCON instance every time, just in case the server disconnects suddenly
    try {
        const rcon = await RconClient.Rcon.connect({
            host: process.env.RCON_IP,
            port: process.env.RCON_PORT,
            password: process.env.RCON_PASSWORD,
        });
        console.log("RCON response: " + await rcon.send(`/whitelist add ${username}`));
        rcon.end();
    } catch(e) {
        console.log("RCON error: " + e);
        return res.redirect("/failure");
    }
    return res.redirect("/success");
}

module.exports = {
    onUserLinked,
};

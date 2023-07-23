const fs = require("fs");

function onUserLinked(netId, username) {
    const newLine = `${netId},${username},${new Date().toISOString()}\n`;
    fs.appendFile("linked-users.csv", newLine, (err) => {
        if(err) console.error(err);
    });
}

module.exports = {
    onUserLinked,
};

require("dotenv").config();
const passport = require("passport");
const express = require("express");
const session = require("express-session");
const fs = require("fs");
const path = require("path");
const cas = require("./cas");

fs.writeFile("linked-users.csv", "netId,mcUsername,timestamp\n", { flag: "wx" }, (err) => {
    if(err.code === "EEXIST") return;
    if(err) console.error(err);
    console.log("Created file linked-users.csv");
});

const app = express();
app.set("trust proxy", 1);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));
app.use(passport.initialize());
app.use(passport.session());

const apiRouter = express.Router();
apiRouter.get("/cas", cas.casLogin);
app.use("/api", apiRouter);

app.use(express.static("build"));
app.all("*", (req, res) => { // Redirect other routes to single page web app
    res.sendFile(path.resolve("build", "index.html"));
});

app.listen(80, () => {
    console.log("App listening on 80");
});

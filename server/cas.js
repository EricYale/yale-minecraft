const passport = require("passport");
const passportCas = require("passport-cas");
const rcon = require("./rcon");

passport.use(
    new passportCas.Strategy({
        version: "CAS2.0",
        ssoBaseURL: "https://secure.its.yale.edu/cas",
    }, async (profile, done) => {
        return done(null, {
            netId: profile.user,
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

function casLogin(req, res, next) {
    const mcUsername = req.query.mcUsername;
    if(!mcUsername) {
        return next(new Error("No Minecraft username specified"));
    }

    passport.authenticate("cas", (casError, user) => {
        if(casError) {
            return next(casError);
        }
        if(!user) {
            return next(new Error("No user"));
        }
        return req.logIn(user, (loginError) => {
            if(loginError) {
                return next(loginError);
            }
            return rcon.onUserLinked(user.netId, mcUsername, res);
        });
    })(req, res, next);
}

module.exports = {
    casLogin
};

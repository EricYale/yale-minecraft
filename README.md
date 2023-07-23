# yale-minecraft
Yale Minecraft Server whitelist manager

## Get started
1. Inside the `web` directory, run `npm install`
    a. You can develop the web app by running `npm start`
2. When ready to build, run `npm run build`. This will build to `server/build`
3. Inside the `server` directory, run `npm install`
4. Copy `server/.env.template` to `server/.env` and fill in the values
5. Run `npm start` to start the server
    a. The server will serve up the API as well as the built web app

## Deployment instructions
- To successfully run on port 80, you'll have to follow [these instructions](https://stackoverflow.com/questions/60372618/nodejs-listen-eacces-permission-denied-0-0-0-080)
- Use [pm2](https://pm2.keymetrics.io/) to keep your server alive

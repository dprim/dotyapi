import express from "express";
import http from "http";
import OauthClient from "oauth-v2-client";
import DACnf from "./config";


const app = express();
const httpServer = http.createServer(app);

const Api = new OauthClient({
  oauthOptions: {
    clientId: DACnf.CLIENT_ID,
    clientSecret: DACnf.CLIENT_SECRET,
    callbackUrl: DACnf.CLIENT_REDIRECT_URI,
    authUrl: DACnf.OAUTH2_AUTHORIZE_URI,
    accessTokenUrl: DACnf.OAUTH2_TOKEN_URI
  }
});

// redirect to provider authentication page
app.get("/oauth/auth-code-pkce", function (_req, res) {
  res.redirect(Api.authorizationCodePKCE.getAuthUri());
});

// extract code in the callback add request the token
app.get("/callback", async function (req, res) {
  await Api.authorizationCodePKCE.getToken({
    callbackUrl: req.originalUrl,
    onSuccess: (data: any, state?: string | undefined) => {
      return res.status(200).json(data);
    },
    onError: (error: { response: { data: any; }; }, state?: string | undefined) => {
      return res.status(500).json(error.response?.data);
    },
  });
});

httpServer.listen(3000);

export default Api as (typeof Api);

import express from "express";
import http from "http";
import DotyApiConfig, * as DAConfig from "./config";
import OauthClient from "oauth-v2-client";

const app = express();
const httpServer = http.createServer(app);

const api = new OauthClient({
  oauthOptions: {
    clientId: dotyApi.CLIENT_ID,
    clientSecret: DAConfig.CLIENT_SECRET,
    callbackUrl: DAConfig.dotyApi.CLIENT_REDIRECT_URI,
    authUrl: DAConfig.dotyApi.OAUTH2_AUTHORIZE_URI,
    accessTokenUrl: DAConfig.dotyApi.OAUTH2_TOKEN_URI
  }
});

// redirect to provider authentication page
app.get("/oauth/auth-code-pkce", function (req, res) {
  res.redirect(api.authorizationCodePKCE.getAuthUri());
});

// extract code in the callback add request the token
app.get("/callback", async function (req, res) {
  await api.authorizationCodePKCE.getToken({
    callbackUrl: req.originalUrl,
    onSuccess: (data, state?: string | undefined) => {
      return res.status(200).json(data);
    },
    onError: (error, state?: string | undefined) => {
      return res.status(500).json(error.response?.data);
    },
  });
});

httpServer.listen(3000);

import { Options } from "node-polyfill-webpack-plugin";
import ClientOAuth2 from "oauth-v2-client";
import DotyApiConfig from "./config";
import Object from "node";
//import * from "./DotyApiClient";
import { objectProperty } from "@babel/types";

export const AppConfigParams = {
  clientId: DotyApiConfig.CLIENT_ID,
  clientSecret: DotyApiConfig.CLIENT_SECRET,
  authorizationUri: DotyApiConfig.OAUTH2_AUTHORIZE_URI,
  accessTokenUri: DotyApiConfig.OAUTH2_TOKEN_URI,
  redirectUri: DotyApiConfig.CLIENT_REDIRECT_URI,
  scopes: undefined
};

/**
 * Default headers for executing OAuth 2.0 flows.
 */
declare class DotyApiClient extends ClientOAuth2 {
  //DAC: Object<string,any>;
  constructor(params: Options) {
    var APP_CONFIG = Object({}).assign(DotyApiConfig, ClientOAuth2);
    var DEFAULT_HEADERS = new Headers({
      "Accept": "application/json, application/x-www-form-urlencoded",
      "Content-Type": "application/json; charset=utf-8"
    })
    super({ ...params, ...APP_CONFIG });
  }

  return() {
    return this;
  }

  const getDotyapiUrl = (url: string, appendQuery: object) => {
    const retUrl: string = url || getUri();
    return retUrl;
  }

  const getAuthorizationURL = (): string => {
    return this.getUrl(
      AppConfigParams.authorizationUri,
      { "client_secret": AppConfigParams.clientSecret }
    );
  }
}

//export * as DAC, { getAu } from "./DotyApiClient";
export default DotyApiClient;


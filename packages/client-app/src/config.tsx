import { OauthOptions as OA2Opt } from "oauth-v2-client/lib/interfaces";
import ClientOAuth2, { OauthOptions } from "oauth-v2-client";

class __ApiConfig extends ClientOAuth2 {
  dotyApiC: any;
  DEFAULT_URL_BASE: string | undefined;
  CLIENT_ID: string = "";
  CLIENT_SECRET: string | undefined;
  CLIENT_REDIRECT_URI: string | undefined;
  OAUTH2_AUTHORIZE_URI: string = "";
  OAUTH2_TOKEN_URI: string | undefined;
  constructor(params: any) {
    super(params);
    this.dotyApiC = (): OauthOptions => new OA2Opt({
      CLIENT_ID : "bosscard",
      CLIENT_SECRET : "G2gDP0AUS84a7cr5j6Jc",
      DEFAULT_URL_BASE : 'http://localhost:3000/',
      CLIENT_REDIRECT_URI : this.DEFAULT_URL_BASE + "/auth/dotyapi/callback",
      OAUTH2_AUTHORIZE_URI : "https://admin.dotykacka.cz/client/connect",
      OAUTH2_TOKEN_URI : "https://api.dotykacka.cz/v2/signin/token"
    })
  }
  
  //this.selfApi = this.dotyApi();
}

export const apiDefConf = new __ApiConfig(null);

export default apiDefConf;

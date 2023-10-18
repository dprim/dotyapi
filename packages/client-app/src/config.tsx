import App from "./App";
import ClientOAuth2 from "oauth-v2-client";

class __ApiConfig extends ClientOAuth2{
  
  static selfApi: __ApiConfig;
  constructor (params: any) {
    super(params);
    return this;
  }

  static dotyApi = () => {
    const DEFAULT_URL_BASE = 'http://localhost:3000/'
    const CLIENT_ID = "bosscard"
    const CLIENT_SECRET = "G2gDP0AUS84a7cr5j6Jc";
    const CLIENT_REDIRECT_URI = DEFAULT_URL_BASE + "/auth/dotyapi/callback";
    const OAUTH2_AUTHORIZE_URI = "https://admin.dotykacka.cz/client/connect";
    const OAUTH2_TOKEN_URI = "https://api.dotykacka.cz/v2/signin/token";
    
    return this; 
  }
}

  const DotyApiConfig = new __ApiConfig();
  
export { dotyApi: DotyApiConfig.dotyApi }
export default DotyApiConfig;

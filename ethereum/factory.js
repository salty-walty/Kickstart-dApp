import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x72c2FA55f5730812bf9d1084172b2638408Ed830'
);

export default instance;
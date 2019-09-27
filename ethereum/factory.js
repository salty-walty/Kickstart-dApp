import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json"

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC22Ed3487ef04c2caeE45e9B8cAFd58998e447Ac'
);

export default instance;
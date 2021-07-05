import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0x973171F37f631D6dF9c5FCD813C45e6318041921";

const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
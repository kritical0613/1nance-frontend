import { InjectedConnector } from "@web3-react/injected-connector";


const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97],
});

// const infura_key = "ac2d1dc3090f44eca8aa5fa53eeba9ca";

export const connectors = {
  injected: injected
};

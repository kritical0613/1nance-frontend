export const serverUrl = "";
export const infura_endpoint = "https://rinkeby.infura.io/v3/b7f1ceb6b5804743827a20b964dcf617";
export const product_key = "c05789ae507e4276b0936e73d08216a0";
const DECIMALS = (10 ** 18);
export const ether = (wei) => {
	if (wei) {
		return (wei / DECIMALS); // 18 decimal places
	}
}
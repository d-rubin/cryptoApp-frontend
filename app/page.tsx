import {CryptoCurrencyCard} from "@/components/crypto-currency-card";
import {revalidatePath} from "next/cache";

type Coin = {
    "id": number,
    "coinId": string,
    "symbol": string,
    "name": string,
    "currentPrice": number,
    "marketCapRank": number,
    "priceChangePercentage7dInCurrency": number,
    "image"?: string
};

export default async function Home() {
    revalidatePath('/coins', "page");
    const response = await fetch(`${process.env.API_URL}/coins`);

    if (response.status !== 200) {
        return <div>There was an error fetching the coin-data: {response.status} {response.statusText}</div>;
    }

    const json: { coins: Array<Coin> } = await response.json();

    return json.coins.map((coin) => {
        return <CryptoCurrencyCard key={coin.coinId} name={coin.name} symbol={coin.symbol}
                                   currentPrice={coin.currentPrice}
                                   priceChange7d={coin.priceChangePercentage7dInCurrency} image={coin.image}/>
    })
}

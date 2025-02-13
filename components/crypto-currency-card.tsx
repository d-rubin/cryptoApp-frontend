import { ArrowDown, ArrowUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";

interface CryptoCurrencyCardProps {
  name: string
  symbol: string
  currentPrice: number
  priceChange7d: number
  image?: string
}

export function CryptoCurrencyCard({ name, symbol, currentPrice, priceChange7d, image }: CryptoCurrencyCardProps) {
  const isPriceUp = priceChange7d >= 0
  const priceChangeColor = isPriceUp ? "text-green-600" : "text-red-600"
  const numberFormatter = new Intl.NumberFormat("de-DE", { style:"currency", currency:"EUR"});
  const PriceChangeIcon = isPriceUp ? ArrowUp : ArrowDown

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{symbol.toUpperCase()}</p>
        </div>
        {image && <Image src={image} alt={""} aria-hidden width={50} height={50} />}
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-baseline">
          <div className="text-3xl font-semibold">{numberFormatter.format(currentPrice)}</div>
          <div className={`flex items-center ${priceChangeColor}`}>
            <PriceChangeIcon className="w-4 h-4 mr-1" />
            <span className="font-medium">{numberFormatter.format(priceChange7d)}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Preisänderung (7d)</p>
      </CardContent>
    </Card>
  )
}


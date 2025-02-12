import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CryptoCurrencyCardProps {
  name: string
  symbol: string
  currentPrice: number
  priceChange7d: number
}

export default function CryptoCurrencyCard({ name, symbol, currentPrice, priceChange7d }: CryptoCurrencyCardProps) {
  const isPriceUp = priceChange7d >= 0
  const priceChangeColor = isPriceUp ? "text-green-600" : "text-red-600"
  const PriceChangeIcon = isPriceUp ? ArrowUpIcon : ArrowDownIcon

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{symbol.toUpperCase()}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-baseline">
          <div className="text-3xl font-semibold">${currentPrice.toLocaleString()}</div>
          <div className={`flex items-center ${priceChangeColor}`}>
            <PriceChangeIcon className="w-4 h-4 mr-1" />
            <span className="font-medium">{Math.abs(priceChange7d).toFixed(2)}%</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">Price change (7d)</p>
      </CardContent>
    </Card>
  )
}


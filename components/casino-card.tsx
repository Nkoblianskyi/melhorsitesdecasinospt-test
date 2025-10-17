"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Link from "next/link"

interface CasinoCardProps {
  casino: Casino
  index: number
}

const badges = ["ESCOLHA DO EDITOR", "RECOMENDADO", "POPULAR", "CONFIÁVEL", "TESTADO"]

const getBadgeColor = (badge: string, isFirst: boolean) => {
  if (isFirst) {
    return "bg-yellow-500 text-black border-yellow-600"
  }

  const badgeColors: Record<string, string> = {
    "MAIS POPULAR": "bg-yellow-500 text-black border-yellow-600",
    "MELHOR ESCOLHA": "bg-blue-500 text-white border-blue-600",
    RECOMENDADO: "bg-emerald-500 text-white border-emerald-600",
    "ESCOLHA DO EDITOR": "bg-purple-500 text-white border-purple-600",
    POPULAR: "bg-orange-500 text-white border-orange-600",
    CONFIÁVEL: "bg-teal-500 text-white border-teal-600",
    TESTADO: "bg-indigo-500 text-white border-indigo-600",
  }
  return badgeColors[badge] || "bg-gray-500 text-white border-gray-600"
}

const getBorderColor = (badge: string, isFirst: boolean) => {
  if (isFirst) {
    return "border-yellow-500"
  }

  const borderColors: Record<string, string> = {
    "MAIS POPULAR": "border-yellow-500",
    "MELHOR ESCOLHA": "border-blue-500",
    RECOMENDADO: "border-emerald-500",
    "ESCOLHA DO EDITOR": "border-purple-500",
    POPULAR: "border-orange-500",
    CONFIÁVEL: "border-teal-500",
    TESTADO: "border-indigo-500",
  }
  return borderColors[badge] || "border-border"
}

export function CasinoCard({ casino, index }: CasinoCardProps) {
  const isFirstCard = casino.rank === 1

  const renderStars = (rating: number) => {
    // Convert rating from 10-point scale to 5-point scale
    const starRating = rating / 2

    return (
      <div className="flex items-center justify-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)

          return (
            <div key={i} className="relative h-4 w-4">
              {/* Empty star outline (always visible) */}
              <Star
                className="absolute inset-0 h-4 w-4 text-yellow-400 stroke-yellow-400 fill-transparent"
                strokeWidth={2}
              />
              {/* Filled star with clip-path based on rating */}
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                >
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 stroke-yellow-400" strokeWidth={2} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="relative">
      <Link
        href={casino.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer hover:translate-x-1 transition-transform duration-200"
      >
        {/* Desktop Layout */}
        <div
          className={`hidden lg:block relative border-2 ${
            casino.badge ? getBorderColor(casino.badge, isFirstCard) : "border-border"
          } bg-card`}
        >
          {casino.badge && (
            <div className="absolute left-0 top-0">
              <div
                className={`${getBadgeColor(casino.badge, isFirstCard)} font-bold py-1 px-4 uppercase tracking-widest text-xs border-r-2 border-b-2`}
              >
                {casino.badge}
              </div>
            </div>
          )}

          <div className={`p-6 pt-12 ${!casino.badge && "pt-6"}`}>
            <div className="flex items-center justify-between gap-6">
              {/* Casino Logo */}
              <div className="flex-shrink-0 w-40 h-24 border-2 border-border p-2 bg-background">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bonus */}
              <div className="flex-1 text-center border-l-2 border-r-2 border-border px-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-muted-foreground">
                  Oferta de Boas-Vindas
                </p>
                <p className="text-2xl md:text-3xl font-black font-serif">{casino.bonus}</p>
                {/* Features display */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {casino.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-1 bg-muted border border-border font-bold uppercase tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex flex-col items-center space-y-2 flex-shrink-0 border-r-2 border-border pr-6">
                <span className="text-3xl font-black text-white">{casino.rating}</span>
                {renderStars(casino.rating)}
                <p className="text-xs text-muted-foreground font-medium">{formatVotes(casino.reviews)} votos</p>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 flex-shrink-0 w-44">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wide border-2 border-green-700 shadow-lg">
                  Obter Bónus
                </Button>
                <p className="text-xs text-muted-foreground text-center font-medium">18+ • Jogo Seguro</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-muted border-t-2 border-border px-6 py-2">
            <p className="text-xs text-muted-foreground text-center">
              Aplicam-se termos e condições. Jogue com responsabilidade. O jogo pode causar dependência.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div
          className={`lg:hidden relative border-2 ${
            casino.badge ? getBorderColor(casino.badge, isFirstCard) : "border-border"
          } bg-card mb-4`}
        >
          {casino.badge && (
            <div className="absolute left-0 top-0">
              <div
                className={`${getBadgeColor(casino.badge, isFirstCard)} font-bold py-1 px-3 uppercase tracking-wide text-[10px] border-r-2 border-b-2`}
              >
                {casino.badge}
              </div>
            </div>
          )}

          <div className={`p-4 pt-10 ${!casino.badge && "pt-4"}`}>
            {/* Logo and Bonus */}
            <div className="grid grid-cols-2 gap-4 items-center mb-4">
              <div className="border-2 border-border p-2 bg-background">
                <img
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="h-16 w-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="text-xs uppercase font-bold mb-1 text-muted-foreground">Bónus</div>
                <div className="text-xl font-bold leading-tight">{casino.bonus}</div>
              </div>
            </div>

            {/* Features display */}
            <div className="flex flex-wrap gap-1 mb-3">
              {casino.features.map((feature, idx) => (
                <span key={idx} className="text-[8px] px-1.5 py-0.5 bg-muted border border-border font-bold uppercase">
                  {feature}
                </span>
              ))}
            </div>

            {/* Rating and CTA */}
            <div className="grid grid-cols-3 gap-2 items-center border-t-2 border-border pt-4">
              <div className="text-center">
                <div className="text-2xl font-black text-white">{casino.rating}</div>
                <div className="text-[8px] text-muted-foreground font-bold uppercase">Score</div>
              </div>
              <div className="text-center">
                {renderStars(casino.rating)}
                <div className="text-[10px] text-muted-foreground mt-1">({formatVotes(casino.reviews)})</div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase py-4">
                Obter
              </Button>
            </div>
          </div>

          <div className="bg-muted border-t-2 border-border px-2 py-2">
            <p className="text-[10px] text-muted-foreground text-center">18+ | Jogo seguro | T&C aplicam-se</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

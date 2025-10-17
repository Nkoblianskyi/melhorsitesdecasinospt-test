"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  const starRating = topCasino.rating / 2

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const fillPercentage = Math.min(Math.max((starRating - index) * 100, 0), 100)
      return (
        <div key={index} className="relative inline-block">
          <Star className="h-5 w-5 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white border-4 border-black max-w-md p-0 overflow-hidden">
        <div className="bg-black px-6 py-4 text-center border-b-4 border-black">
          <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-wide">
            Oferta Especial Exclusiva
          </h3>
        </div>

        <div className="relative">
          <div className="cursor-pointer hover:opacity-95 transition-opacity duration-200" onClick={handleModalClick}>
            <div className="bg-white p-6 border-b-2 border-gray-300">
              <div className="flex justify-center mb-4">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  className="h-16 w-auto object-contain"
                />
              </div>

              <div className="flex justify-center items-center space-x-1">
                {renderStars()}
                <span className="text-lg font-bold text-black ml-2">{topCasino.rating}/10</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-b-2 border-gray-300">
              <div className="mb-4 p-4 border-2 border-black bg-white">
                <p className="text-sm text-gray-600 mb-1 text-center font-semibold uppercase tracking-wide">Bónus:</p>
                <p className="text-3xl text-black font-serif font-bold text-center">{topCasino.bonus}</p>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-6 border-2 border-black shadow-lg uppercase tracking-wide">
                OBTER BÓNUS AGORA
              </Button>

              <p className="text-xs text-gray-600 mt-4 text-center border-t-2 border-gray-300 pt-3">
                Oferta limitada. Termos e condições aplicam-se.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

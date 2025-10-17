"use client"

import Link from "next/link"
import { Newspaper } from "lucide-react"
import Image from "next/image"

export function Header() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("pt-PT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <header className="fixed top-0 w-full bg-background border-b-4 border-primary z-50">
      {/* Main masthead */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: SRIJ Link */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Image src="/srij.svg" alt="SRIJ logo" width={48} height={48} />
            </Link>
          </div>

          {/* Center: Logo with name - reduced size and simplified to one line */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/favicon.ico" alt="melhorsitesdecasinospt logo" width={32} height={32} />
            <h1 className="text-sm md:text-2xl lg:text-3xl font-black font-serif tracking-tight text-foreground uppercase">
              melhorsitesdecasinospt
            </h1>
          </Link>

          {/* Right: 18+ indicator */}
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary bg-primary/10">
            <span className="text-sm md:text-base font-bold text-primary">18+</span>
          </div>
        </div>
      </div>
    </header>
  )
}

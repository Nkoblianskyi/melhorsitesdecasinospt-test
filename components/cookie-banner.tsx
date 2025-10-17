"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-border p-3 md:p-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
        <div className="text-xs md:text-sm text-foreground">
          <p className="font-medium">
            Utilizamos cookies para melhorar a sua experiência no nosso site. Ao continuar a navegar, aceita a nossa{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline font-bold">
              política de cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={acceptCookies}
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs md:text-sm px-4 py-2 border-2 border-border rounded-none"
          >
            Aceitar Cookies
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-foreground hover:text-primary border-2 border-border hover:bg-muted rounded-none"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

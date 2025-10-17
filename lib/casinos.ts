export interface Casino {
  id: number
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  badge?: string
  reviews: number
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    id: 1,
    rank: 1,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.8,
    bonus: "Aposta Grátis de Atualmente",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    badge: "MAIS POPULAR",
    isTopChoice: true,
    url: "https://www.luckia.pt/",
    reviews: 6874,
  },
  {
    id: 2,
    rank: 2,
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.7,
    bonus: "300% até 30€ em Aposta Grátis",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    badge: "MELHOR ESCOLHA",
    url: "https://www.solverde.pt/",
    reviews: 6847,
  },
  {
    id: 3,
    rank: 3,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.5,
    bonus: "100% Até 20€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    badge: "RECOMENDADO",
    url: "https://www.betclic.pt/",
    reviews: 8732,
  },
  {
    id: 4,
    rank: 4,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.4,
    bonus: "Aposta Grátis de 2€ Atualmente",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    url: "https://www.casinoportugal.pt/",
    reviews: 3254,
  },
  {
    id: 5,
    rank: 5,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.1,
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    url: "https://www.lebull.pt/",
    reviews: 1572,
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}

export type AllOffersType = CityOffer[]

export type CityOffer = [
  string, OfferType[]
]

export type OfferType = {
  city: string,
  id: string,
  name: string,
  premium: boolean,
  type: string,
  rating: number,
  features: string[],
  price: number,
  inside: string[],
  host: string,
  description: string
}

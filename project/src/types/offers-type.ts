
export type CityOffer = {
  id: string,
  title: string,
  offers: ApartmentOffer[]
}

export type ApartmentOffer = {
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

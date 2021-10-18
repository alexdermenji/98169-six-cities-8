
export type CityOffer = {
  id: string,
  title: string,
  offers: ApartmentOffer[]
}

type Features = {code: string, title: string}

export type ApartmentOffer = {
  city: string,
  id: string,
  name: string,
  premium: boolean,
  type: string,
  rating: number,
  features: Features[],
  price: number,
  inside: string[],
  host: string,
  description: string
}

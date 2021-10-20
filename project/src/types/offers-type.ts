
export type CityOffer = {
  id: string,
  map: MapCoords,
  title: string,
  offers: ApartmentOffer[]
}
export type MapCoords = {
  lat: number,
  lng: number,
  zoom: 10,
}
export type Points = {id: string, lng: number, lat: number}
type Features = {code: string, title: string}

export type ReviewType = {
  id: string,
  name: string,
  rating: string,
  review: string,
  date: string,
}

export type ApartmentOffer = {
  city: string,
  points: Points
  id: string,
  reviews: ReviewType[],
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

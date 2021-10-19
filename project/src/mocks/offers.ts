import { CityOffer } from '../types/offers-type';

export const allOffers: CityOffer[] = [
  {
    id: 'paris',
    title: 'paris',
    map: {
      lng: 4.9041,
      lat: 52.3676,
      zoom: 10,
    },
    offers: [
      {
        city: 'amsterdam',
        points: {
          id: 'id001',
          lng: 4.85309666406198,
          lat: 52.3909553943508,
        },
        id: 'id001',
        reviews: [
          {
            name: 'Max',
            rating: '80',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: 'April 2019'},
        ],
        name: 'Beautiful & luxurious studio at great location',
        premium: true,
        type: 'house',
        rating: 4.8,
        features: [{code: 'entire', title: 'apartment' }, {code: 'bedrooms', title: '3 bedrooms'}, {code:'adults', title: 'Max 4 adults'}],
        price: 120,
        inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cofee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
        host: 'Angelina',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      },
      {
        city: 'amsterdam',
        points: {
          id: 'id002',
          lng: 4.85309666406198,
          lat: 52.369553943508,
        },
        id: 'id002',
        reviews: [
          {
            name: 'Max',
            rating: '70',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: 'April 2019'},
        ],
        name: 'Beautiful & luxurious studio at great location',
        premium: false,
        type: 'apartment',
        rating: 4.8,
        features: [{code: 'entire', title: 'apartment' }, {code: 'bedrooms', title: '3 bedrooms'}, {code:'adults', title: 'Max 4 adults'}],
        price: 130,
        inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cofee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
        host: 'Angelina',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      },
    ],
  },
  {
    id: 'amssterdam',
    title: 'amsterdam',
    map: {
      lat: 40.835292,
      lng: -73.916236,
      zoom: 10,
    },
    offers: [
      {
        city: 'amsterdam',
        points: {
          id: 'id003',
          lng: 4.929309666406198,
          lat: 52.3909553943508,
        },
        id: 'id003',
        reviews: [
          {
            name: 'Max',
            rating: '90',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: 'April 2019'},
        ],
        name: 'Beautiful & luxurious studio at great location',
        premium: true,
        type: 'house',
        rating: 4.8,
        features: [{code: 'entire', title: 'apartment' }, {code: 'bedrooms', title: '3 bedrooms'}, {code:'adults', title: 'Max 4 adults'}],
        price: 140,
        inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cofee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
        host: 'Angelina',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      },
      {
        city: 'amsterdam',
        points: {
          id: 'id004',
          lng: 4.939309666406198,
          lat: 52.3809553943508,
        },
        id: 'id004',
        reviews: [
          {
            name: 'Max',
            rating: '50',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: 'April 2019'},
        ],
        name: 'Beautiful & luxurious studio at great location',
        premium: false,
        type: 'apartment',
        rating: 4.8,
        features: [{code: 'entire', title: 'apartment' }, {code: 'bedrooms', title: '3 bedrooms'}, {code:'adults', title: 'Max 4 adults'}],
        price: 170,
        inside: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Cofee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
        host: 'Angelina',
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
      },
    ],
  },
];

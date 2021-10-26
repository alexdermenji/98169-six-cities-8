import { CityOffer } from '../types/offers-type';

export const allOffers: CityOffer[] = [
  {
    id: 'Paris',
    title: 'Paris',
    map: {
      lng: 4.9041,
      lat: 52.3676,
      zoom: 10,
    },
    offers: [
      {
        city: 'paris',
        points: {
          id: 'id001',
          lng: 4.85309666406198,
          lat: 52.3909553943508,
        },
        id: 'id001',
        reviews: [
          {
            id: 'review01',
            name: 'Max',
            rating: '80',
            review: 'Perfect location for exploring the city. The room was big enough for two travellers. Bed was super comfy, although the pillows could do with replacing (lumpy chopped foam filling) Nice touch having tea and coffee available in the kitchen for guests. ',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review02',
            name: 'Alex',
            rating: '70',
            review: 'We had a great time at Marcus’ place. very convenient house equipped with everything you need. It’s at a great location, very easy to get around with bus stops, train station.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review03',
            name: 'Den',
            rating: '50',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review04',
            name: 'John',
            rating: '40',
            review: 'Had a really great stay at Marcus home. Really convenient location for access to all of the tourist hotspots and a huge comfy bed! Would stay here again.',
            date: new Date().toISOString().split('T')[0]},
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
        city: 'paris',
        points: {
          id: 'id002',
          lng: 4.85309666406198,
          lat: 52.369553943508,
        },
        id: 'id002',
        reviews: [
          {
            id: 'review02',
            name: 'Alex',
            rating: '70',
            review: 'We had a great time at Marcus’ place. very convenient house equipped with everything you need. It’s at a great location, very easy to get around with bus stops, train station.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review03',
            name: 'Den',
            rating: '50',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: new Date().toISOString().split('T')[0]},
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
    id: 'Amsterdam',
    title: 'Amsterdam',
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
            id: 'review02',
            name: 'Alex',
            rating: '70',
            review: 'We had a great time at Marcus’ place. very convenient house equipped with everything you need. It’s at a great location, very easy to get around with bus stops, train station.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review03',
            name: 'Den',
            rating: '50',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review04',
            name: 'John',
            rating: '40',
            review: 'Had a really great stay at Marcus home. Really convenient location for access to all of the tourist hotspots and a huge comfy bed! Would stay here again.',
            date: new Date().toISOString().split('T')[0]},
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
            id: 'review01',
            name: 'Max',
            rating: '80',
            review: 'Perfect location for exploring the city. The room was big enough for two travellers. Bed was super comfy, although the pillows could do with replacing (lumpy chopped foam filling) Nice touch having tea and coffee available in the kitchen for guests. ',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review02',
            name: 'Alex',
            rating: '70',
            review: 'We had a great time at Marcus’ place. very convenient house equipped with everything you need. It’s at a great location, very easy to get around with bus stops, train station.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review03',
            name: 'Den',
            rating: '50',
            review: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            date: new Date().toISOString().split('T')[0]},
          {
            id: 'review04',
            name: 'John',
            rating: '40',
            review: 'Had a really great stay at Marcus home. Really convenient location for access to all of the tourist hotspots and a huge comfy bed! Would stay here again.',
            date: new Date().toISOString().split('T')[0]},
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



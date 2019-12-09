import {UserWebEntity} from '../../Entities/User-web-entity';
export let SHOPS=[
  {
    id: 0,
    name: "shop_1",
    description: "shop 1 shop 1",
    logo: "https://imgbb/shop1.png",
    address: {
      zipCode:2,
      addressLine:"rue 10",
      city:"marrakech",
      country:"maroc"
    },
    coordinates: {
      latitude:20.3,
      longitude:30
    }
  },
  {
    id: 1,
    name: "shop_2",
    description: "shop 2 shop 2",
    logo: "https://imgbb/shop2.png",
    address: {
      zipCode:"125",
      addressLine:"rue 120",
      city:"marrakech",
      country:"maroc"
    },
    coordinates: {
      latitude:18,
      longitude:35
    }
  }
];
export let USERS=[{
  id: 0,
  firstName: "lhoussaine",
  lastName: "ouarhou",
  email: "em@gmail.com",
  address: {
    zipCode:"123",
    addressLine:"rue 12",
    city:"marrakech",
    country:"maroc"
  },
  coordinates: {
    latitude:12.3,
    longitude:35
  },
  likedShops:[{
    id: 0,
    name: "shop_1",
    description: "shop 1 shop 1",
    logo: "https://imgbb/shop1.png",
    address: {
      zipCode:"2",
      addressLine:"rue 10",
      city:"marrakech",
      country:"maroc"
    },
    coordinates: {
      latitude:20.3,
      longitude:30
    }
  }],
  dislikedShops:[
    {
      id: 1,
      name: "shop_2",
      description: "shop 2 shop 2",
      logo: "https://imgbb/shop2.png",
      address: {
        zipCode:"125",
        addressLine:"rue 120",
        city:"marrakech",
        country:"maroc"
      },
      coordinates: {
        latitude:18,
        longitude:35
      }
    }
  ]
},
  {
    id: 1,
    firstName: "lhoussaine",
    lastName: "ouarhou",
    email: "lhou@gmail.com",
    address: {
      zipCode:"12",
      addressLine:"rue 6",
      city:"Agadir",
      country:"maroc"
    },
    coordinates: {
      latitude:15.3,
      longitude:40
    },
    dislikedShops:[{
      id: 0,
      name: "shop_1",
      description: "shop 1 shop 1",
      logo: "https://imgbb/shop1.png",
      address: {
        zipCode:"2",
        addressLine:"rue 10",
        city:"marrakech",
        country:"maroc"
      },
      coordinates: {
        latitude:20.3,
        longitude:30
      }
    }],
    likedShops:[
      {
        id: 1,
        name: "shop_2",
        description: "shop 2 shop 2",
        logo: "https://imgbb/shop2.png",
        address: {
          zipCode:"125",
          addressLine:"rue 120",
          city:"marrakech",
          country:"maroc"
        },
        coordinates: {
          latitude:18,
          longitude:35
        }
      }
    ]
  }
];
export const TOKEN1="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbUBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlzcyI6Ii9sb2dpbiIsImV4cCI6MTU3NTc5NzcwN30.jhxEOtc8H44bx1l0RkXN_LmiUtMyyVEUDG3-HMypZc8";
export const TOKEN2="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsaG91QGdtYWlsLmNvbSIsInJvbGVzIjpbIkFETUlOIl0sImlzcyI6Ii9sb2dpbiIsImV4cCI6MTU3NTgwNTQ2OH0.2Gg02Ly4g86A_NJVFJCZRS76ASWhusERig7duhOqxgE"

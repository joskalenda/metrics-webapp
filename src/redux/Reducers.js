import Africa from '../assets/Africa.png';
import Asia from '../assets/asia.png';
import Australia from '../assets/Oceania.svg';
import Europe from '../assets/europe.png';
import Northamerica from '../assets/northamerica.png';
import Southamerica from '../assets/southamerica.png';

const continentState = [
  {
    name: 'Africa',
    classname: 'Africa',
    map: Africa,
    number: 54,
  },
  {
    name: 'Asia',
    classname: 'Asia',
    map: Asia,
    number: 54,
  },
  {
    name: 'Oceania',
    classname: 'Australia-Oceania',
    map: Australia,
    number: 25,
  },
  {
    name: 'Europe',
    classname: 'Europe',
    map: Europe,
    number: 27,
  },
  {
    name: 'North America',
    classname: 'North-America',
    map: Northamerica,
    number: 3,
  },
  {
    name: 'South America',
    classname: 'South-America',
    map: Southamerica,
    number: 12,
  },
];

export const ContinentReducer = (state = continentState) => state;

const GET_STATS = 'covid/GET_STATS';
const initialState = [];

export const GetStates = (payload) => ({
  type: GET_STATS,
  payload,
});

export const StatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

// export initialState

// const continentState = [
//   {
//     name: 'Africa',
//     classname: 'Africa',
//     map: Africa,
//     number: 54,
//   },
//   {
  // create array for countries
//     name: 'Asia',
//     classname: 'Asia',
//     map: Asia,
//     number: 54,
//   },
//   {
//     name: 'Oceania',
//     classname: 'Australia-Oceania',
//     map: Australia,
//     number: 25,
//   },
//   {
//     name: 'Europe',
//     classname: 'Europe',
//     map: Europe,
//     number: 27,
//   },
//   {
//     name: 'North America',
//     classname: 'North-America',
//     map: Northamerica,
//     number: 3,
//   },
//   {
//     name: 'South America',
//     classname: 'South-America',
//     map: Southamerica,
//     number: 12,
//   },
// ];
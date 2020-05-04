import arsenalKit from 'assets/images/kits/arsenal.png';
import liverpoolKit from 'assets/images/kits/liverpool.png';
import manCityKit from 'assets/images/kits/man-city.png';
import manUtdKit from 'assets/images/kits/man-utd.png';
import tottenhamKit from 'assets/images/kits/tottenham.png';
import chelseaKit from 'assets/images/kits/chelsea.png';

const initialState = {
  players: [
    {
      id: 1,
      name: 'David Luiz',
      team: {
        id: 1,
        name: 'arsenal',
        short: 'ARS',
        kit: arsenalKit,
      },
      position: 'def',
    },
    {
      id: 2,
      name: 'Salah',
      team: {
        id: 2,
        name: 'Liverpool',
        short: 'LIV',
        kit: liverpoolKit,
      },
      position: 'mid',
    },
    {
      id: 3,
      name: 'Mahrez',
      team: {
        id: 3,
        name: 'Man City',
        short: 'MCI',
        kit: manCityKit,
      },
      position: 'mid',
    },
    {
      id: 4,
      name: 'Rashford',
      team: {
        id: 4,
        name: 'Man Utd',
        short: 'MUN',
        kit: manUtdKit,
      },
      position: 'fwd',
    },
    {
      id: 5,
      name: 'Aurier',
      team: {
        id: 5,
        name: 'Tottenham',
        short: 'TOT',
        kit: tottenhamKit,
      },
      position: 'def',
    },
    {
      id: 6,
      name: 'Kepa',
      team: {
        id: 6,
        name: 'Chelsea',
        short: 'CHE',
        kit: chelseaKit,
      },
      position: 'gkp',
    },
    {
      id: 7,
      name: 'Aubameyang',
      team: {
        id: 1,
        name: 'arsenal',
        short: 'ARS',
        kit: arsenalKit,
      },
      position: 'fwd',
    },
    {
      id: 8,
      name: 'Williams',
      team: {
        id: 4,
        name: 'Man Utd',
        short: 'MUN',
        kit: manUtdKit,
      },
      position: 'def',
    },
    {
      id: 9,
      name: 'Pepe',
      team: {
        id: 1,
        name: 'arsenal',
        short: 'ARS',
        kit: arsenalKit,
      },
      position: 'mid',
    },
    {
      id: 10,
      name: 'Alisson',
      team: {
        id: 2,
        name: 'Liverpool',
        short: 'LIV',
        kit: liverpoolKit,
      },
      position: 'gkp',
    },
    {
      id: 11,
      name: 'Ederson',
      team: {
        id: 3,
        name: 'Man City',
        short: 'MCI',
        kit: manCityKit,
      },
      position: 'gkp',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;

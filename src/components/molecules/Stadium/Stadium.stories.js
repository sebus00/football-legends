import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Stadium from './Stadium';

const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  background: ${({ theme }) => theme.color.primary};
  padding: 30px;
  margin-left: 150px;

  .grid-item {
    &:hover {
      z-index: 1;
    }
    :nth-child(3n + 1) {
      transform-origin: left;
    }
    :nth-child(3n + 2) {
      transform-origin: center;
    }
    :nth-child(3n) {
      transform-origin: right;
    }
    :nth-child(1) {
      transform-origin: left top;
    }
    :nth-child(2) {
      transform-origin: center top;
    }
    :nth-child(3) {
      transform-origin: right top;
    }
  }
`;

const id = 1;
const name = 'Emirates Stadium';
const team = {
  badge: 'https://football-legends-bucket.s3.eu-central-1.amazonaws.com/badges/arsenal.png',
};
const capacity = 60260;
const address = 'Hornsey Rd, London N7 7AJ';
const photo =
  'https://football-legends-bucket.s3.eu-central-1.amazonaws.com/stadium-photos/emirates-stadium.jpg';

storiesOf('Molecules/Stadium', module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add('Grid', () => (
    <>
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
      <Stadium
        id={id}
        name={name}
        team={team}
        capacity={capacity}
        address={address}
        photo={photo}
      />
    </>
  ));

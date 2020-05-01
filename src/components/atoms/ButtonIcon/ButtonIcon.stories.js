import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import playersIcon from 'assets/icons/players.svg';
import clubsIcon from 'assets/icons/clubs.svg';
import coachesIcon from 'assets/icons/coaches.svg';
import stadiumsIcon from 'assets/icons/stadiums.svg';
import ButtonIcon from './ButtonIcon';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.color.primary};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add('Players', () => <ButtonIcon icon={playersIcon} />)
  .add('Clubs', () => <ButtonIcon icon={clubsIcon} />)
  .add('Coaches', () => <ButtonIcon icon={coachesIcon} />)
  .add('Stadiums', () => <ButtonIcon icon={stadiumsIcon} />);

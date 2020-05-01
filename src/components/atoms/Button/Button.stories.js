import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.color.primary};
`;

storiesOf('Atoms/Button', module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add('Primary', () => <Button>Wyślij</Button>);

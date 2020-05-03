import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import selectCriteria from 'data/selectCriteria';
import Select from './Select';

const Background = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.color.primary};
`;

storiesOf('Atoms/Select', module)
  .addDecorator(story => <Background>{story()}</Background>)
  .add('Default', () => <Select items={selectCriteria} />);

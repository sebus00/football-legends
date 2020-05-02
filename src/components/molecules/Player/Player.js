import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Draggable from 'providers/DnD/Draggable';
import emptyKit from 'assets/images/kits/empty.png';

const StyledPlayer = styled.div`
  background-image: ${({ kit }) => (kit ? `url(${kit})` : `url(${emptyKit})`)};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  height: 65px;
  width: 70px;
  margin: 0;
`;

const Player = ({ kit, name, type, isDropped }) => (
  <Draggable
    kit={kit}
    name={name}
    type={type}
    isDropped={isDropped}
    render={({ ref, style }) => <StyledPlayer kit={kit} ref={ref} style={style} />}
  />
);

Player.propTypes = {
  kit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isDropped: PropTypes.bool.isRequired,
};

export default Player;

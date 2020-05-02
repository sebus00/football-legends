import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Droppable from 'providers/DnD/Droppable';
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

const Position = ({ accept, lastDroppedItem, onDrop }) => (
  <Droppable
    accept={accept}
    lastDroppedItem={lastDroppedItem}
    onDrop={onDrop}
    render={({ ref, kit, style }) => <StyledPlayer ref={ref} kit={kit} style={style} />}
  />
);

Position.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  lastDroppedItem: PropTypes.objectOf(PropTypes.string),
  onDrop: PropTypes.func.isRequired,
};

Position.defaultProps = {
  accept: [],
  lastDroppedItem: null,
};

export default Position;

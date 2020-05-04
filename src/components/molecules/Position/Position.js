import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Droppable from 'providers/DnD/Droppable';
import emptyKit from 'assets/images/kits/empty.png';

const StyledPlayerWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding: 15px 30px;

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 128, 0, 0.6);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    z-index: -1;
    display: ${({ canDrop }) => (canDrop ? 'block' : 'none')};
  }
`;

const StyledPlayerKit = styled.div`
  background-image: ${({ kit }) => (kit ? `url(${kit})` : `url(${emptyKit})`)};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  height: 90px;
  width: 70px;
`;

const Position = ({ accept, lastDroppedItem, onDrop }) => (
  <Droppable
    accept={accept}
    lastDroppedItem={lastDroppedItem}
    onDrop={onDrop}
    render={({ ref, image, isActive, canDrop }) => (
      <StyledPlayerWrapper ref={ref} isActive={isActive} canDrop={canDrop}>
        <StyledPlayerKit kit={image}></StyledPlayerKit>
      </StyledPlayerWrapper>
    )}
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

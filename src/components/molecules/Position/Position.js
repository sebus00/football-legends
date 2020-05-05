import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Droppable from 'providers/DnD/Droppable';
import emptyKit from 'assets/images/empty-kit.png';

const StyledPlayerWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 125px;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ::after {
    content: '';
    width: 140%;
    height: 130%;
    position: absolute;
    top: -15%;
    left: -20%;
    background-color: ${({ isActive }) =>
      isActive ? 'rgba(0, 128, 0, 0.8)' : 'rgba(0, 128, 0, 0.5)'};
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
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
  width: 100%;
`;

const StyledPlayerName = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 2px 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  color: red;
  border: 3px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border-radius: 100%;
  height: 27px;
  width: 27px;
  background: ${({ theme }) => theme.color.white};
  cursor: pointer;
  opacity: 0.7;

  :focus {
    outline: none;
  }

  :hover {
    transform: scale(1.1);
  }
`;

const Position = ({ accept, lastDroppedItem, onDrop, onRemove }) => {
  const [isCloseVisible, setCloseVisible] = useState(false);
  return (
    <Droppable
      accept={accept}
      onDrop={onDrop}
      render={({ ref, isActive, canDrop }) => (
        <StyledPlayerWrapper
          ref={ref}
          isActive={isActive}
          canDrop={canDrop}
          onMouseEnter={() => {
            setCloseVisible(true);
          }}
          onMouseLeave={() => {
            setCloseVisible(false);
          }}
        >
          <StyledPlayerKit kit={lastDroppedItem && lastDroppedItem.image}></StyledPlayerKit>
          {lastDroppedItem && <StyledPlayerName>{lastDroppedItem.name}</StyledPlayerName>}
          {isCloseVisible && !!lastDroppedItem && (
            <StyledCloseButton
              onClick={() => {
                onRemove(lastDroppedItem.id);
              }}
            >
              <i className="fas fa-times" />
            </StyledCloseButton>
          )}
        </StyledPlayerWrapper>
      )}
    />
  );
};

Position.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  lastDroppedItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
  }),
  onDrop: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

Position.defaultProps = {
  accept: [],
  lastDroppedItem: null,
};

export default Position;

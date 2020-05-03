import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Draggable from 'providers/DnD/Draggable';
import emptyKit from 'assets/images/kits/empty.png';

const StyledPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 55px;
  padding: 4px;
  opacity: ${({ isUsed }) => (isUsed ? '.4' : '1')};
`;

const StyledPlayerKit = styled.div`
  background-image: ${({ kit }) => (kit ? `url(${kit})` : `url(${emptyKit})`)};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  height: calc(100% - 5px);
  width: 40px;
  cursor: move;
`;

const StyledPlayerInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.fontSize.xs};
  padding: 7px;
`;

const StyledPlayerName = styled.div``;

const StyledPlayerTeam = styled.div`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: 15px;
`;

const StyledPlayerPosition = styled.div`
  text-transform: uppercase;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Player = ({ name, team, position, isDropped }) => (
  <Draggable
    name={name}
    image={team.kit}
    type={position}
    render={({ ref, isDragging }) => (
      <StyledPlayerWrapper isUsed={isDropped || isDragging}>
        <StyledPlayerKit kit={team.kit} ref={ref} />
        <StyledPlayerInfo>
          <StyledPlayerName>{name}</StyledPlayerName>
          <StyledRow>
            <StyledPlayerTeam>{team.short}</StyledPlayerTeam>
            <StyledPlayerPosition>{position}</StyledPlayerPosition>
          </StyledRow>
        </StyledPlayerInfo>
      </StyledPlayerWrapper>
    )}
  />
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
  team: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    short: PropTypes.string,
    kit: PropTypes.string,
  }).isRequired,
  position: PropTypes.string.isRequired,
  isDropped: PropTypes.bool.isRequired,
};

export default Player;

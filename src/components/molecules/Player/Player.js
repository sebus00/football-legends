import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Draggable from 'providers/DnD/Draggable';
import emptyKit from 'assets/images/empty-kit.png';

const StyledPlayerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

const Player = ({ id, firstName, lastName, team, position, isDropped }) => (
  <Draggable
    id={id}
    name={`${lastName} ${firstName[0]}.`}
    image={team.kit}
    type={position}
    render={({ ref, isDragging }) => (
      <StyledPlayerWrapper ref={ref} isUsed={isDropped || isDragging}>
        <StyledPlayerKit kit={team.kit} />
        <StyledPlayerInfo>
          <StyledPlayerName>{`${lastName} ${firstName[0]}.`}</StyledPlayerName>
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
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  team: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    short: PropTypes.string,
    kit: PropTypes.string,
  }).isRequired,
  position: PropTypes.string.isRequired,
  isDropped: PropTypes.bool.isRequired,
};

export default Player;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'store/actions';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import DragDropCustomProvider from 'providers/DnD/DragDropCustomProvider';
import PlayersPickerPanel from 'components/organisms/PlayersPickerPanel/PlayersPickerPanel';
import Pitch from 'components/organisms/Pitch/Pitch';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
`;

const StyledPlayersColumn = styled.div`
  margin-right: 50px;
  flex: 0 0 200px;
  height: 720px;
`;

const StyledPitchWrapper = styled.div`
  padding-top: 20px;
  flex: 0 0 900px;
  max-width: 900px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const PlayersPage = ({ players, fetchPlayers, teams, fetchTeams, positions }) => {
  const positionsFormation =
    positions.length > 0
      ? [
          positions[0].id,
          positions[1].id,
          positions[1].id,
          positions[1].id,
          positions[1].id,
          positions[2].id,
          positions[2].id,
          positions[2].id,
          positions[3].id,
          positions[3].id,
          positions[3].id,
        ]
      : [];

  useEffect(() => {
    if (players.length === 0) fetchPlayers();
    if (teams.length === 0) fetchTeams();
  }, []);

  return (
    <UserTemplate>
      <DragDropCustomProvider
        droppableItems={positionsFormation}
        render={({ droppableItemsState, isDropped, handleDrop, handleRemove }) => {
          return (
            <StyledWrapper>
              <StyledPlayersColumn>
                <PlayersPickerPanel isDropped={isDropped}></PlayersPickerPanel>
              </StyledPlayersColumn>
              <StyledPitchWrapper>
                <Pitch
                  positions={droppableItemsState}
                  handleDrop={handleDrop}
                  handleRemove={handleRemove}
                />
              </StyledPitchWrapper>
            </StyledWrapper>
          );
        }}
      />
    </UserTemplate>
  );
};

PlayersPage.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      team: PropTypes.object.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ),
  fetchPlayers: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      kit: PropTypes.string.isRequired,
    }),
  ),
  fetchTeams: PropTypes.func.isRequired,
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      plural: PropTypes.string.isRequired,
    }),
  ),
};

PlayersPage.defaultProps = {
  players: [],
  teams: [],
  positions: [],
};

const mapStateToProps = ({ players, teams, positions }) => {
  return { players, teams, positions };
};

const mapDispatchToProps = dispatch => ({
  fetchPlayers: () => dispatch(fetchItems('players')),
  fetchTeams: () => dispatch(fetchItems('teams')),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersPage);

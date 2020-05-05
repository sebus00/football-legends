import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const PlayersPage = ({ positions }) => {
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
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      plural: PropTypes.string.isRequired,
    }),
  ),
};

PlayersPage.defaultProps = {
  positions: [],
};

const mapStateToProps = ({ positions }) => {
  return { positions };
};

export default connect(mapStateToProps)(PlayersPage);

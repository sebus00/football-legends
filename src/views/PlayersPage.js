import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import DragDropCustomProvider from 'providers/DnD/DragDropCustomProvider';
import playersData from 'data/players';
import PlayersPickerPanel from 'components/organisms/PlayersPickerPanel/PlayersPickerPanel';
import Pitch from 'components/organisms/Pitch/Pitch';

const ItemTypes = {
  GK: 'gkp',
  DEF: 'def',
  MID: 'mid',
  ST: 'fwd',
};

const positions = [
  ItemTypes.GK,
  ItemTypes.DEF,
  ItemTypes.DEF,
  ItemTypes.DEF,
  ItemTypes.DEF,
  ItemTypes.MID,
  ItemTypes.MID,
  ItemTypes.MID,
  ItemTypes.ST,
  ItemTypes.ST,
  ItemTypes.ST,
];

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

const PlayersPage = () => (
  <UserTemplate>
    <DragDropCustomProvider
      droppableItems={positions}
      render={({ droppableItemsState, isDropped, handleDrop, handleRemove }) => {
        return (
          <StyledWrapper>
            <StyledPlayersColumn>
              <PlayersPickerPanel players={playersData} isDropped={isDropped}></PlayersPickerPanel>
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

export default PlayersPage;

import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import DragDropCustomProvider from 'providers/DnD/DragDropCustomProvider';
import Position from 'components/molecules/Position/Position';
import pitchImage from 'assets/images/pitch.svg';
import playersData from 'data/players';
import PlayersPickerPanel from 'components/organisms/PlayersPickerPanel/PlayersPickerPanel';

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

const StyledPitchWrapper = styled.div`
  flex: 0 0 900px;
  max-width: 900px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const StyledPitch = styled.div`
  background-image: url(${pitchImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  height: 700px;
  max-width: 1100px;
  flex: 0 0 1100px;
  padding: 0px 130px 120px 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledPlayersColumn = styled.div`
  margin-right: 50px;
  flex: 0 0 200px;
  height: 720px;
`;

const StyledPitchRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PlayersPage = () => (
  <UserTemplate>
    <DragDropCustomProvider
      droppableItems={positions}
      render={({ droppableItemsState, isDropped, handleDrop }) => {
        // eslint-disable-next-line react/prop-types
        const mapPositionObjectToComponent = ({ accepts, lastDroppedItem, order }) => (
          <Position
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={item => handleDrop(order, item)}
            key={order}
          />
        );
        return (
          <StyledWrapper>
            <StyledPlayersColumn>
              <PlayersPickerPanel players={playersData} isDropped={isDropped}></PlayersPickerPanel>
            </StyledPlayersColumn>
            <StyledPitchWrapper>
              <StyledPitch>
                <StyledPitchRow>
                  {droppableItemsState.slice(0, 1).map(mapPositionObjectToComponent)}
                </StyledPitchRow>
                <StyledPitchRow>
                  {droppableItemsState.slice(1, 5).map(mapPositionObjectToComponent)}
                </StyledPitchRow>
                <StyledPitchRow>
                  {droppableItemsState.slice(5, 8).map(mapPositionObjectToComponent)}
                </StyledPitchRow>
                <StyledPitchRow>
                  {droppableItemsState.slice(8, 11).map(mapPositionObjectToComponent)}
                </StyledPitchRow>
              </StyledPitch>
            </StyledPitchWrapper>
          </StyledWrapper>
        );
      }}
    />
  </UserTemplate>
);

export default PlayersPage;

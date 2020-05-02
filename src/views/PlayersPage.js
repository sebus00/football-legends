import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import DragDropCustomProvider from 'providers/DnD/DragDropCustomProvider';
import Player from 'components/molecules/Player/Player';
import Position from 'components/molecules/Position/Position';
import pitchImage from 'assets/images/pitch.svg';
import arsenalKit from 'assets/images/kits/arsenal.png';
import liverpoolKit from 'assets/images/kits/liverpool.png';
import manCityKit from 'assets/images/kits/man-city.png';
import manUtdKit from 'assets/images/kits/man-utd.png';
import tottenhamKit from 'assets/images/kits/tottenham.png';
import burnleyKit from 'assets/images/kits/burnley.png';
import astonVillaKit from 'assets/images/kits/aston-villa.png';
import westHamKit from 'assets/images/kits/west-ham.png';
import chelseaKit from 'assets/images/kits/chelsea.png';
import newcastleKit from 'assets/images/kits/newcastle.png';
import norwichKit from 'assets/images/kits/norwich.png';

const ItemTypes = {
  GK: 'gk',
  DEF: 'def',
  MID: 'mid',
  ST: 'st',
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

const players = [
  { name: 'Arsenal', type: ItemTypes.GK, kit: arsenalKit },
  { name: 'Liverpool', type: ItemTypes.DEF, kit: liverpoolKit },
  { name: 'Man City', type: ItemTypes.DEF, kit: manCityKit },
  { name: 'Man Utd', type: ItemTypes.DEF, kit: manUtdKit },
  { name: 'Tottenham', type: ItemTypes.DEF, kit: tottenhamKit },
  { name: 'Burnley', type: ItemTypes.MID, kit: burnleyKit },
  { name: 'Aston Villa', type: ItemTypes.MID, kit: astonVillaKit },
  { name: 'West Ham', type: ItemTypes.MID, kit: westHamKit },
  { name: 'Chelsea', type: ItemTypes.ST, kit: chelseaKit },
  { name: 'Newcastle', type: ItemTypes.ST, kit: newcastleKit },
  { name: 'Norwich', type: ItemTypes.ST, kit: norwichKit },
];

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

const StyledPitchWrapper = styled.div`
  background-image: url(${pitchImage});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  height: 600px;
  width: 800px;
  padding: 40px 110px;
`;

const StyledPlayersColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 200px;
  height: 100%;
  margin-right: 100px;
`;

const StyledPitchRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
`;

const PlayersPage = () => (
  <UserTemplate>
    <DragDropCustomProvider
      draggableItems={players}
      droppableItems={positions}
      render={({ draggableItemsState, droppableItemsState, isDropped, handleDrop }) => {
        // eslint-disable-next-line react/prop-types
        const mapPlayerObjectToComponent = ({ name, type, kit }) => (
          <Player kit={kit} name={name} type={type} isDropped={isDropped(name)} key={name} />
        );
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
              {draggableItemsState.map(mapPlayerObjectToComponent)}
            </StyledPlayersColumn>
            <StyledPitchWrapper>
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
            </StyledPitchWrapper>
          </StyledWrapper>
        );
      }}
    />
  </UserTemplate>
);

export default PlayersPage;

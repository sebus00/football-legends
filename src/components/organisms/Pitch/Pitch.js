import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pitchImage from 'assets/images/pitch.svg';
import Position from 'components/molecules/Position/Position';

const StyledWrapper = styled.div`
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

const StyledPitchRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Pitch = ({ positions, handleDrop, handleRemove }) => {
  // eslint-disable-next-line react/prop-types
  const mapPositionObjectToComponent = ({ accepts, lastDroppedItem, order }) => (
    <Position
      accept={accepts}
      lastDroppedItem={lastDroppedItem}
      onDrop={item => handleDrop(order, item)}
      onRemove={index => handleRemove(index)}
      key={order}
    />
  );

  return (
    <StyledWrapper>
      <StyledPitchRow>{positions.slice(0, 1).map(mapPositionObjectToComponent)}</StyledPitchRow>
      <StyledPitchRow>{positions.slice(1, 5).map(mapPositionObjectToComponent)}</StyledPitchRow>
      <StyledPitchRow>{positions.slice(5, 8).map(mapPositionObjectToComponent)}</StyledPitchRow>
      <StyledPitchRow>{positions.slice(8, 11).map(mapPositionObjectToComponent)}</StyledPitchRow>
    </StyledWrapper>
  );
};

Pitch.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object),
  handleDrop: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

Pitch.defaultProps = {
  positions: [],
};

export default Pitch;

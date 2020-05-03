import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/atoms/Select/Select';
import Player from 'components/molecules/Player/Player';
import selectCriteria from 'data/selectCriteria';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  /* height: 600px; */
`;

const PlayersPickerPanel = ({ players, isDropped }) => {
  // eslint-disable-next-line react/prop-types
  const mapPlayerObjectToComponent = ({ name, team, position }) => (
    <Player name={name} team={team} position={position} isDropped={isDropped(name)} key={name} />
  );

  const [selectedValue, setSelectedValue] = useState({
    ...selectCriteria[0].typeItems[0],
    type: selectCriteria[0].type,
  });

  const onSelectChange = ({ target: { value } }) => {
    setSelectedValue(JSON.parse(value));
  };

  return (
    <StyledWrapper>
      <Select
        items={selectCriteria}
        value={JSON.stringify(selectedValue)}
        onChange={onSelectChange}
      />
      {players
        .filter(({ position, team: { id } }) => {
          if (selectedValue.type === 'global') return true;
          if (selectedValue.type === 'position') return position === selectedValue.key;
          if (selectedValue.type === 'team') return id === selectedValue.key;
          return false;
        })
        .map(mapPlayerObjectToComponent)}
    </StyledWrapper>
  );
};

PlayersPickerPanel.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  isDropped: PropTypes.func.isRequired,
};

PlayersPickerPanel.defaultProps = {
  players: [],
};

export default PlayersPickerPanel;

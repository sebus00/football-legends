import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'components/atoms/Select/Select';
import Player from 'components/molecules/Player/Player';
import Pagination from 'components/molecules/Pagination/Pagination';
import selectCriteria from 'data/selectCriteria';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px !important;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 10px !important;
`;

const StyledPagination = styled(StyledRow)`
  margin-top: auto;
`;

const StyledPlayer = styled.div`
  cursor: pointer;
  width: 100%;

  :hover {
    background-color: #f5f5f5;
  }
`;

const PlayersPickerPanel = ({ players, isDropped }) => {
  // eslint-disable-next-line react/prop-types
  const mapPlayerObjectToComponent = ({ name, team, position }) => (
    <StyledPlayer key={name}>
      <Player name={name} team={team} position={position} isDropped={isDropped(name)} />
    </StyledPlayer>
  );

  const [selectedValue, setSelectedValue] = useState({
    ...selectCriteria[0].typeItems[0],
    type: selectCriteria[0].type,
  });

  const [paginationPage, setPaginationPage] = useState(0);

  const onSelectChange = ({ target: { value } }) => {
    setSelectedValue(JSON.parse(value));
    setPaginationPage(0);
  };

  const onPageChange = value => {
    setPaginationPage(value);
  };

  const filteredPlayers = players.filter(({ position, team: { id } }) => {
    if (selectedValue.type === 'global') return true;
    if (selectedValue.type === 'position') return position === selectedValue.key;
    if (selectedValue.type === 'team') return id === selectedValue.key;
    return false;
  });

  return (
    <StyledWrapper className="panel is-primary">
      <p className="panel-heading">Players Selection</p>
      <StyledRow className="panel-block">
        <Select
          items={selectCriteria}
          value={JSON.stringify(selectedValue)}
          onChange={onSelectChange}
        />
      </StyledRow>
      <StyledColumn className="panel-block">
        {filteredPlayers
          .slice(10 * paginationPage, 10 * (paginationPage + 1))
          .map(mapPlayerObjectToComponent)}
      </StyledColumn>
      <div className="spacer" />
      <StyledPagination className="panel-block">
        <Pagination
          current={paginationPage}
          onChange={onPageChange}
          max={Math.floor((filteredPlayers.length - 1) / 10)}
        />
      </StyledPagination>
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

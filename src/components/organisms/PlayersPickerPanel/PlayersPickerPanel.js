import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Select from 'components/atoms/Select/Select';
import Player from 'components/molecules/Player/Player';
import Pagination from 'components/molecules/Pagination/Pagination';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledPanelHeading = styled.p`
  background-color: ${({ theme }) => theme.color.secondary} !important;
  color: ${({ theme }) => theme.color.white} !important;
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
  cursor: move;
  width: 100%;

  :hover {
    background-color: #f5f5f5;
  }
`;

const PlayersPickerPanel = ({ players, teams, positions, isDropped }) => {
  const playersPerPage = 10;
  // eslint-disable-next-line react/prop-types
  const mapPlayerObjectToComponent = ({ id, firstName, lastName, team, position }) => (
    <StyledPlayer key={id}>
      <Player
        id={id}
        firstName={firstName}
        lastName={lastName}
        team={team}
        position={position}
        isDropped={isDropped(id)}
      />
    </StyledPlayer>
  );

  const [selectCriteria, setSelectCriteria] = useState([
    {
      type: 'global',
      typeLabel: 'Global',
      typeItems: [{ key: 'all', label: 'All players' }],
    },
    ...(positions.length > 0
      ? [
          {
            type: 'position',
            typeLabel: 'By postion',
            typeItems: positions.map(({ id, plural }) => ({ key: id, label: plural })),
          },
        ]
      : []),
  ]);

  useEffect(() => {
    const teamsCriteria = {
      type: 'team',
      typeLabel: 'By team',
      typeItems: teams.map(({ id, name }) => ({ key: id, label: name })),
    };
    setSelectCriteria(state => [...state, ...(teams.length > 0 ? [teamsCriteria] : [])]);
  }, [teams]);

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
    <StyledWrapper className="panel">
      <StyledPanelHeading className="panel-heading">Players Selection</StyledPanelHeading>
      <StyledRow className="panel-block">
        <Select
          items={selectCriteria}
          value={JSON.stringify(selectedValue)}
          onChange={onSelectChange}
        />
      </StyledRow>
      <StyledColumn className="panel-block">
        {filteredPlayers
          .slice(playersPerPage * paginationPage, playersPerPage * (paginationPage + 1))
          .map(mapPlayerObjectToComponent)}
      </StyledColumn>
      <StyledPagination className="panel-block">
        <Pagination
          current={paginationPage}
          onChange={onPageChange}
          max={Math.floor((filteredPlayers.length - 1) / playersPerPage)}
        />
      </StyledPagination>
    </StyledWrapper>
  );
};

PlayersPickerPanel.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      team: PropTypes.object.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ),
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      kit: PropTypes.string.isRequired,
      badge: PropTypes.string.isRequired,
    }),
  ),
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      plural: PropTypes.string.isRequired,
    }),
  ),
  isDropped: PropTypes.func.isRequired,
};

PlayersPickerPanel.defaultProps = {
  players: [],
  teams: [],
  positions: [],
};

const mapStateToProps = ({ players, teams, positions }) => {
  return { players, teams, positions };
};

export default connect(mapStateToProps)(PlayersPickerPanel);

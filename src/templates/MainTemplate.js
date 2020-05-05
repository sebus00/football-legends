import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'store/actions';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { DndProvider } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

const MainTemplate = ({ fetchPlayers, fetchTeams, children }) => {
  useEffect(() => {
    fetchPlayers();
    fetchTeams();
  }, [fetchPlayers, fetchTeams]);

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DndProvider>
  );
};

MainTemplate.propTypes = {
  fetchPlayers: PropTypes.func.isRequired,
  fetchTeams: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchPlayers: () => dispatch(fetchItems('players')),
  fetchTeams: () => dispatch(fetchItems('teams')),
});

export default connect(null, mapDispatchToProps)(MainTemplate);

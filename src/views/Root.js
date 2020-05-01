import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import HomePage from './HomePage';
import PlayersPage from './PlayersPage';
import ClubsPage from './ClubsPage';
import CoachesPage from './CoachesPage';
import StadiumPages from './StadiumsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.players} component={PlayersPage} />
        <Route exact path={routes.clubs} component={ClubsPage} />
        <Route exact path={routes.coaches} component={CoachesPage} />
        <Route exact path={routes.stadiums} component={StadiumPages} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

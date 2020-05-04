import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import HomePage from './HomePage';
import PlayersPage from './PlayersPage';
import TeamsPage from './TeamsPage';
import CoachesPage from './CoachesPage';
import StadiumPage from './StadiumsPage';
import StadiumDetailsPage from './StadiumDetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.players} component={PlayersPage} />
        <Route exact path={routes.teams} component={TeamsPage} />
        <Route exact path={routes.coaches} component={CoachesPage} />
        <Route exact path={routes.stadiums} component={StadiumPage} />
        <Route path={routes.stadium} component={StadiumDetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IssueListPage from './pages/IssueListPage';
import MilestonesPage from './pages/MilestonesPage';
import NewIssuePage from './pages/NewIssuePage';
import LabelsPage from './pages/LabelsPage';
import IssueDetailPage from './pages/IssueDetailPage';
import LoginPage from './pages/LoginPage';

import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/new'>
            <NewIssuePage />
          </Route>
          <Route path='/milestones'>
            <MilestonesPage />
          </Route>
          <Route path='/labels'>
            <LabelsPage />
          </Route>
          <Route path='/issues/:id'>
            <IssueDetailPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/'>
            <IssueListPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

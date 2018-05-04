import React, { Component } from 'react';
import {NotificationContainer} from 'react-notifications';

import RouteConfig from './routes';
import AppBar from './components/core/AppBar/AppBar';
import AppBarLink from './components/core/AppBar/AppLink';
import AppBarContainer from './components/core/AppBar/AppBarContainer';
import AppBarSide from './components/core/AppBar/AppBarSide';

// CSS
import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <AppBarContainer>
              <AppBarSide>
                  <AppBarLink to="/">Home</AppBarLink>
                  <AppBarLink to="/heros">Heros</AppBarLink>
              </AppBarSide>
              <AppBarSide>
                  <AppBarLink to="https://github.com/weseldridge/React_Demo_App" isExternal={true}>GitHub</AppBarLink>
              </AppBarSide>
          </AppBarContainer>
        </AppBar>
        <RouteConfig />
        <NotificationContainer />
      </div>
    );
  }
}

export default App;

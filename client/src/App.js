import React, { Component } from 'react';

import RouteConfig from './routes';

import AppBar from './components/core/AppBar/AppBar';
import AppBarLink from './components/core/AppBar/AppLink';
import AppBarContainer from './components/core/AppBar/AppBarContainer';
import AppBarSide from './components/core/AppBar/AppBarSide';


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
      </div>
    );
  }
}

export default App;

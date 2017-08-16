import React from 'react';
import Provider from './provider';
import createHistory from 'history/createBrowserHistory';

export default class BrowserProvider extends React.Component {
  displayName = 'BrowserProvider';
  history = createHistory();
  render() {
    const { children, ...others } = this.props;
    return (
      <Provider {...others} history={this.history}>
        {children}
      </Provider>
    );
  }
}

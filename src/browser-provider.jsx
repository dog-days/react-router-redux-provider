import React from 'react';
import Provider from './provider';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

export default class BrowserProvider extends React.Component {
  displayName = 'BrowserProvider';
  render() {
    const { children, ...others } = this.props;
    return (
      <Provider {...others} history={history}>
        {children}
      </Provider>
    );
  }
}

import React from 'react';
import Provider from './provider';
import createHistory from 'history/createHashHistory';

export default class HashProvider extends React.Component {
  displayName = 'HashProvider';
  history = createHistory();
  render() {
    const { children, history = this.history, ...others } = this.props;
    return (
      <Provider {...others} history={history}>
        {children}
      </Provider>
    );
  }
}

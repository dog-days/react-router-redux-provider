import React from 'react';
import Provider from './provider';
import createHistory from 'history/createHashHistory';

export default class HashProvider extends React.Component {
  displayName = 'HashProvider';
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

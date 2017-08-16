import React from 'react';
import Provider from './provider';
import createHistory from 'history/createHashHistory';

const history = createHistory();

export default class HashProvider extends React.Component {
  displayName = 'HashProvider';
  render() {
    const { children, ...others } = this.props;
    return (
      <Provider {...others} history={history}>
        {children}
      </Provider>
    );
  }
}

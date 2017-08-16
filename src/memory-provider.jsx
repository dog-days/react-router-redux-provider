import React from 'react';
import Provider from './provider';
import createHistory from 'history/createMemoryHistory';

const history = createHistory();

export default class MemoryProvider extends React.Component {
  displayName = 'MemoryProvider';
  render() {
    const { children, ...others } = this.props;
    return (
      <Provider {...others} history={history}>
        {children}
      </Provider>
    );
  }
}

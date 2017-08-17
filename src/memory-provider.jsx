import React from 'react';
import Provider from './provider';
import createHistory from 'history/createMemoryHistory';

export default class MemoryProvider extends React.Component {
  displayName = 'MemoryProvider';
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

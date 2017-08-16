import React from 'react';
import Provider from './provider';
import createHistory from 'history/createMemoryHistory';

export default class MemoryProvider extends React.Component {
  displayName = 'MemoryProvider';
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

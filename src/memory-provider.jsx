import React from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';
import createHistory from 'history/createMemoryHistory';

export default class MemoryProvider extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
  };
  displayName = 'MemoryProvider';
  history = createHistory(this.props);
  render() {
    const { children, history = this.history, ...others } = this.props;
    return (
      <Provider {...others} history={history}>
        {children}
      </Provider>
    );
  }
}

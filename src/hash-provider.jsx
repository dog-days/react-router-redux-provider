import React from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';
import createHistory from 'history/createHashHistory';

export default class HashProvider extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
  };
  displayName = 'HashProvider';
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

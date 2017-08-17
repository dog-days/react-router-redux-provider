import React from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';
import createHistory from 'history/createBrowserHistory';

export default class BrowserProvider extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
  };
  displayName = 'BrowserProvider';
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

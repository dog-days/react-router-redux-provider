import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';

export default class Provider extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    //非必要的，如果有store，reducers就不生效，传进来也没有意义
    store: PropTypes.object,
    middleware: PropTypes.array,
    reducers: PropTypes.object,
  };
  displayName = 'Provider';
  state = {};
  componentDidMount() {
    const { store, reducers = {}, middleware = [], history } = this.props;
    if (store) {
      this.store = store;
    } else {
      this.store = createStore(
        combineReducers({
          ...reducers,
          router: routerReducer,
        }),
        applyMiddleware(routerMiddleware(history), ...middleware)
      );
    }
    this.setState({ canRender: true });
  }
  componentWillReceiveProps(nextProps) {
    const { store, reducers = {}, hot } = nextProps;
    //热替换处理，根据props.hot来处理
    if (!store && hot) {
      this.store.replaceReducer(
        combineReducers({
          ...reducers,
          router: routerReducer,
        })
      );
    }
  }
  render() {
    const { canRender } = this.state;
    if (!canRender) {
      return false;
    } else {
      const { history, children } = this.props;
      return (
        <ReduxProvider store={this.store}>
          <ConnectedRouter history={history}>
            <span>
              {children}
            </span>
          </ConnectedRouter>
        </ReduxProvider>
      );
    }
  }
}

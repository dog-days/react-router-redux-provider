import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import window from 'global/window';

function getStore() {
  let { store, preloadedState } = this.props;
  if (!store) {
    const reducers = this.getReducers(this.props);
    const enhancers = this.getEnhancers(this.props);
    store = createStore(reducers, preloadedState, enhancers);
  }
  return store;
}
/**
 * redux 基础 provider
 * @prop { object } history browser、hash、memory，跟react-router挂钩，必填
 * @prop { object } store redux store
 *                  非必要的，如果有store，reducers、middlewares和enhancers就不生效，传进来也没有意义
 * @prop { array } middlewares redux middlewares
 * @prop { array } enhancers redux enhancers
 * @prop { object } reducers redux reducers (传进来后会被combineReducers)
 */
export default class Provider extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    //非必要的，如果有store，reducers、middlewares和enhancers就不生效，传进来也没有意义
    store: PropTypes.object,
    middlewares: PropTypes.array,
    enhancers: PropTypes.array,
    reducers: PropTypes.object,
  };
  //begin--定义context
  //static childContextTypes = {
  //store: PropTypes.object
  //};
  //getChildContext() {
  //return {
  //store: this.store
  //};
  //}
  //end--定义context
  displayName = 'Provider';
  state = {};
  store = getStore.bind(this)();
  getReducers(props) {
    const { reducers } = props;
    return combineReducers({
      ...reducers,
      router: routerReducer,
    });
  }
  getEnhancers(props) {
    let devtools = () => noop => noop;
    if (
      process.env.NODE_ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION__
    ) {
      devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
    }
    const { enhancers = [], middlewares = [], history } = props;
    const _middlewares = [...middlewares, routerMiddleware(history)];
    const _enhancers = [
      applyMiddleware(..._middlewares),
      devtools(),
      ...enhancers,
    ];
    return compose(..._enhancers);
  }
  componentWillReceiveProps(nextProps) {
    const { store, hot } = nextProps;
    //热替换处理，根据props.hot来处理
    if (!store && hot) {
      const reducers = this.getReducers(nextProps);
      this.store.replaceReducer(reducers);
    }
  }
  render() {
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

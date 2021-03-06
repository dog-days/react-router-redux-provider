import React from 'react';
import { BrowserProvider as Provider } from 'react-router-redux-provider';
import { Route, Link } from 'react-router-dom';
import Test from './test';
import { test } from './model';

export default function container(props) {
  return (
    <Provider
      //如果使用props.reducers，这里需要开启热替换，热替换才会生效
      //这里的hot是为了让reducer修改后，热替换能生效，hot是在热替换才能用。
      //如果使用了props.store，reducers会被覆盖。
      hot={props.hot}
      reducers={{
        test: test,
      }}
      production={process.env.NODE_ENV === 'production'}
    >
      <Link to="/">主页</Link>
      <br />
      <Link to="/about">关于</Link>
      <Route
        exact
        path="/"
        component={props => {
          return <div>index</div>;
        }}
      />
      <Route
        path="/about"
        component={props => {
          return <div>about</div>;
        }}
      />
      {
        //hot是随机数，是为了让react-redux可以渲染，现在的react-redux版本做了props对比，没变化就不渲染了
      }
      <Test hot={props.hot} />
    </Provider>
  );
}

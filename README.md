# react-router-redux-provider

对 [react-redux](https://github.com/reactjs/react-redux) 的 `Provider` 与 [react-router](https://github.com/ReactTraining/react-router) 进一步封装



### Provider 与 BrowserHistory 整合

```jsx
import React from 'react';
import { BrowserProvider as Provider } from 'react-router-redux-provider';
import { Route, Link } from 'react-router-dom';
import store from './store.js';

export default function container(props) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
```



### Provider 与 HashHistory 整合

```jsx
   import React from 'react';
   import { HashProvider as Provider } from 'react-router-redux-provider';
   import { Route, Link } from 'react-router-dom';
   import store from './store.js';

   export default function container(props) {
     return (
       <Provider store={store}>
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
       </Provider>
     );
   }
```



### Provider 与 MemoryHistory 整合

```jsx
import React from 'react';
import { Provider } from 'react-router-redux-provider';
import { Route, Link } from 'react-router-dom';
import store from './store.js';

export default function container(props) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
```



###  自定义 history 的 Provider

```jsx
import React from 'react';
import { MemoryProvider as Provider } from 'react-router-redux-provider';
import { Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from './store.js';

export default function container(props) {
  return (
    <Provider store={store}  history={createHistory()}>
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
    </Provider>
  );
}
```
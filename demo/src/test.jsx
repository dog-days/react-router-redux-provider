import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testAction } from './model';

@connect(state => {
  return {
    display: state.test,
  };
})
export default class Test extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };
  showToggleEvent = e => {
    const { dispatch, display } = this.props;
    if (display) {
      dispatch(testAction(false));
    } else {
      dispatch(testAction(true));
    }
  };
  render() {
    //react-redux provider提供了context，可以直接用store
    //console.log(this.context.store)
    const { display } = this.props;
    return (
      <div>
        <button onClick={this.showToggleEvent}>
          {display && '隐藏'}
          {!display && '显示'}
        </button>
        {display && <div>我被显示了</div>}
      </div>
    );
  }
}

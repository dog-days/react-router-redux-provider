import React from 'react';
import { connect } from 'react-redux';
import { testAction } from './model';

@connect(state => {
  return {
    display: state.test,
  };
})
export default class Test extends React.Component {
  showToggleEvent = e => {
    const { dispatch, display } = this.props;
    if (display) {
      dispatch(testAction(false));
    } else {
      dispatch(testAction(true));
    }
  };
  render() {
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

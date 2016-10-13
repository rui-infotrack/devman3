import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as a from '../actions';
import { NAME } from '../constants';

const Counter = ({ reducer, actions }) => (
  <div>
    <h1>
      Number: {reducer.number}
    </h1>
    <button onClick={actions.increment}>Increment</button>
    <button onClick={actions.decrement}>Decrement</button>
  </div>
);

Counter.propTypes = {
  reducer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  state => ({ reducer: state[NAME] }),
  dispatch => ({ actions: bindActionCreators(a, dispatch) })
)(Counter);

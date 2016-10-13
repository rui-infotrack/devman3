import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gs from 'utils/gs';
import classnames from 'classnames';
import * as a from '../actions';
import { NAME } from '../constants';

class MasterView extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.loadEntries();
  }

  render() {
    const { route: { env }, reducer: { isLoading, entries } } = this.props;

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <h1 className={gs('title', 'is-4')}>Error Logs - <strong>{env.toUpperCase()}</strong></h1>
        <table className={gs('table')}>
          <thead>
            <tr>
              <th style={{ width: '70px' }}>ID</th>
              <th>Error</th>
              <th style={{ width: '50px' }}>Count</th>
              <th style={{ width: '150px' }}>Last Seen</th>
              <th style={{ width: '150px' }}>First Seen</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(x => (
              <tr>
                <td>{x.id}</td>
                <td>{x.error}</td>
                <td>{x.count}</td>
                <td>{x.lastSeen}</td>
                <td>{x.firstSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

MasterView.propTypes = {
  route: PropTypes.object.isRequired,
  reducer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


export default connect(
  state => ({ reducer: state[NAME] }),
  dispatch => ({ actions: bindActionCreators(a, dispatch) })
)(MasterView);

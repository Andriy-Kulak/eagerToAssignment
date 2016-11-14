import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchEagerData} from '../actions/index.actions';
import {Table, Grid, Col, Row, Panel, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import moment from 'moment';

class DashboardIndex extends Component {
  componentDidMount() {
    this.props.fetchEagerData();
  }

  renderRows() {
    return this.props.sheets.map(data => {
      return (
        <tr key={data.ID}>
          <td><strong>{data.ID}</strong></td>
          <td>{data.AGENT_NAME}</td>
          <td>{data.BUSINESS_UNIT_NAME}</td>
          <td>{data.UNDERWRITER_NAME}</td>
          <td>{data.PROGRAM}</td>
          <td>{data.INSURED_NAME}</td>
          <td>{moment(data.RECEIVED_DATE).format('MM/DD/YYYY')}</td>
          <td>
            <LinkContainer to={{pathname: `/id/${data.ID}`}}>
              <Button bsStyle="primary" bsSize="xsmall">Details...</Button>
            </LinkContainer>
          </td>
        </tr>
      );
    });
  }

  render() {
    const title = (
      <h4 className="header-panel"><b>Underwriter Dashboard:</b> <i>All Entries</i></h4>
    );

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel header={title} bsStyle="info">
              <Table responsive bordered condensed hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Agent Name</th>
                    <th>Business Unit Name</th>
                    <th>Underwriter Name</th>
                    <th>Program</th>
                    <th>Insured Name</th>
                    <th>Received Date</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderRows()}
                </tbody>
              </Table>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

DashboardIndex.propTypes = {
  fetchEagerData: PropTypes.func,
  sheets: PropTypes.array
};

function mapStateToProps(state) {
  return {
    sheets: state.sheets.all
  };
}

export default connect(mapStateToProps, {fetchEagerData})(DashboardIndex);

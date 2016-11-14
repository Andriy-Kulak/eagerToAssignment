import React, {Component, PropTypes} from 'react';
import {fetchEagerRecord} from '../actions/index.actions';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

class DetailOverview extends Component {
  componentDidMount() {
    fetchEagerRecord(this.props.params.id);
    // this.setState({sheets: 'test'});
  }

  render() {
    const title = (
      <h4 className="header-panel"><b>Detailed Overview for Agent:</b> <i> {this.props.sheets.AGENT_NAME}</i></h4>
    );

    return (
      <Grid>
        <Row>
          <Panel header={title} bsStyle="info">
            <Row>
              <Col md={4} sm={4} className="detail-border">
                <p><b><u>ID:</u></b> {this.props.sheets.ID}</p>
                <p><b><u>Agent Code:</u></b> {this.props.sheets.AGENT_CODE}</p>
                <p><b><u>Parent Agent Code:</u></b> {this.props.sheets.PARENT_AGENT_CODE}</p>
                <p><b><u>Parent Agent Name:</u></b> {this.props.sheets.PARENT_AGENT_NAME}</p>
                <p><b><u>Business Unit Name:</u></b> {this.props.sheets.BUSINESS_UNIT_NAME}</p>
                <p><b><u>Operating Unit Name:</u></b> {this.props.sheets.OPERATING_UNIT_NAME}</p>
                <p><b><u>Underwriter Name:</u></b> {this.props.sheets.UNDERWRITER_NAME}</p>
                <p><b><u>Submission No:</u></b> {this.props.sheets.SUBMISSION_NO}</p>
              </Col>
              <Col md={4} sm={4} className="detail-border">
                <p><b><u>Policy No:</u></b> {this.props.sheets.POL_NO}</p>
                <p><b><u>Renewal Flag:</u></b> {this.props.sheets.RENEWAL_FLAG}</p>
                <p><b><u>Received Count:</u></b> {this.props.sheets.RECEIVED_COUNT}</p>
                <p><b><u>Received Date:</u></b> {this.props.sheets.RECEIVED_DATE}</p>
                <p><b><u>Rejected Date:</u></b> {this.props.sheets.REJECTED_DATE}</p>
                <p><b><u>Quoted Date:</u></b> {this.props.sheets.QUOTED_DATE}</p>
                <p><b><u>Rejection Reason:</u></b> {this.props.sheets.REJECTION_REASON}</p>
                <p><b><u>Details on Rejection Reason:</u></b> {this.props.sheets.SUB_REJECTION_REASON}</p>
                <p><b><u>Program:</u></b> {this.props.sheets.PROGRAM}</p>
              </Col>
              <Col md={4} sm={4}>
                <p><b><u>Insured Name:</u></b> {this.props.sheets.INSURED_NAME}</p>
                <p><b><u>Agent Contact:</u></b> {this.props.sheets.AGENT_CONTACT}</p>
                <p><b><u>Insured State:</u></b> {this.props.sheets.INSURED_STATE}</p>
                <p><b><u>Underwriter Assistant:</u></b> {this.props.sheets.UNDERWRITER_ASSISTANT}</p>
                <p><b><u>Received to Eff Day:</u></b> {this.props.sheets.RECEIVED_TO_EFF_DAY}</p>
                <p><b><u>Quoted Premium Brand:</u></b> {this.props.sheets.QUOTED_PREMIUM_BAND}</p>
                <p><b><u>Quoted Premium:</u></b> {this.props.sheets.QUOTED_PREMIUM}</p>
                <p><b><u>User Profile:</u></b> {this.props.sheets.ID}</p>
              </Col>
            </Row>
          </Panel>
        </Row>
      </Grid>
    );
  }
}

DetailOverview.contextTypes = {
  router: PropTypes.object
};

DetailOverview.propTypes = {

  params: PropTypes.object,
  sheets: PropTypes.object
};

function mapStateToProps(state) {
  if ((state.sheets.data.length > 0)) { // wait until state.sheets.data has a value
    return {
      sheets: state.sheets.data[0]
    };
  }
  return {
    sheets: {}
  };
}

export default connect(mapStateToProps, {fetchEagerRecord})(DetailOverview);

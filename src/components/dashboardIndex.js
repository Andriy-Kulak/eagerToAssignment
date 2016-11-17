/* eslint react/jsx-boolean-value: 0 */
import React, {Component, PropTypes} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {connect} from 'react-redux';
import {fetchEagerData} from '../actions/index.actions';
import {browserHistory} from 'react-router';

class DashboardIndex extends Component {
  componentDidMount() {
    fetchEagerData();
  }

  onRowSelect(row) {
    browserHistory.push(`/id/${row.ID}`);
  }

  render() {
    const selectRowProp = {
      mode: 'radio',
      onSelect: this.onRowSelect,
      clickToSelect: true,
      bgColor: 'rgb(204, 51, 119)'
    };

    return (
      <BootstrapTable
        data={this.props.sheets}
        hover={true}
        condensed={true}
        pagination={true}
        search={true}
        selectRow={selectRowProp}
        exportCSV={true}
        >
        <TableHeaderColumn
          width="50px"
          dataField="ID"
          isKey={true}
          dataAlign="right"
          >ID</TableHeaderColumn>
        <TableHeaderColumn
          width="400px"
          dataField="AGENT_NAME"
          dataSort={true}
          filter={{type: 'TextFilter', placeholder: 'Search by Agent Name'}}
          >Agent Name</TableHeaderColumn>
        <TableHeaderColumn
          width="70px" dataField="BUSINESS_UNIT_NAME"
          dataAlign="center"
          >Bus. Unit Name</TableHeaderColumn>
        <TableHeaderColumn
          width="100px"
          dataField="UNDERWRITER_NAME"
          dataSort={true}
          >Underwriter Name</TableHeaderColumn>
        <TableHeaderColumn
          width="140px"
          dataField="PROGRAM"
          dataSort={true}
          filter={{type: 'TextFilter', placeholder: 'Search by Program'}}
          >Program</TableHeaderColumn>
        <TableHeaderColumn
          width="130px"
          dataField="INSURED_NAME"
          dataSort={true}
          filter={{type: 'TextFilter', placeholder: 'Search by Insured Name'}}
          >Insured Name</TableHeaderColumn>
        <TableHeaderColumn
          width="70px"
          dataField="RECEIVED_DATE"
          dataSort={true}
          >Rec. Date</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

DashboardIndex.propTypes = {
  sheets: PropTypes.array
};

function mapStateToProps(state) {
  return {
    sheets: state.sheets.all
  };
}

export default connect(mapStateToProps, {fetchEagerData})(DashboardIndex);

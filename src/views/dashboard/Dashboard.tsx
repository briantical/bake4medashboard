import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Dashboard extends Component {
  render() {
    return <div>Dashboard</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

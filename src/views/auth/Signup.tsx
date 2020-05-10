import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Signup extends Component {
  render() {
    return <div>Signup</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Password extends Component {
  render() {
    return <div>Password</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Password);

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Signin extends Component {
  render() {
    return <div>Signin</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

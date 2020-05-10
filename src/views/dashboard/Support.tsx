import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Support extends Component {
  render() {
    return <div>Support</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Support);

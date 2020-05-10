import React, { Component } from 'react';
import { connect } from 'react-redux';

export class User extends Component {
  render() {
    return <div>User</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(User);

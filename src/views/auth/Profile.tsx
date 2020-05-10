import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Profile extends Component {
  render() {
    return <div>Profile</div>;
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

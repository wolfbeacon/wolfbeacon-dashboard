import React from 'react';

import Navbar from './navbar';
import Footer from './footer';
import { getUserProfile } from '../utils/api-helper.js';

export default class Applications extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      profile: {}
    };
  }

  componentDidMount(){
    getUserProfile()
      .then(profiles => this.setState({profile: profiles[0]}));
  }

  render(){
    console.log(this.props);
    return (
      <div>
        <Navbar profile={this.state.profile}/>
        <h1 className="header">Applications Page</h1>
        <Footer />
      </div>
    );
  }
}
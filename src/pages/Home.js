import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Jumbotron from '../components/home/Jumbotron'
import PromoBuilder from '../components/home/PromoBuilder';
import Testimony from '../components/home/Testimony';
import Contact from '../components/home/Contact';


export class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Jumbotron />
        <PromoBuilder />
        <Testimony />
        <Contact />
      </div>
    )
  }
}

export default Home

/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroTeam from 'parts/HeroTeam';
import Footer from 'parts/Footer';
import Service from 'parts/Service';
import Discuss from 'parts/Discuss'; // Import Discuss component
import { Services } from 'json/landingPageData';

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <HeroTeam />
        <Service data={Services} />
        <Discuss /> {/* Add Discuss component here */}
        <Footer />
      </>
    );
  }
}

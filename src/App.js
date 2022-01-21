import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import TopNav from './Components/TopNav';
import Headlines from './Components/Headlines';
import MustSee from './Components/MustSee';
import AroundTheBBC from './Components/AroundTheBBC';
import MostRead from './Components/MostRead';
import Sport from './Components/Sport';
export default class App extends Component {
  render() {
    return <div>
      <TopNav/>
      <Navbar/>
      <Headlines/>
      <MustSee/>
      <MostRead/>
      <AroundTheBBC/>
      <Sport/>
    </div>;
  }
}

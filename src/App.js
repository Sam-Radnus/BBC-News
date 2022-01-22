import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import TopNav from './Components/TopNav';
import Headlines from './Components/Headlines';
import MustSee from './Components/MustSee';
import AroundTheBBC from './Components/AroundTheBBC';
import MostRead from './Components/MostRead';
import Sport from './Components/Sport';
import FindUs from './Components/FindUs';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import News from './Components/News';
export default class App extends Component {
  pageSize = 10;
  apiKey = 'a70c1839ba1c41c5b29461feee78b4af';
  render() {
    return <div>
      <TopNav />
      <Router>
        <Navbar />
        <Headlines />
           <MustSee />
           <MostRead />
           <AroundTheBBC />
           <Sport />
           <FindUs />
        <Routes>
        
        
        <Route exact path="/Home">
          
          </Route> 
        <Route exact path="/Business" element={<News key="Business" apiKey={this.apiKey} pageSize={this.pageSize} category="business"></News>}></Route>
        <Route exact path="/Entertainment" element={<News key="Entertainment" apiKey={this.apiKey} pageSize={this.pageSize} category="entertainment"></News>}></Route>
        <Route exact path="/General" element={<News key="General" apiKey={this.apiKey} pageSize={this.pageSize} category="general"></News>}></Route>
        <Route exact path="/Health" element={<News key="Health" apiKey={this.apiKey} pageSize={this.pageSize} category="health"></News>}></Route>
        <Route exact path="/Science" element={<News key="Science" apiKey={this.apiKey} pageSize={this.pageSize} category="science"></News>}></Route>
        <Route exact path="/Sports" element={<News key="Sports" apiKey={this.apiKey} pageSize={this.pageSize} category="sports"></News>}></Route>
        <Route exact path="/Technology" element={<News key="Technology" apiKey={this.apiKey} pageSize={this.pageSize} category="technology"></News>}></Route>
        </Routes>
   
      </Router>
    </div>;
  }
}

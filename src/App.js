import React, { Component, useState } from 'react';
import {Navbar} from './Components/Navbar';
import {TopNav} from './Components/TopNav';
import {Headlines} from './Components/Headlines';
import {MustSee} from './Components/MustSee';
import {AroundTheBBC} from './Components/AroundTheBBC';
import {MostRead} from './Components/MostRead';
import {Sport} from './Components/Sport';
import {FindUs} from './Components/FindUs';
import Modal from './Components/Secondary/Modal';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {News} from './Components/News';
import LoadingBar from 'react-top-loading-bar'
export  const App =()=> {
  const pageSize = 10;
  const apiKey = 'a70c1839ba1c41c5b29461feee78b4af';
 
  // let setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  let [progress,setProgress]=useState(0)
    return <div>
  
      <Router>
      <TopNav />
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={5}
          progress={progress}
          />
        <Routes>
        <Route exact path="/" element={<>
                   <Headlines />
                   <MustSee />
                   <MostRead />
                   <AroundTheBBC />
                   <Sport />
                   <FindUs />  </>   }>
          </Route> 
        <Route exact path="/Business"      element={<News key="Business"      setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="business"></News>}></Route>
        <Route exact path="/Entertainment" element={<News key="Entertainment" setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="entertainment"></News>}></Route>
        <Route exact path="/General"       element={<News key="General"       setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="general"></News>}></Route>
        <Route exact path="/Health"        element={<News key="Health"        setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="health"></News>}></Route>
        <Route exact path="/Science"       element={<News key="Science"       setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="science"></News>}></Route>
        <Route exact path="/Sports"        element={<News key="Sports"        setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="sports"></News>}></Route>
        <Route exact path="/Technology"    element={<News key="Technology"    setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} category="technology"></News>}></Route>
        <Route exact path="/Sign-In"       element={<Modal></Modal>}></Route>
        </Routes>
   
      </Router>
    </div>;
  
}

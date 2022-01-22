import React, { Component } from 'react';
import '../App.css';

export default class FindUs extends Component {
  myStyle = {
    fontSize: 'xx-large',
    marginLeft: '10px'
  }

  white = 'white';
  facebook = 'rgb(61,90,152)';
  instagram = 'rgb(217,49,117)';
  twitter = 'rgb(29,161,242)';
  youtube = 'rgb(255,0,0)';
  render() {
    return <div className="container">
      <h1>Find Us Here</h1>
      <div className="row row-cols-4">
        <div style={this.Flex} id="grid" className="col">
          <div className="gridMe"> <i logo="facebook" class="fab fa-facebook-f"></i>
            <i logo="youtube" class="fab fa-youtube"></i>
            <i logo="twitter" class="fab fa-twitter"></i>
            <i logo="instagram" class="fab fa-instagram"></i></div>
          <div className="newsDaily">

            <div className="envelope"><i class="fas fa-envelope-open-text"></i>
              <h1>NEWS DAILY</h1> <a href="https://www.bbc.co.uk/programmes/articles/4g8c0mkNmM190Zl00VdXTTb/bbc-news-daily-email">Get News from the BBC in your inbox each weekday morning</a>
            </div>
        
          <div className="envelope"> <i class="fas fa-mobile-alt"></i>
            <h1>NEWS App</h1> <a href="https://www.bbc.co.uk/programmes/articles/4g8c0mkNmM190Zl00VdXTTb/bbc-news-daily-email">Find out more bout our BBC News App</a>
          </div>
          </div>
          <div style={{ marginLeft: '10px' }} className="col"><p>Email us at <a href="mailto:haveyoursay@bbc.co.uk">haveyoursay@bbc.co.uk</a></p>
            <p>Send an SMS or MMS to +44 7624 800100</p>
            <p>Follow <a href="https://twitter.com/BBC_HaveYourSay">Have Your Say on Twitter</a></p>
            <p><a href="https://www.bbc.com/news/help-41670342">why you can trust BBC news</a></p>
          </div>
        </div>
      </div>
    </div>;
  }
}

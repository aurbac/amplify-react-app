import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Auth from '@aws-amplify/auth';

import { withAuthenticator } from 'aws-amplify-react';

import awsconfig from './aws-exports';

import Analytics from '@aws-amplify/analytics';

import Button from '@material-ui/core/Button';

// Retrieve temporary AWS credentials and sign requests
Auth.configure(awsconfig);
// Send analytics events to Amazon Pinpoint
Analytics.configure(awsconfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAnalyticsClick = this.handleAnalyticsClick.bind(this);
    this.state = {analyticsEventSent: false, resultHtml: "", eventsSent: 0};
  }

  handleAnalyticsClick() {
      Analytics.record('Amplify Event')
        .then( (evt) => {
            const url = 'https://console.aws.amazon.com/pinpoint/home/?region=us-east-1#/apps/'+awsconfig.aws_mobile_analytics_app_id+'/analytics/events';
            let result = (<div>
              <p>Event Submitted.</p>
              <p>Events sent: {++this.state.eventsSent}</p>
              <a href={url} target="_blank">View Events on the Amazon Pinpoint Console</a>
            </div>);
            this.setState({
                'analyticsEventSent': true,
                'resultHtml': result
            });
        });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <div className="App-intro">
          <Button variant="contained" color="primary" className="App-button" onClick={this.handleAnalyticsClick}>Send Analytics Event</Button>
          {this.state.analyticsEventSent}
          <div>{this.state.resultHtml}</div>
        </div>
      </header>
    </div>
    );
  }
}

export default withAuthenticator(App);

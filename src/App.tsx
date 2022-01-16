import './App.css';

import { AmplifySignOut } from '@aws-amplify/ui-react' // withAuthenticator taken out for dev purposes
import Amplify from 'aws-amplify';
import React from 'react';

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

const App = (): JSX.Element => {
  return (
    <>
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <p>
            Edit and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  )
}

export default App;


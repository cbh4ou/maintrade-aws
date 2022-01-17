import styles from './app.module.css';

import { AmplifySignOut } from '@aws-amplify/ui-react' // withAuthenticator taken out for dev purposes
import Amplify from 'aws-amplify';
import React from 'react';

import aws_exports from '../../aws-exports';
Amplify.configure(aws_exports);

const app = (): JSX.Element => {
  return (
    <>
      <div className="_app">
        <AmplifySignOut />
        <header className="_app-header">
          <p>
            Edit and save to reload.
          </p>
          <a
            className="_app-link"
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

export default app;

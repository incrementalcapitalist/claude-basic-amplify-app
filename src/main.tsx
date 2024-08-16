/**
 * main.tsx
 * Entry point for the React application with AWS Amplify Gen 2 configuration.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import App from './App';
import './index.css';

// No need to import a configuration file
Amplify.configure({
  // Configuration is automatically injected during the build process
});

// Generate an API client for use in the application
const client = generateClient();

// Render the React application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
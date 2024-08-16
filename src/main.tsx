/**
 * main.tsx
 * Entry point for the React application with AWS Amplify Gen 2 configuration.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';
import './index.css';

// Configure Amplify
// In Gen 2, configuration is automatically injected during the build process
Amplify.configure({}); // No need to import a configuration file

// Remove the client generation if it's not being used
// const client = generateClient();

// Get the root element to render our React app
const rootElement = document.getElementById('root');

// Ensure the root element exists
if (!rootElement) {
  throw new Error('Root element not found');
}

// Create a root for concurrent rendering
const root = ReactDOM.createRoot(rootElement);

// Render the React application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
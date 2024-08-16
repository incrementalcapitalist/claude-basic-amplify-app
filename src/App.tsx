/**
 * App.tsx
 * Main component for the Amplify-authenticated React application.
 */

import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/**
 * App component that wraps the entire application with Amplify's Authenticator.
 * @returns {JSX.Element} The rendered App component
 */
const App: React.FC = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          {/* Display a greeting with the user's username or 'Guest' if not available */}
          <h1>Hello {user?.username ?? 'Guest'}</h1>
          {/* Button to trigger the sign out process */}
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
};

export default App;
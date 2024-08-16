import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <h1>Hello {user?.username ?? 'Guest'}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;

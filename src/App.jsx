import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import './config/i18n';
import Home from './components/pages/Home';

Amplify.configure(awsconfig);

function App({ signOut }) {
  return (
    <div className='app-container'>
      <Home signOut={signOut} />
    </div>
  );
}

export default withAuthenticator(App);
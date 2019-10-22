import 'firebase/firestore';
import 'firebase/performance';
import React from 'react';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyDFmgI43Xu0lteH7LLU5HC4Ip9Qaxpauec',
  authDomain: 'main-kinzig-nerds.firebaseapp.com',
  databaseURL: 'https://main-kinzig-nerds.firebaseio.com',
  projectId: 'main-kinzig-nerds',
  storageBucket: 'main-kinzig-nerds.appspot.com',
  messagingSenderId: '481210735151',
  appId: '1:481210735151:web:874810fe90829fa945c4da',
  measurementId: 'G-WYN8SBHPQ0',
};

export function FirebaseProvider({ children }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
      {children}
    </FirebaseAppProvider>
  );
}

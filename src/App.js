import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Delay from './components/Delay';
import GlobalSpinner from './components/GlobalSpinner';
import Layout from './components/Layout';
import { FirebaseProvider } from './data';
import Pages from './pages';

export default function App() {
  return (
    <HelmetProvider>
      <FirebaseProvider>
        <Layout>
          <Suspense
            fallback={
              <Delay timeout={300}>
                <GlobalSpinner message="loading..." />
              </Delay>
            }
          >
            <Pages />
          </Suspense>
        </Layout>
      </FirebaseProvider>
    </HelmetProvider>
  );
}

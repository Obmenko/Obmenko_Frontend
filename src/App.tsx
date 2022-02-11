import React, {
  lazy, Suspense, FC,
} from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Switch, Route,
} from 'react-router-dom';
import '@/assets/styles/index.scss';
import { Ripple } from 'react-spinners-css';
import Layout from '@/utils/components/Layout';
import { ROUTES } from '@/const/routes';
import { ProtectedRoute } from './utils/components/ProtectedRoute';

const HomePage = lazy(() => import('@/pages/Home'));
const ExchangePage = lazy(() => import('@/pages/Exchange'));
const FAQPage = lazy(() => import('@/pages/FAQ'));
const RulesPage = lazy(() => import('@/pages/Rules'));
const AccountPage = lazy(() => import('@/pages/Account'));
const AccountPrivacySettingsPage = lazy(() => import('@/pages/AccountPrivacySettings'));
const AccountRequestsPage = lazy(() => import('@/pages/AccountRequests'));

const App: FC = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <Layout>
      <Suspense fallback={(
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'white',
        }}
        >
          <Ripple color="#2A4BC0" />
        </div>
          )}
      >
        <Switch>
          <Route path={ROUTES.EXCHANGE} component={ExchangePage} />
          <ProtectedRoute path={ROUTES.ACCOUNT} exact component={AccountPage} />
          <ProtectedRoute path={ROUTES.ACCOUNT_PRIVACY_SETTINGS} exact component={AccountPrivacySettingsPage} />
          <ProtectedRoute path={ROUTES.ACCOUNT_REQUESTS} exact component={AccountRequestsPage} />
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route path={ROUTES.FAQ} exact component={FAQPage} />
          <Route path={ROUTES.RULES} exact component={RulesPage} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;

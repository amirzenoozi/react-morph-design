import React, { lazy, Suspense } from 'react';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import './helpers/i18next-config';
import GlobalStyle from './theme/globalStyles';

const SamplePage = lazy(() => import('./pages/sample-page'))

const App: React.FC = () => {
  const history = useHistory();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={() => 'Loading...'}>
        <Switch>
          <Route exact path={`/`} component={SamplePage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

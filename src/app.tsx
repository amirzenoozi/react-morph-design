import React, { Suspense } from 'react';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import './helpers/i18next-config';


const App: React.FC = () => {
  const history = useHistory();

  return (
    <BrowserRouter>
      <Suspense fallback={() => 'Loading...'}>
        <Switch>
          <Route exact path={`/`} component={ () => <div>Sample Page</div> } />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

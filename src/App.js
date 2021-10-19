import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { 
  Home, 
  NewProduct
} from './pages/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.NEW_PRODUCT} component={NewProduct} />
      </Switch>
    </div>
  );
}

export default App;
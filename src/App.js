import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';
import Routes from './Routes'
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
        <main className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {Routes.map(route =>
                    // We need to redirect not allowed routes to home
                    route.redirect ? (
                        <Redirect
                            key={route.path}
                            from={route.path}
                            to="/"
                        />
                    ) : (
                        <Route
                            exact={route.exact}
                            key={route.path}
                            path={route.path}
                            component={route.component}
                        />
                    )
                )}
                </Switch>
            </Suspense>
        </main>
    </div>
  );
}

export default App;

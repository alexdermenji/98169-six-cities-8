import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Favourites from '../favourites/favourites';
import Login from '../login/login';
import Main from '../main/main';
import Page404 from '../page-404/page404';
import Room from '../room/room';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/privateRoute';
import {AuthorizationStatus} from '../../const';

type AppProps = {
  countriesQty: number;
};
function App({ countriesQty }: AppProps): JSX.Element {
  return  (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main countriesQty={countriesQty} />;
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favourites}
          render={() => <Favourites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />

        <Route path={AppRoute.Room} exact>
          <Room/>
        </Route>
        <Route >
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default App;

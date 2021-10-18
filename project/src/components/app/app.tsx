/* eslint-disable no-console */
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Main from '../main/main';
import Page404 from '../page-404/page404';
import Room from '../room/room';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/privateRoute';
import {AuthorizationStatus} from '../../const';
import { ApartmentOffer, CityOffer } from '../../types/offers-type';

type AppProps = {
  offers: CityOffer[]
};

function App({ offers }: AppProps): JSX.Element {
  const cityOffers: ApartmentOffer[] = [];

  offers.forEach((offer) => {
    cityOffers.push(...offer.offers);
  });


  return  (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main offers={cityOffers} allOffers={offers}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.Auth}
        >
          <Favorites data={offers}/>
        </PrivateRoute>
        <Route path={AppRoute.Room} exact>
          <Room offers= {cityOffers}/>
        </Route>
        <Route >
          <Page404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );

}

export default App;

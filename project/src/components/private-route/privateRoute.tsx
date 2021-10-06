import { Route, Redirect, RouteProps } from 'react-router';
import {AuthorizationStatus, AppRoute} from '../../const';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
  authorizationStatus: AuthorizationStatus
}
function PrivateRoute(props: PrivateRouteProps):JSX.Element{

  const {exact, path, children, authorizationStatus} = props;

  return(
    <Route exact={exact} path={path} render={()=> (authorizationStatus === AuthorizationStatus.Auth? children : <Redirect to={AppRoute.Login}/>)} />
  );}

export default PrivateRoute;

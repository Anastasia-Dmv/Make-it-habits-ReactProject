import React from "react";
import { Route, Redirect } from "react-router-dom";
import withRouterHOC from "./withRouterHOC";
import style from "./PrivateRoute.module.css";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? (
        <div className={style.mainContainer}>
          {/* <LeftSiteBar/> */}
          <Component {...props} />
          {/* <RightSiteBar/> */}
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default withRouterHOC(PrivateRoute);

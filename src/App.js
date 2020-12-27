import { useState } from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Topbar from "./Components/Topbar";
import HomePage from "./Containers/HomePage/HomePage";
import ProductsListPage from "./Containers/ProductsListPage/ProductsListPage";
import UserListPage from "./Containers/UserList/UserList";
import LoginPage from "./LoginPage/LoginPage";
import { ROUTE_ENDPOINTS } from "./utils/RouteEndpoints";

function App() {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus")
  );

  const onUserLoggedOut = () => {
    localStorage.setItem("loginStatus", false);
    setLoginStatus({ loginStatus: false });
  };

  const onUserLoggedIn = () => {
    localStorage.setItem("loginStatus", true);
    this.setState({ loginStatus: true });
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar loginStatus={loginStatus} onUserLoggedOut={onUserLoggedOut} />
        <main className="app_container">
          <Switch>
            <Route
              exact
              path={ROUTE_ENDPOINTS.ORDER_LIST}
              component={HomePage}
            />
            <Route
              exact
              path={ROUTE_ENDPOINTS.PRODUCT_LIST}
              component={ProductsListPage}
            />
            <Route
              exact
              path={ROUTE_ENDPOINTS.USER_LIST}
              component={UserListPage}
            />
            <Route
              exact
              path={ROUTE_ENDPOINTS.LOGIN_PAGE}
              component={LoginPage}
              render={() => (
                <LoginPage
                  loginStatus={loginStatus}
                  onUserLoggedIn={onUserLoggedIn}
                />
              )}
            />
            <Route
              exact
              Path="/"
              component={LoginPage}
              render={() => (
                <LoginPage
                  loginStatus={loginStatus}
                  onUserLoggedIn={onUserLoggedIn}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Components/Topbar.css";
import { ROUTE_ENDPOINTS } from "../utils/RouteEndpoints";

function Topbar(props) {
  console.log(props);
  return (
    <header className="top_bar">
      <div className="left_menu">
        <div className="logo_wrapper">
          <img
            src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
            alt="logo"
          />
          <p className="brand_name">Kafene</p>
        </div>
        <nav>
          <NavLink
            activeClassName="active_link"
            className="menu_item"
            exact
            to={ROUTE_ENDPOINTS.ORDER_LIST}
          >
            Orders
          </NavLink>
          <NavLink
            activeClassName="active_link"
            className="menu_item"
            to={ROUTE_ENDPOINTS.PRODUCT_LIST}
          >
            Products
          </NavLink>
          <NavLink
            activeClassName="active_link"
            className="menu_item"
            to={ROUTE_ENDPOINTS.USER_LIST}
          >
            Users
          </NavLink>
        </nav>
      </div>

      <Link
        className="menu_item"
        to={ROUTE_ENDPOINTS.LOGIN_PAGE}
        onClick={props.onUserLoggedOut}
      >
        Logout
      </Link>
    </header>
  );
}

export default Topbar;

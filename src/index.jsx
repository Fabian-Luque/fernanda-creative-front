// import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.min.css";
import "assets/styles/docs.css";

// Product Pages - START
// // auth
import Login from "views/auth/Login.jsx";
import Register from "views/auth/Register.jsx";
import Reset from "views/auth/Reset.jsx";
// // e-commerce
import Checkout from "views/e-commerce/Checkout.jsx";
import ECommerce from "views/e-commerce/ECommerce.jsx";
import Invoice from "views/e-commerce/Invoice.jsx";
import Product from "views/e-commerce/Product.jsx";
// // error
import Error404 from "views/error/Error404.jsx";
import Error500 from "views/error/Error500.jsx";
// // presentation
import Landing from "views/presentation/Landing.jsx";
import AboutUs from "views/presentation/AboutUs.jsx";
import ContactUs from "views/presentation/ContactUs.jsx";
// Product Pages - STOP

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* Product Pages - START */}
      {/* auth */}
      <Route
        path="/login"
        exact
        render={() => (
          <Fragment>
              <Login />
          </Fragment>
        )}
      />    
      <Route
        path="/register"
        exact
        render={() => (
          <Fragment>
              <Register />
          </Fragment>
        )}
      />
      <Route
        path="/reset"
        exact
        render={() => (
          <Fragment>
              <Reset />
          </Fragment>
        )}
      />
      {/* e-commerce */}
      <Route
        path="/checkout"
        exact
        render={() => (
          <Fragment>
              <Checkout />
          </Fragment>
        )}
      />
      <Route
        path="/e-commerce"
        exact
        render={() => (
          <Fragment>
              <ECommerce />
          </Fragment>
        )}
      />
      <Route
        path="/invoice"
        exact
        render={() => (
          <Fragment>
              <Invoice />
          </Fragment>
        )}
      />
      <Route
        path="/product"
        exact
        render={() => (
          <Fragment>
              <Product />
          </Fragment>
        )}
      />
      {/* error */}
      <Route
        path="/error-404"
        exact
        render={() => (
          <Fragment>
              <Error404 />
          </Fragment>
        )}
      />
      <Route
        path="/error-500"
        exact
        render={() => (
          <Fragment>
              <Error500 />
          </Fragment>
        )}
      />
      {/* presentation */}
      <Route
        path="/landing"
        exact
        render={() => (
          <Fragment>
              <Landing />
          </Fragment>
        )}
      />
      <Route
        path="/about-us"
        exact
        render={() => (
          <Fragment>
              <AboutUs />
          </Fragment>
        )}
      />
      <Route
        path="/contact-us"
        exact
        render={() => (
          <Fragment>
              <ContactUs />
          </Fragment>
        )}
      />
      {/* Product Pages - STOP */}
      <Redirect from="*" to="/e-commerce" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

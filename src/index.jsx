// import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.min.css";
import "assets/styles/docs.css";
// import NavbarComponents from "_docs/components/NavbarComponents2.jsx";

// Product Pages - START
// // admin
import Dashboard from "views/admin/Dashboard.jsx";
import Maps from "views/admin/Maps.jsx";
import Settings2 from "views/admin/Settings2.jsx";
import Tables from "views/admin/Tables.jsx";
// // auth
import Login1 from "views/auth/Login1.jsx";
import Register2 from "views/auth/Register2.jsx";
import Reset from "views/auth/Reset.jsx";
// // e-commerce
import Chat from "views/e-commerce/Chat.jsx";
import Checkout from "views/e-commerce/Checkout.jsx";
import ECommerce from "views/e-commerce/ECommerce.jsx";
import Invoice from "views/e-commerce/Invoice.jsx";
import Pricing from "views/e-commerce/Pricing.jsx";
import Product from "views/e-commerce/Product.jsx";
import Profile1 from "views/e-commerce/Profile1.jsx";
import Settings1 from "views/e-commerce/Settings1.jsx";
// // error
import Error404 from "views/error/Error404.jsx";
import Error500 from "views/error/Error500.jsx";
// // presentation
import Landing1 from "views/presentation/Landing1.jsx";
import Landing2 from "views/presentation/Landing2.jsx";
import AboutUs from "views/presentation/AboutUs.jsx";
import ContactUs from "views/presentation/ContactUs.jsx";
// Product Pages - STOP

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* Product Pages - START */}
      {/* admin */}
      <Route
        path="/dashboard"
        exact
        render={() => (
          <Fragment>
              <Dashboard />
          </Fragment>
        )}
      />
      <Route
        path="/maps"
        exact
        render={() => (
          <Fragment>
              <Maps />
          </Fragment>
        )}
      />
      <Route
        path="/settings-2"
        exact
        render={() => (
          <Fragment>
              <Settings2 />
          </Fragment>
        )}
      />
      <Route
        path="/tables"
        exact
        render={() => (
          <Fragment>
            
              <Tables />
            
          </Fragment>
        )}
      />
      {/* auth */}
      <Route
        path="/login-1"
        exact
        render={() => (
          <Fragment>
            
              <Login1 />
            
          </Fragment>
        )}
      />    
      <Route
        path="/register-2"
        exact
        render={() => (
          <Fragment>
            
              <Register2 />
            
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
        path="/chat"
        exact
        render={() => (
          <Fragment>
            
              <Chat />
            
          </Fragment>
        )}
      />
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
        path="/pricing"
        exact
        render={() => (
          <Fragment>
            
              <Pricing />
            
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
      <Route
        path="/profile-1"
        exact
        render={() => (
          <Fragment>
            
              <Profile1 />
            
          </Fragment>
        )}
      />
      <Route
        path="/settings-1"
        exact
        render={() => (
          <Fragment>
            
              <Settings1 />
            
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
        path="/landing-1"
        exact
        render={() => (
          <Fragment>
            
              <Landing1 />
            
          </Fragment>
        )}
      />
      <Route
        path="/landing-2"
        exact
        render={() => (
          <Fragment>
            
              <Landing2 />
            
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

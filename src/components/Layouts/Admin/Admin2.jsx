import React from "react";
import PropTypes from "prop-types";
// components
import Sidebar from "../../Sidebar/Sidebar.jsx";
import NavbarSearchUser from "../../Navbars/NavbarSearchUser.jsx";
import HeaderUser from "../../Headers/Admin/HeaderUser.jsx";
import FooterAdmin from "../../Footers/Admin/FooterAdmin.jsx";

export default function Admin2({ sidebar, navbar, header, footer, children }) {
  return (
    <>
      <Sidebar {...sidebar} />
      <div className="relative md:ml-64 bg-blueGray-200">
        <NavbarSearchUser {...navbar} />
        <HeaderUser {...header} />
        <div className="px-4 md:px-10 mx-auto w-full -mt-24">
          {children ? (
            children
          ) : (
            <div className="relative w-full h-500-px bg-white text-center flex flex-col items-center justify-center content-center border border-solid border-blueGray-200 rounded p-40">
              <h1 className="text-6xl font-normal leading-normal mt-0 mb-2">
                Here will be your content, instead of this box!
              </h1>
              <p>
                You can add one of the width utility classes to make it a little
                smaller.
              </p>
            </div>
          )}
          <FooterAdmin {...footer} />
        </div>
      </div>
    </>
  );
}

Admin2.defaultProps = {
  sidebar: {},
  navbar: {},
  header: {},
  footer: {},
};

Admin2.propTypes = {
  // props to pass to the Sidebar component
  sidebar: PropTypes.object,
  // props to pass to the NavbarSearchUser component
  navbar: PropTypes.object,
  // props to pass to the HeaderUser component
  header: PropTypes.object,
  // props to pass to the FooterAdmin component
  footer: PropTypes.object,
};

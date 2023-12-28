import React from "react";
import dropdownnavbar from "_texts/misc/dropdowns/dropdownnavbar.js";

const textProps = {
  color: "transparent",
  type: "absolute",
  logoText: "Fernanda Creative",
  logoLink: { to: "/" },
  leftLinks: [
    {
      href: "#pablo",
      children: (
        <>
          <i className="lg:text-blueGray-300 text-blueGray-500 far fa-file-alt text-lg leading-lg mr-2" />{" "}
          Docs
        </>
      ),
    },
  ],
  socials: [
  ],
  rightLinks: [
    {
      dropdown: true,
      ...dropdownnavbar,
    },
  ],
};
export default textProps;

// import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// sections
import Hero9 from "components/Sections/ECommerce/Heroes/Hero9.jsx";
import Pricing3 from "components/Sections/ECommerce/Pricing/Pricing3.jsx";
import Blogs7 from "components/Sections/ECommerce/Blogs/Blogs7.jsx";
import Testimonials2 from "components/Sections/ECommerce/Testimonials/Testimonials2.jsx";
// components
import NavbarLinks from "components/Navbars/NavbarLinks.jsx";
import HeaderImageTitleButtonCenter from "components/Headers/ECommerce/HeaderImageTitleButtonCenter.jsx";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.jsx";
import FooterSmall from "components/Footers/Landing/FooterSmall.jsx";
// texts as props
import navbarlinkslanding1 from "_texts/presentation/navbars/navbarlinkslanding1.js";
import headerimagetitlebuttoncenter from "_texts/e-commerce/headers/headerimagetitlebuttoncenter.js";
import hero9 from "_texts/e-commerce/heroes/hero9.js";
import pricing3ecommerce1 from "_texts/e-commerce/pricing/pricing3ecommerce1.js";
import blogs7 from "_texts/e-commerce/blogs/blogs7.js";
import pricing3ecommerce2 from "_texts/e-commerce/pricing/pricing3ecommerce2.js";
import testimonials2 from "_texts/e-commerce/sections/testimonials2.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function ECommerce() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding1} />
      <HeaderImageTitleButtonCenter {...headerimagetitlebuttoncenter} />
      <div className="container mx-auto px-4">
        <Hero9 {...hero9} />
        <Pricing3 {...pricing3ecommerce1} />
        <Blogs7 {...blogs7} />
        <Pricing3 {...pricing3ecommerce2} />
      </div>
      <Testimonials2 {...testimonials2} />
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}

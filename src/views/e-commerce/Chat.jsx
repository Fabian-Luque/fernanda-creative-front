import React from "react";
import { useLocation } from "react-router-dom";

// sections
// components
import NavbarLinks from "components/Navbars/NavbarLinks.jsx";
import HeaderImageTitleSmallCenter from "components/Headers/Auth/HeaderImageTitleSmallCenter.jsx";
import CardChatPeople from "components/Cards/ECommerce/CardChatPeople.jsx";
import CardChatDiscussion from "components/Cards/ECommerce/CardChatDiscussion.jsx";
import PreFooterLarge from "components/PreFooters/PreFooterLarge.jsx";
import FooterSmall from "components/Footers/Landing/FooterSmall.jsx";
// texts  as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import headerimagetitlesmallcenterchat from "_texts/e-commerce/headers/headerimagetitlesmallcenterchat.js";
import cardchatpeople from "_texts/e-commerce/cards/cardchatpeople.js";
import cardchatdiscussion from "_texts/e-commerce/cards/cardchatdiscussion.js";
import prefooterlarge from "_texts/presentation/prefooters/prefooterlarge.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function Chat() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <NavbarLinks {...navbarlinkslanding2} />
      <HeaderImageTitleSmallCenter {...headerimagetitlesmallcenterchat} />
      <section className="relative bg-blueGray-100 py-4 z-2">
        <div className="container mx-auto px-4 -mt-24">
          <div className="flex flex-wrap justify-center">
            <div className="px-4 relative w-full lg:w-4/12">
              <CardChatPeople {...cardchatpeople} />
            </div>
            <div className="pl-6 lg:text-right lg:self-center px-4 relative w-full lg:w-8/12">
              <CardChatDiscussion {...cardchatdiscussion} />
            </div>
          </div>
        </div>
      </section>
      <PreFooterLarge {...prefooterlarge} />
      <FooterSmall {...footersmall} />
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";
// components
import Button from "../../Elements/Button.jsx";
import Input from "../../Elements/Input.jsx";
import Checkbox from "../../Elements/Checkbox.jsx";

export default function CardRegister({
  title,
  subtitle,
  inputs,
  socials,
  button,
  checkbox,
  forgotPassword,
  createAccount,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100">
        <div className="rounded-t-lg bg-blueGray-800 mb-0 px-6 py-6">
          <div className="text-center mb-3">
            <h6 className="text-blueGray-300 text-sm font-bold">{title}</h6>
          </div>
          <div className="text-center">
            {socials.map((prop, key) => (
              <Button
                {...prop.button}
                key={key}
                color={prop.icon}
                fullWidth={false}
              >
                <i className={"mr-1 fab fa-" + prop.icon}></i> {prop.icon}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-6">
          <div className="text-blueGray-500 text-center mb-3 font-bold">
            <small>{subtitle}</small>
          </div>
          <form>
            {inputs.map((prop, key) => {
              return (
                <div key={key} className="relative w-full">
                  <label className="block uppercase text-blueGray-700 text-xs font-bold mb-2 ml-1">
                    {prop.label}
                  </label>
                  <Input {...prop.input} />
                </div>
              );
            })}
            <div className="mt-2 inline-block">
              <Checkbox {...checkbox} />
            </div>

            <div className="text-center mt-6">
              <Button {...button} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

CardRegister.defaultProps = {
  inputs: [],
  button: {},
};

CardRegister.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // It is represetnted by the props you
  // can pass to our Button component element
  button: PropTypes.object,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf([
        "facebook",
        "twitter",
        "instagram",
        "github",
        "pinterest",
        "youtube",
        "vimeo",
        "slack",
        "dribbble",
        "reddit",
        "tumblr",
        "linkedin",
      ]),
      // It is represetnted by the props you
      // can pass to our Button component element
      // for example you can add an onClick handler
      button: PropTypes.object,
    })
  ),
  // It is represetnted by the props you
  // can pass to our Checkbox component element
  checkbox: PropTypes.object,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      // It is represetnted by the props you
      // can pass to our Input component element
      // NOTE: if you wish to generate a textarea, you will need to pass
      // // // inside this object >> type: "textarea"
      // // // full example >> input: { type: "textarea" }
      input: PropTypes.object,
    })
  ),
};

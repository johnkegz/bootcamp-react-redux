
import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const Page = (props) =>{
  const {children} = props;
  return (
    <div>
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

Page.defaultProps = {
  children: null
};
Page.propTypes = {
  children: PropTypes.element
};
export default Page;

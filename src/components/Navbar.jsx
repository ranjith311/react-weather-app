import React from "react";
import "../bootstrap.min.css";
import "../bootstrap.css";

import { BsFillCloudSunFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <div className="container-fluid">

          <span className="navbar-brand">
            Weather <BsFillCloudSunFill className="mb-2" />
          </span>

        </div>
      </nav>
    </>
  );
};

export default Navbar;

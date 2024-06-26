import { React, useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { NavLink, Link } from "react-router-dom";
import Loader from "react-js-loader";
function SignUp() {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return (
    <>
      {loader ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          {" "}
          <div className="SignUpEnclosex">
            <div className="SignUp">
              <Link to="/" className="descSignUp logo tab">
                MovieBox
              </Link>
              <div className="leftAlign  justify  flex_Column">
                <label className="leftAlign">Full Name</label>
                <div className="leftAlign">
                  <input
                    type="email"
                    className="input"
                    placeholder="ar@g.com"
                  ></input>
                </div>
              </div>
              <div className="leftAlign justify flex_Column">
                <label className="leftAlign">Email</label>
                <div className="leftAlign">
                  <input
                    type="email"
                    className="input"
                    placeholder="ar@g.com"
                  ></input>
                </div>
              </div>
              <div className="leftAlign  justify  flex_Column">
                <label className="leftAlign">Password</label>
                <div className="leftAlign">
                  <input
                    type="email"
                    className="input"
                    placeholder="**********"
                  ></input>
                </div>
              </div>
              <div className="ButtonEncloser ">
                <Link to="/" className="buttonSignUp tabButton">
                  Sign Up
                </Link>
              </div>
              <div className="leftAlign justify flex">
                <div className="leftAlign size">Already have an account? </div>
                <Link className="SignIn_in_SignUp tab" to="/SignIn">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SignUp;

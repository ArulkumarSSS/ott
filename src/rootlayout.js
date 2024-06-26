import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader";
import { Outlet } from "react-router-dom";
import Header from "./React Components/Header/Header";
import Footer from "./React Components/footer/Footer";
function Rootlayout() {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {loader ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Rootlayout;

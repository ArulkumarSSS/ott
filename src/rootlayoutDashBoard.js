import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader";
import { Outlet } from "react-router-dom";
import DashboardLeft from "./React Components/DashBoard/dashBoardLeft/DashboardLeft";
function RootlayoutDashBoard() {
   const [loader, setLoader] = useState(false);
   const [show, setShow] = useState(true);

  //  useEffect(() => {
  //    setLoader(true);

  //    setTimeout(() => {
  //      setLoader(false);
  //    }, 500);
  //  }, []);
  return (
     <>
      {loader ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <> <div className="dashboard">
      <DashboardLeft />
      <div className="DashBoardContents">
        <Outlet />
      </div>
    </div></>)}</>
   
  );
}

export default RootlayoutDashBoard;

import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader";
import Row from "./Row";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import request from "../../Addiitional components/Requests/Home Requests/request";
import "./row.css";
import "./rowbodies.css";
import RowBodyBanner from "./RowBodyBanner";
const LoaderReducer = require("../../Redux/Feature/loader").LoaderReducer;

function RowBodies() {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(true);
  const user = useSelector((state) => state.load);
  
  useEffect(() => {
    // setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);
  return (
    <>
      {false ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          <div className="bodyRow">
            <RowBodyBanner />
            {/* <Row
              title="Netflix Originals"
              fetchUrl={request.fetchNetflixOriginals}
              isLarge={true}
            />
            <Row
              title="Top Rated"
              fetchUrl={request.fetchTrending}
              isLarge={true}
            /> */}
            <Row
              title="Action Movies"
              fetchUrl={request.fetchActionMovies}
              isLarge={true}
            />
            <Row
              title="Comedy Movies"
              fetchUrl={request.fetchComedyMovies}
              isLarge={true}
            />
            <Row
              title="Horror Movies"
              fetchUrl={request.fetchHorrorMovies}
              isLarge={true}
            />
            <Row
              title="Romance Movies"
              fetchUrl={request.fetchRomanticMovies}
              isLarge={true}
            />
            <Row
              title="Documetaries"
              fetchUrl={request.fetchDocumentaries}
              isLarge={false}
            />
          </div>
        </>
      )}
    </>
  );
}

export default RowBodies;

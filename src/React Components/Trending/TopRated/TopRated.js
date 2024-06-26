import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import APIRequest from "../../../axios";
import "./TopRated.css";
import request from "../../../Addiitional components/Requests/Home Requests/request";
const base_url_img = "https://image.tmdb.org/t/p/original";
let editor;

function TopRated() {
   const IdReducer = require("../../../Redux/Feature/MovieIdStore").IdReducer;
   const Navigate = useNavigate();
   const dispatch = useDispatch();
   const userload = useSelector((state) => state.load);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    });
  }, []);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function access() {
      setLoader(true);
      editor = await APIRequest(request.fetchtopRated);
      setMessage(editor.data.results);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
      console.log(editor.data.results[0].name);
    }
    access();
  }, []);
  return (
    <>
      {loader ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          <div className="TopTrending">
            <div className="HeadingTrend">Top Rated Shows</div>
            <div className="Trendlist">
              {message?.map((a) => (
                <img
                  onClick={() => {
                    Navigate(`/Movies/${a.id}`);
                    dispatch(IdReducer.changer(a.id));
                  }}
                  className="row_Posters_trend row_Posters_trend"
                  src={`${base_url_img}${a.poster_path}`}
                  alt={a.name}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TopRated;

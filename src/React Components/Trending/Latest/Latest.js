import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import APIRequest from "../../../axios";
import Loader from "react-js-loader";
import "./Latest.css";
import request from "../../../Addiitional components/Requests/Home Requests/request";
const base_url_img = "https://image.tmdb.org/t/p/original";
let editor;
function Latest() {
  const IdReducer = require("../../../Redux/Feature/MovieIdStore").IdReducer;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.load);
  const [message, setMessage] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function access() {
      setLoader(true);
      editor = await APIRequest(request.fetchTrendingMovies);
      setMessage(editor.data.results);
      console.log(editor.data.results[0].name);
     setTimeout(() => {
       setLoader(false);
     }, 2000);
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
          {" "}
          <div className="TopTrending">
            <div className="HeadingTrend">Latest Movies</div>
            <div className="Trendlist">
              {message?.map((a) => (
                <img
                  onClick={() => {
                    Navigate(`/Movies/${a.id}`);
                    dispatch(IdReducer.changer(a.id));
                    console.log(user);
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

export default Latest;

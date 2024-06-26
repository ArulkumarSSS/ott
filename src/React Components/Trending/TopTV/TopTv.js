import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import APIRequest from "../../../axios";
import "./TopTv.css";
import request from "../../../Addiitional components/Requests/Home Requests/request";
const base_url_img = "https://image.tmdb.org/t/p/original";
let editor;
function TopTv() {
   const IdReducer = require("../../../Redux/Feature/MovieIdStore").IdReducer;
   const Navigate = useNavigate();
   const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
   const userload = useSelector((state) => state.load);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    async function access() {
       setLoader(true);
      editor = await APIRequest(request.fetchTrendingTv);
      setMessage(editor.data.results);
      console.log(editor.data.results[0].name);
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
    access();
  }, []);
  return (
    <div className="TopTrending">
      <div className="HeadingTrend">Top Trending TV Shows this Week</div>
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
  );
}

export default TopTv;

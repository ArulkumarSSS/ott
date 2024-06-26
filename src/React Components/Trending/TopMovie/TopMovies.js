import { React, useEffect, useState } from "react";
import APIRequest from '../../../axios'
import Loader from "react-js-loader";
import './TopMovies.css'
import { useDispatch, useSelector } from "react-redux";
import request from "../../../Addiitional components/Requests/Home Requests/request";
const base_url_img = "https://image.tmdb.org/t/p/original";
let editor;
const postReducer = require("../../../Redux/Feature/TabSwitcher").postReducer;

function TopMovies() {
const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState(null);
       const dispatch = useDispatch();
       const user = useSelector((state) => state.post);
   useEffect(() => {
    async function access()
    {
      setLoader(true);
     editor = await APIRequest(request.fetchTrendingMovies);
     setMessage(editor.data.results);
    console.log(editor.data.results[0].name);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    }
     access();
     dispatch(postReducer.changer(2));
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
            <div className="HeadingTrend">Top Trending Movies this Week</div>
            <div className="Trendlist">
              {message?.map((a) => (
                <img
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

export default TopMovies
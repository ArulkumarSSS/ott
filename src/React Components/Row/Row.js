import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader";
import axios from "axios";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./row.css";
const base_url_img = "https://image.tmdb.org/t/p/original";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";
let ha;
const LoaderReducer = require("../../Redux/Feature/loader").LoaderReducer;


function Row({ fetchUrl, title, isLarge }) {
const IdReducer = require("../../Redux/Feature/MovieIdStore").IdReducer;
    const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.load);
  console.log(user.updater);
    console.log(user.loadme);
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setLoader(true);
      axios
        .get("https://api.themoviedb.org/3" + fetchUrl, {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        })
        .then((response) => {
          ha = response;
          setMovies(ha.data.results);
          // dispatch(LoaderReducer.changerX());
        });
      setLoader(false);
  }, [fetchUrl]);
  return (
    <>
      {false? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          {" "}
          <div className="row">
            <div className="title">{title}</div>
            <div className="row_Poster flex_row">
              {movies.map((movies) => (
                <img
                  onClick={() => {
                    Navigate(`/Movies/${movies.id}`);
                    dispatch(IdReducer.changer(movies.id));
                    console.log(user);
                  }}
                  className="row_Posters"
                  src={`${base_url_img}${
                    isLarge ? movies.poster_path : movies.backdrop_path
                  }`}
                  alt={movies.name}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Row;

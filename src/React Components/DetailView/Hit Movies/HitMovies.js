import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./HitMovies.css";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";
const base_url_img = "https://image.tmdb.org/t/p/original";
const IdReducer = require("../../../Redux/Feature/MovieIdStore").IdReducer;

function HitMovies() {
   const Navigate = useNavigate();
   const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US`, {
        headers: {
          accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const ha = response.data;
        console.log(ha.results);
        setPosts(ha.results);
      });
  }, []);

  return (
    <div className="HitMovies">
      <div className="row_HitMovies">
        <div className="title_HitMovies">Recommended</div>
        <div className="row_Poster_HitMovies flex_Column">
          {posts?.map((movies) => (
            <img
              onClick={() => {
                Navigate(`/Movies/${movies.id}`);
                dispatch(IdReducer.changer(movies.id));
                // console.log(user);
              }}
              className="row_Posters_HitMovies"
              src={`${base_url_img}${movies.poster_path}`}
              alt={movies.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HitMovies;

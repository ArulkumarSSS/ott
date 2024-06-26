import axios from "axios";
import { React, useEffect, useRef, useState } from "react"; 
import { NavLink, Link, useNavigate } from "react-router-dom"
import Loader from "react-js-loader";
import { useDispatch, useSelector } from "react-redux";
import "../Row/RowBodyBanner.css";
import Aos from "aos";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";
let ha,x;
const LoaderReducer = require("../../Redux/Feature/loader").LoaderReducer;
const IdReducer = require("../../Redux/Feature/MovieIdStore").IdReducer;

function RowBodyBanner() {
  
const user = useSelector((state) => state.load);
const Navigate = useNavigate();
const dispatch = useDispatch();
  console.log(user.updater)
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(true);
     const [movies, setMovies] = useState(null);
 useEffect(() => {
  //  Aos.init({ duration: 5000});
 }, []);
    // useEffect(() => {
    //   setLoader(true);

      setTimeout(() => {
        setLoader(false);
      }, 500);
    // }, []);
 
  
useEffect(() => {
   if(movies===null){
    console.log(movies)
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
        headers: {
          accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("jhakuj");
        setMovies(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
        dispatch(LoaderReducer.changer(1));
      });
     
      console.log(movies);
}
  
}
 
,[]);
  useEffect(() => {
   const interval = setInterval(() => {
         axios
           .get(
             "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
             {
               headers: {
                 accept: "application/json",
                 Authorization: token,
               },
             }
           )
           .then((response) => {
             setMovies(
               response.data.results[
                 Math.floor(Math.random() * response.data.results.length)
               ]
             );
             
             // dispatch(LoaderReducer.changer(1));
             console.log(response);
           });
           x=2;
    }, 6000);
return () => clearInterval(interval);
  }, [movies]);

  return (
    <>
      {false ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          <header
            className="banner"
            // style={{
            //   backgroundSize: "cover",
            //   backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
            //   backgroundPosition: "center",
            // }}
          >
            <div className="bg"></div>
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
              alt="Not Found"
            />
            <div className="banner_content">
              <div className="headingRowPoster">{movies?.title}</div>
              <div className="Banner_buttons">
                <div
                  className="Banner_button"
                  onClick={() => {
                    Navigate(`/Movies/${movies.id}`);
                    dispatch(IdReducer.changer(movies.id));
                    console.log(user);
                  }}
                >
                  Play
                </div>
                <div
                  className="Banner_button"
                  onClick={() => {
                    Navigate(`/Movies/${movies.id}`);
                    dispatch(IdReducer.changer(movies.id));
                    console.log(user);
                  }}
                >
                  My List
                </div>
              </div>
              <div className="overview">{movies?.overview}</div>
            </div>
          </header>
        </>
      )}
    </>
  );
}

export default RowBodyBanner;

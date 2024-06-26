import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import '../DetailView/DetailView.css'
import { AiOutlineSearch } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Loader from "react-js-loader";

import axios from "axios";
import HitMovies from "./Hit Movies/HitMovies";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";
const base_url_img = "https://image.tmdb.org/t/p/original";
function DetailView() {
  const { strMeal } = useParams();
   const [close, setClose] = useState(true);
   
   const [loader, setLoader] = useState(false);
   const [posts, setPosts] = useState([]);
  // console.log(strMeal)
  const user = useSelector((state) => state.id);
  const [message, setMessage] = useState([user.post]);
  console.log(user);
   console.log(user.post);
  // setMessage(user.post);
 
if (!(user.post == message)){
  setMessage(user.post);
}
  function invert() {
    setClose(!close);
  }
  // useEffect(() => {
  //   setMessage(user.post);
  //   console.log(user.post);
  //   console.log(message);
  // }, [user.post]);
  useEffect(() => {
      setLoader(true);
      console.log(message);
    axios
      .get(`https://api.themoviedb.org/3/movie/${message}`, {
        headers: {
          accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const ha = response.data;
        console.log(ha);
        setPosts(ha);
        console.log(ha)
        setLoader(false);
      });
  }, [user]);
 

  return (
    <>
      {false ? (
        <div className="centerizer">
          <Loader type="box-rectangular" size={50} />
        </div>
      ) : (
        <>
          {" "}
          <div className="Movie_Details">
            <div className="Detail_img">
              {loader ? (
                <div className="centerizer">
                  <Loader type="box-rectangular" size={50} />
                </div>
              ) : (
                <>
                  {" "}
                  <div className="Detail_encloser">
                    <div className="encloseViewer">
                      {/* <div className="blur"></div>
                <div className="titleinvideo">{posts.title}</div> */}
                      <div className="svgDet " onClick={invert}>
                        <FaPlay
                          className={"svgDetail tab " + (close ? " " : " hide")}
                        />
                        <FaPause
                          className={"svgDetail tab " + (close ? " hide" : " ")}
                        />
                      </div>
                      <img
                        className="row_Posters_details"
                        src={`${base_url_img}${posts.poster_path}`}
                        alt={posts.name}
                      />
                    </div>
                    {/* <div className="title">Description:</div>
                    <div className="overView flexRow">{posts.overview}</div> */}
                  </div>
                </>
              )}

              <div className="HitMovies">
                <HitMovies />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailView;

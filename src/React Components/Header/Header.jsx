import { React, useEffect, useRef, useState } from "react";
import "./header.css";
import Loader from "react-js-loader";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Aos from "aos";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjYwNzI4MzYwMjk3ZTE5ODViYTAyYjVlNWJlN2VmNCIsInN1YiI6IjY2MDM3ODg0NjJmMzM1MDE3ZDU1MjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dLm8a_YdOnt2sPWZVEc7dwbL7RdbxBv-5uxCakR959Y";
let ha;
let setter;
const IdReducer = require("../../Redux/Feature/MovieIdStore").IdReducer;

function Header() {
  let refer = useRef();
  const user = useSelector((state) => state.load);
    const Navigate = useNavigate();
   const dispatch = useDispatch();
   const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [close, setClose] = useState(true);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(message)
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${message}&include_adult=false&language=en-US&page=1`
        ,
        {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        ha = response.data.results;
        console.log(ha)
        setPosts(ha);
        console.log(posts);
      });
  }, [message]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) setClose(false);
      else setClose(true);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 70) setClose(false);
        else setClose(true);
      });
    };
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {
    function closeresults(e) {
      if (e.target != refer.current) {
        setOpen(false);
      }
    }
    document.body.addEventListener("click", closeresults);
    return () => document.body.removeEventListener("click", closeresults);
  }, [open]);

  function front() {
    if (open == false) {
      setOpen(true);
    }
  }
  function invert() {
    setClose(!close);
  }

  const HandleChange = (event) => {
    setter = event.target.value;
    console.log(setter);
    setMessage(setter);
    console.log(message);
    setTimeout(myStopFunction, 0);
    function myStopFunction() {
      setMessage(setter);
      console.log(message);
    }
    if (event.target.value == "") {
      setMessage(null);
    }
  };
  return (
    <>
      {loader ? (
        <div className="centerizer">
          <Loader type="bubble-scale" />
        </div>
      ) : (
        <>
          <div
            data-aos="flip-left"
            className={"flex head" + (close ? " closing" : "")}
          >
            <Link to="/" className="logo tab">
              MovieBox
            </Link>
            <div className={"search flex" + (close ? " closex" : "")}>
              <div className="enclose">
                <div className="search">
                  <div className="iconsearcher">
                    <AiOutlineSearch className="svg" />
                  </div>
                  <input
                    ref={refer}
                    className="searchers"
                    type="text"
                    onClick={front}
                    onChange={HandleChange}
                    placeholder="Search for  movie, TV show or person..."
                  />
                </div>
                <div className={"ccardXsearchers" + (open ? "x" : "")}>
                  {posts?.map((a, i) => (
                    <div className="encloserr" key={i}>
                      <div
                        onClick={() => {
                          Navigate(`/Movies/${a.id}`);
                          dispatch(IdReducer.changer(a.id));
                          console.log(user);
                        }}
                        className="flex results"
                      >
                        <div className="iconsearchersearchers  ">
                          <AiOutlineSearch />
                        </div>
                        {/* <img className="aaa" src={a.strMealThumb} alt="cover image" /> */}
                        <div className="result">{a.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/Trending"
              className={"tab textWhite" + (close ? " closex" : "")}
            >
              Movies
            </Link>
            <Link
              to="/AboutUs"
              className={"tab textWhite" + (close ? " closex" : "")}
            >
              About Us
            </Link>
            <Link
              to="/ContactUs"
              className={"tab textWhite" + (close ? " closex" : "")}
            >
              Contact Us
            </Link>
            <Link to="/SignIn" className={"icons" + (close ? " close" : "")}>
              <IoMdLogIn className="" />
            </Link>

            <div className={"icons " + (close ? "" : " open")} onClick={invert}>
              <IoReorderThreeOutline className="backgroundSVG" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;

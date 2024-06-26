import React from 'react';
import './footer.css'
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import store from "../../Redux/Store/store";
// import { postReducer } from '../../Redux/Feature/TabSwitcher';
// import postReducer from "../../Redux/Feature/TabSwitcher";
const postReducer = require("../../Redux/Feature/TabSwitcher").postReducer;
function Footer () {
   const Navigate = useNavigate();
    const dispatch = useDispatch();
     const user = useSelector((state) => state.post);
  return (
    <div className="Footer">
      <div className="category">
        <div className="HeadingFoot">Company</div>
        <div className="topics">
          <ul className="list">
            <Link to="/" className="tab li">
              Home
            </Link>
            <Link to="/AboutUs" className="tab li">
              About Us
            </Link>
            <Link to="/ContactUs" className="tab li">
              Contact Us
            </Link>
            <Link className="tab li">Movies</Link>
          </ul>
        </div>
      </div>
      <div className="category">
        <div className="HeadingFoot">Top Category</div>
        <div className="topics">
          <ul className="list">
            <Link
              to="/Trending"
              onClick={() => {
                dispatch(postReducer.changer(1));
                console.log(user);
              }}
              className="tab li"
            >
              Top Trending
            </Link>
            <Link
              to="/Trending/Latest"
              onClick={() => {
                dispatch(postReducer.changer(5));
                console.log(user);
              }}
              className="tab li"
            >
              Latest
            </Link>
            <Link
              to="/Trending/PopularTVShows"
              onClick={() => {
                dispatch(postReducer.changer(6));
                console.log(user);
              }}
              className="tab li"
            >
              Popular Shows
            </Link>
            <Link
              to="/Trending/TopRated"
              onClick={() => {
                dispatch(postReducer.changer(7));
                console.log(user);
              }}
              className="tab li"
            >
              Top Rated
            </Link>
          </ul>
        </div>
      </div>
      <div className="category">
        <div className="HeadingFoot">My Account</div>
        <div className="topics">
          <ul className="list">
            <Link
              to="/SignIn"
              onClick={() => {
                // dispatch(postReducer.changer(7));
                // console.log(user);
              }}
              className="tab li"
            >
              Sign In
            </Link>
            {/* <li>Movies</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

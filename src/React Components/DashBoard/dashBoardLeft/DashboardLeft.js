import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader"; 
import { Link } from "react-router-dom";
import "./dashboardleft.css";
import { useDispatch, useSelector } from "react-redux";

function DashboardLeft() {
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(true);
 const [posts, setPosts] = useState();
 const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);

    setTimeout(() => {
      setLoader(false);
    }, );
  }, []);
 
  const user = useSelector((state) => state.post);
  console.log(user.post);
  useEffect(() => {
    viewer(user.post);
  }, [user.post]);

  function viewer(index) {
    console.log(user);
    setPosts(index);
  }

  return (
    <>
      {loader ? (
        <></>
      ) : (
        <>
          <div className="DashIcon">
            <div className="menuDash">Menu</div>
            <ul className="flex_Column dash">
              <Link
                to="/Trending"
                onClick={() => viewer(1)}
                className={
                  posts === 1 ? "active_tab background" : "tab background"
                }
              >
                Top Trending
              </Link>
              <Link
                to="/Trending/Latest"
                onClick={() => viewer(5)}
                className={
                  posts === 5 ? "active_tab background" : "tab background"
                }
              >
                Latest
              </Link>
              <Link
                to="/Trending/TrendingMovies"
                onClick={() => viewer(2)}
                className={
                  posts === 2 ? "active_tab background" : "tab background"
                }
              >
                Trending Movies
              </Link>
              <Link
                to="/Trending/TrendingPeople"
                onClick={() => viewer(4)}
                className={
                  posts === 4 ? "active_tab background" : "tab background"
                }
              >
                Trending People
              </Link>
              <Link
                to="/Trending/TrendingTV"
                onClick={() => viewer(3)}
                className={
                  posts === 3 ? "active_tab background" : "tab background"
                }
              >
                Trending TV Shows
              </Link>
              <Link
                to="/Trending/PopularTVShows"
                onClick={() => viewer(6)}
                className={
                  posts === 6 ? "active_tab background" : "tab background"
                }
              >
                Popular
              </Link>
              <Link
                to="/Trending/TopRated"
                onClick={() => viewer(7)}
                className={
                  posts === 7 ? "active_tab background" : "tab background"
                }
              >
                Top Rated
              </Link>
              <Link
                to="/Trending/OnTheAir"
                onClick={() => viewer(8)}
                className={
                  posts === 8? "active_tab background" : "tab background"
                }
              >
                On The Air
              </Link>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default DashboardLeft;

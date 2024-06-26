import { React, useEffect, useState } from "react";
import APIRequest from "../../../axios";
import Loader from "react-js-loader";
import "./TopPeople.css";
import request from "../../../Addiitional components/Requests/Home Requests/request";
const base_url_img = "https://image.tmdb.org/t/p/original";
let editor;
function TopPeople() {
  const [message, setMessage] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function access() {
      setLoader(true);
      editor = await APIRequest(request.fetchTrendingPeople);
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
          <div className="TopTrending">
            <div className="HeadingTrend">Top Poeple this Week</div>
            <div className="Trendlist">
              {message?.map((a) => (
                <div className="enclose">
                  <img
                    className="row_Posters_trend_people"
                    src={`${base_url_img}${a.profile_path}`}
                    alt={a.name}
                  />
                  <div className="HeadingTrend_people_Name">{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default TopPeople;

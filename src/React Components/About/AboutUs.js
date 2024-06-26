import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader";

import './aboutus.css';
function AboutUs () {
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
      setLoader(true);

      setTimeout(() => {
        setLoader(false);
      }, 500);
    }, []);
  return (
    <>
      {loader ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
         <div className="AboutUs">
      <img
        className="contact"
        src={'https://netflixo.vercel.app/images/head.png'}
        alt="cover image"
      />
      <div className="contactText">About Us</div>
      <div className="aboutLower grid">
        <div className="aboutusLower">
          <div className="LeftAbout">
            <div className="welcomeAbout">Welcome to our Netflixo</div>
            <div className="aboutus">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className='userView'>
            <div className="detailAbout">
              <div className="count"><h3>10K</h3></div>
              <div className="intro"><h3>Listed Movies</h3></div>
              <div className="aboutDesc">
                Lorem Ipsum is simply dummy text of the printing and
              </div>
            </div>
            <div className="detailAbout">
              <div className="count"><h3>8K</h3></div>
              <div className="intro"><h3>Listed Shows</h3></div>
              <div className="aboutDesc">
                Lorem Ipsum is simply dummy text of the printing and
              </div>
            </div>
          </div>
          </div>
          <div className="AboutImage">
            <img
              className="contact"
              src={'https://netflixo.vercel.app/images/about2.jpg'}
              alt="cover image"
            />

          </div>
        
      </div>
    </div>
        </>
      )}
   </>
  );
}

export default AboutUs;

import { React, useEffect, useRef, useState } from "react";
import Loader from "react-js-loader";
import "./contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {
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
          <div className="contact">
            <img
              className="contact"
              src={"https://netflixo.vercel.app/images/head.png"}
              alt="cover image"
            />
            <div className="contactText">Contact Us</div>
            <div className="detail">
              <div className="contactDet">
                <div className="iconEnclose">
                  <div className="iconsearchersearch  ">
                    <MdOutlineAttachEmail />
                  </div>
                </div>
                <div className="text">E-Mail Us</div>
                <div className="Desc">
                  ar@g.com Interactively grow backend ideas for cross-platform
                  models.
                </div>
              </div>
              <div className="contactDet">
                <div className="iconEnclose">
                  <div className="iconsearchersearch  ">
                    <LuPhoneCall />
                  </div>
                </div>
                <div className="text">Call Us</div>
                <div className="Desc">
                  +91 62 829 020 22 Distinctively exploit optimal alignments for
                  intuitive bandwidth.
                </div>
              </div>
              <div className="contactDet">
                <div className="iconEnclose">
                  <div className="iconsearchersearch  ">
                    <FaLocationDot />
                  </div>
                </div>
                <div className="text">Location</div>
                <div className="Desc">
                  Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;

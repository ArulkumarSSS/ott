import { React, useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Loader from "react-js-loader";
import * as XLSX from "xlsx";
function SignIn() {
 
    let setter;
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
      setLoader(true);

      setTimeout(() => {
        setLoader(false);
      }, 500);
    }, []);


     const HandleChange = (event) => {
       setter = event.target.value;
       console.log(setter);
       
 setter = event.target.result;
 const wb = XLSX.read(
   "C:\\Users\\2232688\\OneDrive - Cognizant\\Documents\\Book.xlsx",
   { type: "binary" }
 );
  const sheet = wb.Sheets["Sheet1"];
  const data = XLSX.utils.sheet_to_json(sheet);
     console.log(XLSX.utils.sheet_to_txt(sheet));
    console.log(data);
  // const workbook = XLSX.read(
  //   "C:\\Users\\2232688\\OneDrive - Cognizant\\Documents\\Book.xlsx"
  // );
  //  var excelFile = XLSX.readFileSync(
  //    "C:\\Users\\2232688\\OneDrive - Cognizant\\Documents\\Book.xlsx"
  //  );
     };
  return (
    <>
      {loader ? (
        <div className="centerizer">
          <Loader className="loader" size={50} type="box-rectangular" />
        </div>
      ) : (
        <>
          {" "}
          <div className="SignUpEnclosex">
            <div className="SignUp">
              <Link to="/" className="descSignUp logo tab">
                MovieBox
              </Link>

              <div className="leftAlign justify flex_Column">
                <label className="leftAlign">Email</label>
                <div className="leftAlign">
                  <input
                    onChange={HandleChange}
                    type="email"
                    className="input"
                    placeholder="ar@g.com"
                  ></input>
                </div>
              </div>
              <div className="leftAlign  justify  flex_Column">
                <label className="leftAlign">Password</label>
                <div className="leftAlign">
                  <input
                    onChange={HandleChange}
                    type="email"
                    className="input"
                    placeholder="**********"
                  ></input>
                </div>
              </div>
              <div className="ButtonEncloser ">
                <Link to="/" className="buttonSignUp tabButton tab">
                  Sign In
                </Link>
              </div>
              <div className="leftAlign justify flex">
                <div className="leftAlign size">Already have an account? </div>
                <Link className="SignIn_in_SignUp tab" to="/SignUp">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SignIn;

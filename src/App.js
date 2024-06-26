import './App.css';
import { React, useEffect, useRef, useState } from "react";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import AboutUs from './React Components/About/AboutUs';
import Header from './React Components/Header/Header';
import RowBodies from './React Components/Row/RowBodies';
import RowBodyBanner from './React Components/Row/RowBodyBanner';
import Contact from './React Components/contact/Contact';
import Footer from './React Components/footer/Footer';
import Rootlayout from './rootlayout';
import Row from './React Components/Row/Row';
import Dashboard from './React Components/DashBoard/Dashboard';
import RootlayoutDashBoard from './rootlayoutDashBoard';
import DashBoardHome from './React Components/DashBoard/dashboardHome/DashBoardHome';
import TrendingMovies from "./React Components/Trending/TopTrending/TopTrending";
import TopTv from './React Components/Trending/TopTV/TopTv';
import TopPeople from './React Components/Trending/TopPeople/TopPeople';
import Latest from './React Components/Trending/Latest/Latest';
import TopTrending from './React Components/Trending/TopTrending/TopTrending';
import TopMovies from './React Components/Trending/TopMovie/TopMovies';
import Popular from './React Components/Trending/Popular/Popular';
import TopRated from './React Components/Trending/TopRated/TopRated';
import OnTheAir from './React Components/Trending/OnTheAir/OnTheAir';
import SignUp from './React Components/SignOut/SignUp';
import SignIn from './React Components/SignIn/SignIn';
import DetailView from './React Components/DetailView/DetailView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<RowBodies />} />
      <Route path="/AboutUs" exact element={<AboutUs />} />
      <Route path="/ContactUs" exact element={<Contact />} />
      <Route path="/SignIn" exact element={<SignIn />} />
      <Route path="/SignUp" exact element={<SignUp />} />
      <Route path="/Movies/:id" exact element={<DetailView />}></Route>
      <Route path="/Trending" element={<RootlayoutDashBoard />}>
        <Route index element={<TopTrending />} />
        <Route path="/Trending/TrendingMovies" exact element={<TopMovies />} />
        <Route path="/Trending/TrendingTV" exact element={<TopTv />} />
        <Route path="/Trending/TrendingPeople" exact element={<TopPeople />} />
        <Route path="/Trending/PopularTVShows" exact element={<Popular />} />
        <Route path="/Trending/TopRated" exact element={<TopRated />} />
        <Route path="/Trending/OnTheAir" exact element={<OnTheAir />} />
        <Route path="/Trending/Latest" exact element={<Latest />} />
      </Route>
      {/* <Route path="Category" element={<Footer />} />
      <Route path="/main" element={<Main />}>

        <Route index element={<Header />} />
      </Route>
      <Route path="/header/:an" exact element={<MainHome />} />

      <Route path="/main/:strMeal" exact element={<Main />} />
      <Route path="/midWay/:strMeal" exact element={<MidHandler />} />
      <Route path="/Category/:strCategory" exact element={<Categorywise />} /> */}
    </Route>
  )
);

function App() {
    useEffect(() => {
      window.scrollTo(10, 0);
    }, []);
  return (
    <div className="App">
      {/* <SignUp/>
      <SignIn/> */}
      <RouterProvider router={router} />
      {/* <RowBodyBanner />;

      <RowBodies/>
      <Header />
      <Contact/>
      <Footer/> */}

    </div>
  );
}

export default App;

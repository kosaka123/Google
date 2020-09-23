import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Searchs from "./Searchs";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home_inputContainer">
          <Searchs hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;

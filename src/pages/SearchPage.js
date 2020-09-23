import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  Search,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import response from "../response";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import Searchs from "./Searchs";
import useGoogleSearch from "./useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //const data = response;
  //Live API Call
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div class="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div class="searchPage_headerBody">
          <Searchs hideButtons />
          <div class="searchPage_options">
            <div class="searchPage_optionsLeft">
              <div class="searchPage_option">
                <Search />
                <Link to="/all">All</Link>
              </div>
              <div class="searchPage_option">
                <Description />
                <Link to="/all">News</Link>
              </div>
              <div class="searchPage_option">
                <Image />
                <Link to="/all">Images</Link>
              </div>
              <div class="searchPage_option">
                <LocalOffer />
                <Link to="/all">shopping</Link>
              </div>
              <div class="searchPage_option">
                <Room />
                <Link to="/all">maps</Link>
              </div>
              <div class="searchPage_option">
                <MoreVert />
                <Link to="/all">more</Link>
              </div>
            </div>
            <div class="searchPage_optionsRight">
              <div class="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div class="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div class="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} ∆
              </a>
              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;

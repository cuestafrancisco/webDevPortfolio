import React, { useState, useEffect } from "react";
import axios from "axios";
import Pdf from "../../editable-stuff/resume.pdf";
import mepic from "../../editable-stuff/mepic.jpg";

//imports data from configuration.json
import {
  aboutHeading,
  aboutDescription,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
} from "../../editable-stuff/configurations.json";

// useState setDataState
const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);


  //variable handleRequest returns axios get request
  const handleRequest = (e) => {
    axios
      .get(instaLink + instaUsername + instaQuerry)
      .then((response) => {
        // handle success
       // console.log(response.data.graphql);
        return setInstaProfilePic(
          response.data.graphql.user.profile_pic_url
        );
      })
      .catch((error) => {
        // handle error
        setShowInsta(false);
        //return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid">
      <div className="container container-fluid p-4">
        <div className="row">
       
        <div className="col-5 d-none d-lg-block align-self-center">
              < img 
                    className="border border-secondary rounded-circle"
                    src = {mepic}
                    style={{width: 200, height: 200, borderRadius: 600/ 2}}
              />
        </div>
   
          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
                    <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
                    <p className="lead text-center">{aboutDescription}</p>
                    {resumeURL && (
                      <p className="lead text-center">
                        <a
                          className="btn btn-outline-dark btn-lg"
                          href={Pdf}
                          target="_blank"
                          rel="noreferrer noopener"
                          role="button"
                          aria-label="Resume/CV"
                        >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

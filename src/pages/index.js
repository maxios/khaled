import React, {useEffect} from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const element = `
      <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="khaledmaher">
        <a class="LI-simple-link" href='https://eg.linkedin.com/in/khaledmaher?trk=profile-badge'>
          Khaled Maher
        </a>
      </div>
    `

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);
    document.getElementById("linkedin-profile-badge").innerHTML = element;

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <Layout>
      <SEO title="Khaled Maher | Software Engineer" />
      <div id="linkedin-profile-badge" style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 0px 52px -20px grey",
        border: "2px solid lightblue"
      }}></div>
    </Layout>
  )
}

export default IndexPage

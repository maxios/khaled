import React from "react";

import SEO from "../components/seo"
import "@styles/index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '@organisms/sidebar';

config.autoAddCss = false

library.add(faBars);

const IndexPage = () => {

  return (
    <div className="">
      <SEO title="Khaled Maher | Software Engineer" />
      <Sidebar/>
      <div className="corner_menu">
        <div className="corner_menu_icon">
          <FontAwesomeIcon style={{width: 40, height: 40}} icon={faBars} />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

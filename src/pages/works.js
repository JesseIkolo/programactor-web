import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Project} from '../components/molecule'

const Works = ({ data }) => {
  return(
    <>
    <Layout>
      <SEO title="Works" />
      <div className="cosmos-grid-container inverse">
        <div className="home-slider fit">
          <div className="clear-fix"></div>
          <h1 className="supra">
            It not only about works, but love !
          </h1>
          <p>
            Bieng a part of our client's vision make us proud. 
          </p>
          
        </div>
      </div>
      <div className="cosmos-grid-container inverse ">
          <div className="wks fit">
            <Project
              projectThumb=""
              clientName="Client Brand Name"
              projectSubDescription="This is the project sub description, and it will be write with less than 70 characters"
            />
            <Project
              projectThumb=""
              clientName="Client Brand Name"
              projectSubDescription="This is the project sub description, and it will be write with less than 70 characters"
            />
            <Project
              projectThumb=""
              clientName="Client Brand Name"
              projectSubDescription="This is the project sub description, and it will be write with less than 70 characters"
            />
            <Project
              projectThumb=""
              clientName="Client Brand Name"
              projectSubDescription="This is the project sub description, and it will be write with less than 70 characters"
            />
          </div>
        </div>
    </Layout>
    </>
  )
}

Works.propTypes = {
  data: PropTypes.string,
}

Works.defaultProps = {
  data: ``,
}


export default Works

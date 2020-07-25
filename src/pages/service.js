import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {TextButton, BeautifulLink} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'


const Service = ({ data }) => {
  return(
  <>
    <Layout>
    <SEO title="Programactor.design — Works" />
    <div className="cosmos-grid-container inverse">
      <div className="home-slider">
        <div className="clear-fix"></div>
        <h1 className="mega">
          We help your business deliver
          the best <u>user experience</u> to <u>customers</u>, <u>employees</u> and <u>partners</u>.
        </h1>
        <p>
          We believe in digital beauty and design
          and we are convinced that thanks to this 
          two-dimensional thought, we can offer 
          simple solutions to complex problems. 
        </p>
      </div>
      
    </div>
      <div className="cosmos-grid-container wwa-items inverse no-padding">
      <div className="wwa-item">
        <div className="illustration">

          <CosmoIcon alt={true} icon="loop"/>
        </div>
        <h2>Lead by Design <br/> Thinking</h2>
        <p>We use solving-methods for  difficult and chaotic problems. Not just to design an easthetical solution, we build solutions from digital problems around humans.</p>
      </div>
      <div className="wwa-item">
        <div className="illustration">
        <CosmoIcon alt={true} icon="focus"/>
        </div>
        <h2>Focus on vision, not only on product</h2>
        <p>Beyond your product, we support you in your vision. We invest in a proposal of the best tools to perpetuate the longevity and scalability of your product.</p>
      </div>
    </div>
    <div className="cosmos-grid-container no-marging wwa-items inverse no-padding-bottom">
      <div className="wwa-item">
        <div className="illustration">
        <CosmoIcon alt={true} icon="computer"/>
        </div>
        <h2>
          A multi-disciplinary team working closely with you
        </h2>
        <p>We are a whole team made of data analyst, marketers, etc. We rigorously cultivates empathy and optimism to always do the must we can to help your product growth.</p>
      </div>
      <div className="wwa-item">
        <div className="illustration">
        <CosmoIcon alt={true} icon="partner"/>
        </div>
        <h2>We love collaboration and sharing our experience </h2>
        <p>In worries of implement methodologies focused on design thinking, we create a collaborative universe where all are invited to put into play and practice their experiences.</p>
      </div>
      <div className="wwa-item">
        <div className="illustration">
        <CosmoIcon alt={true} icon="africa"/>
        </div>
        <h2>Help to build a shining Africa, for a better world</h2>
        <p>The best way to prectict africa’s future is to create it, invent it. That’s why in our phylosophy, we invest ourseleves in social and sustainable development projects that help Africa to be more and more stronger.</p>
      </div>
    </div>
    <div className="cosmos-grid-container inverse no-padding-bottom">
        <div className="ab">
          <div className="wwd">
            <h2>What we do</h2>
              <ul>
                <li>
                  <BeautifulLink dash={true} to="" text="Brand design"/>
                </li>
                <li>
                  <BeautifulLink dash={true} to="" text="Product design"/>
                </li>
                <li>
                  <BeautifulLink dash={true} to="" text="Web & Mobile Development & Integration" />
                </li>
                <li>
                  <BeautifulLink dash={true} to="" text="Research & Analytics" />
                </li>
                <li>
                  <BeautifulLink dash={true} to="" text="Support" />
                </li>
              </ul>
             <TextButton 
             to="./services" 
             text="Explore More" 
             background={true} 
             icon="ion-ios-arrow-right" />
          </div>
          <div classname="ab-ill">

          </div>
        </div>
    </div>
  </Layout>
  </>
)
  }
  Service.propTypes = {
    data: PropTypes.string,
  }
  
  Service.defaultProps = {
    data: ``,
  }
export  default Service

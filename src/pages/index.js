import React from 'react'
// import { graphql, Img } from 'gatsby'
import Layout from '../components/layout'
import {TextButton, Notification, Para} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
    
    return (
      <>
        <Layout>
          <SEO title="Hello User"/>
          <div className="cosmos-section">
            <div className="cosmos-grid-container home-slider end">
              <div className="text-content">
                <h1 className="supra colored-text">
                  Designing premium Brand, Interface, and Developing <br/> users-friendly Mobile/Web <br/> Apps since 2015.
                </h1>
                <div className="mention">
                  <TextButton 
                    icon="ion-ios-arrow-right" 
                    text="Let's create something together"
                    background={true}
                    to="https://api.whatsapp.com/send?phone=237658338081&text=Bonjour%20a%20vous%20Programactor."
                    />
                  <div className="call-us">or just call us at <b>00 237 658 33 80 81</b></div>
                </div>
                <div className="clear-fix"></div>
              </div>
            </div>
          </div>
          <div className="cosmos-section">
            <div className="cosmos-grid-container home-slider center">
              <div className="text-content">
                <h1 className="supra colored-text">
                  We help tech companies, startups and organizations growth by providing to them meaningful digital solutions to transform their ideas into real products or services.  
                </h1>
               
                <div className="clear-fix"></div>
              </div>
            </div>
          </div>

          <div className="cosmos-section semi-height  padded-64">
            <div className="cosmos-grid-container home-slider left">
              <div className="home-slider-header">
                <h1 className="supra left">
                We are A multi-disciplinary team, made of designers, developers, illustrators, marketers, working closely with you
                </h1>
              </div>
              <ul className="clarify two">
                <li>
                  
                <div className="illustration">
              <CosmoIcon icon="loop"/>
              </div>
              <h2>Lead by Design <br/> Thinking</h2>
              <p>We use solving-methods for  difficult and chaotic problems. Not just to design an easthetical solution, we build solutions from digital problems around humans.</p>
                </li>
                <li>
                <div className="illustration">
              <CosmoIcon icon="focus"/>
              </div>
              <h2>Focus on vision, not only on product</h2>
              <p>Beyond your product, we support you in your vision. We invest in a proposal of the best tools to perpetuate the longevity and scalability of your product.</p>
            
                </li>

                <li>
                <div className="illustration">
              <CosmoIcon icon="africa"/>
              </div>
              <h2>Help to build a shining Africa, for a better world</h2>
              <p>The best way to prectict africa’s future is to create it, invent it. That’s why in our phylosophy, we invest ourseleves in social and sustainable development projects that help Africa to be more and more stronger.</p>
                 </li>
              </ul>
            </div>
          </div>

          <div className="cosmos-grid-container hcl">
          <h1>We create <br/>brands people loves.</h1>
                <div className="hcl-contents">
                <h2>
                We make every experience people have with your business meaningful. We build brands with purpose, brands that impact the lives of millions, and brands that last.
                </h2>
                <div className="items">
                  <div className="item">
                    
                  </div>
                </div>
                </div>
          </div>
        </Layout>
      </>
      )
  }

export default IndexPage

// export const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiProject {
//       edges {
//         node {
//           id
//           ProjectTitle
//           ProjectDescription
//         }
//       }
//     }
//   }
// `
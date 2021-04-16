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
          <div className="cosmos-grid-container">
            <div className="home-slider end">
              <h1 className="intro-loop">
              Designing premium Brand, Interface, and Developing <br/> users-friendly Mobile/Web <br/> Apps since 2015.
              </h1>
              <Para>
                <TextButton 
                icon="ion-ios-arrow-right" 
                text="Let's create something together"
                background={true}
                to="https://wa.link/85brqs"
                />
              </Para>
              <span className="call-us">or just call us at <b>00 237 658 33 80 81</b></span>
              <div className="clear-fix"></div>
              <Notification
                title="Cookie Policy"
                content="We use cookies to boost your experience on our website and ensure it functions properly.
                We hope you are OK with that."
                readmore={true}
                readmoreTo="/Policy"
                notyStyle="fixed"
              />
            </div>
          </div>
          <div className="cosmos-grid-container wwa">

                <h1>Who we<br/> are ?</h1>
                <div className="wwa-text">
                <Para className="Para">
                Programactor is an human centered design and digital brand studio based in Douala, in Cameroon. We have 10+ devs and design experts on board and 5+ years of experience in building digital projects from scratch or refreshing existing ones.
      We keep up with the times, always sticking to the newest trends in design and development.
                </Para>
                <TextButton 
                icon="ion-ios-arrow-right" 
                text="Discover our Story"
                background={false}/>
                </div>
          </div>
          <div className="cosmos-grid-container wwa-items">
          <div className="wwa-item">
              <div className="illustration">
              <CosmoIcon icon="loop"/>
              </div>
              <h2>Lead by Design <br/> Thinking</h2>
              <Para>We use solving-methods for  difficult and chaotic problems. Not just to design an easthetical solution, we build solutions from digital problems around humans.</Para>
            </div>
            <div className="wwa-item">
              <div className="illustration">
              <CosmoIcon icon="focus"/>
              </div>
              <h2>Focus on vision, not only on product</h2>
              <Para>Beyond your product, we support you in your vision. We invest in a proposal of the best tools to perpetuate the longevity and scalability of your product.</Para>
            </div>
          </div>
          <div className="cosmos-grid-container wwa-items">
            
            <div className="wwa-item">
              <div className="illustration">
              <CosmoIcon icon="computer"/>
              </div>
              <h2>
                A multi-disciplinary team working closely with you
              </h2>
              <Para>We are a whole team made of data analyst, marketers, etc. We rigorously cultivates empathy and optimism to always do the must we can to help your product growth.</Para>
            </div>
            <div className="wwa-item">
              <div className="illustration">
              <CosmoIcon icon="africa"/>
              </div>
              <h2>Help to build a shining Africa, for a better world</h2>
              <Para>The best way to prectict africa’s future is to create it, invent it. That’s why in our phylosophy, we invest ourseleves in social and sustainable development projects that help Africa to be more and more stronger.</Para>
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
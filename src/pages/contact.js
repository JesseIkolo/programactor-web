import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import {TextButton, BeautifulLink} from '../components/molecule'
import {CosmoIcon} from '../components/cosmoIcon'
import {Conversation, Progressive} from "../components/cosmoConv"



// console.log("Jesse sausya",data.conversation.interactions)
const Contact = ({ data }) => {
const JSON =  require("../components/mooks/interactions.json")

  return(
  <>
    <Conversation type='progressive'>
        <Progressive
          conversation={JSON.conversation.interactions}
        /> 
    </Conversation> 
   {/* <Footer/> */}
  </>
)
  }
  Contact.propTypes = {
    data: PropTypes.string,
  }
  
  Contact.defaultProps = {
    data: ``,
  }
export  default Contact

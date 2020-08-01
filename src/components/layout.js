/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
// import anime from 'animejs/lib/anime.es.js';

import "./layout.css"

class Layout extends React.Component {
  
  constructor(props){
    super(props);
    // this.children
    this.state ={
      data : ''
    }
    
  }
  
  componentDidMount(){
    console.log('Ok ')
    var pool_array = document.querySelectorAll(".pool"),
     revealer_array = document.querySelectorAll(".revealer"),
     introText_array = document.querySelectorAll(".introText"),
     innerText_array = document.querySelectorAll(".innerText");
    var i=0;
    console.log(pool_array)

    for(i=0; i<pool_array.length; i++){
      console.log("height : ",pool_array[i].offsetHeight, "Scrool Height : ", pool_array[i].scrollHeight);
      // N'oublit pas scroll update
    }
  }
  
  render(){
    return(
      <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header siteTitle={'data.site.siteMetadata.title'} />
      <div className="cosmos-content">
         <main className="">{this.props.children}</main>
      <Footer/>
      </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
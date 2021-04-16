/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";

import Header from "./header"
import Footer from "./footer"
// import anime from 'animejs/lib/anime.es.js';

import "./layout.css"

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,'');
  }
}


class Layout extends React.Component {
  
  constructor(props){
    super(props);
    // this.children
    this.state ={
      data : '',
    }
    
  }

  

  componentDidMount(){
    // alert(this.props.inversed)
    if(this.props.inversed){
      addClass(document.querySelector('header'), "inversed")
      addClass(document.querySelector('.cosmos-content'), "inversed")

    }
  }

  


  
  
  render(){

    return(
      <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      
      <div className="cosmos-content inverse-alt" ref={this.inversed}>
         <Header siteTitle={'data.site.siteMetadata.title'} />
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
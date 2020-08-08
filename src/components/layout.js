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
let pool_array;
let lastScrollY = 0;
let ticking = false;
class Layout extends React.Component {
  
  constructor(props){
    super(props);
    // this.children
    this.state ={
      data : '',
    }
    
  }
  componentDidMount(){
    console.log('Loaded');
    // window.addEventListener('scroll', this.handleScroll)
    pool_array = document.querySelectorAll(".pool");
  }

  scrollRef = React.createRef();
  
  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.scrollRef.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });
   
      ticking = true;
    }
    console.log(ticking, lastScrollY)
  };

  listener=()=>{
    var i=0;
    
    pool_array.forEach(el => {

      if(i==0){
        if( window.scrollY > window.pageYOffset - el.offsetHeight)console.log(window.scrollY,window.pageYOffset,">",el.pageYOffset - el.offsetHeight);
        
      }
      i++
    });
    return window.scrollY
  }

  getScrollPos(el) {

  }
  setScrollPos(el,pos) {

  }

  
  
  render(){

    return(
      <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header siteTitle={'data.site.siteMetadata.title'} />
      <div className="cosmos-content" ref={this.scrollRef}>
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
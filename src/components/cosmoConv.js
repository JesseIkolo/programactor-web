/**
 * cosmoCov component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "./conversation.css"
import "./globals.css"
import "../assets/fonts/font-styles.css"
import "../assets/fonts/ionicons.css"
import {CosmoIcon} from "./cosmoIcon"
import {Conversationheader} from "./cosmoMolecule"

// console.log("conversationHeader ----->", Conversationheader)

const Conversation = ({ children, type}) => {


  return (
   <div className="cc-interface">
      <div className="cc-grid">
      {
         type === 'progressive' ? (
            <div className="cc-content progressive">
               <Conversationheader
                  title="Entrons en contact !"
                  subtitle="Laissez-nous vos informations et un message"
               />
               <div className="cc-main">
                  {children}
               </div>
            </div>
         ) : (
            <div className="cc-content">
               <h2>Conversation Template not ready !</h2>
            </div>
         )
      }
      </div>
    </div>
  )
}
Conversation.propTypes = {
   children: PropTypes.node.isRequired,
   title : PropTypes.string,
   subtitle : PropTypes.string,
   type : PropTypes.string,
   url : PropTypes.string
 }
 
 Conversation.defaultProps = {
   title : ``,
   subtitle : ``,
   type : ``,
   url : ``,
  }

  class Progressive extends React.Component {
     
   constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.data = this.props.conversation;

      this.goToSlide = this.goToSlide.bind(this);
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);

      this.state = {
            activeIndex: 0
         };
   }

    nextEl(e) {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      console.log(e);
    }

    toggle() {
      this.setState({addClass: !this.state.addClass});
    }

    goToSlide(index) {
      this.setState({
        activeIndex: index
      });
    }
  
    goToPrevSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { conversation } = this.props;
      let dataLength = conversation.length;
  
      if (index < 1) {
        index = dataLength;
      }
  
      --index;
  
      this.setState({
        activeIndex: index
      });
    }
  
    goToNextSlide(e) {
      e.preventDefault();
  
      let index = this.state.activeIndex;
      let { conversation } = this.props;
      let dataLength = conversation.length - 1;
  
      if (index === dataLength) {
        index = -1;
      }
  
      ++index;
  
      this.setState({
        activeIndex: index
      });
    }
   
   render(){
   return(
      <div className="cc-progressive">
         <div className="cc-navigation">
            {
               this.data.map(
               (data, dataindex) => 
                  data.pipe === "choice" ? (
                     <div className="cc-navigation-labels">
                              {data.choices.map(
                                 (d, i) =>
                                 <>
                                 {
                                    d.selected ? (
                                       <>
                                       <div className="cc-labels">
                                          {data.question.label}
                                       </div>
                                       <div className="cc-choices">
                                          <span className="cc-choice selected">{d.value}</span>
                                       </div>
                                       </>
                                    ): null
                                 }
                                 </>
                              )}
                     </div>
                     ) : 
                  data.pipe === "textbox" ?
                     (
                        <>
                           {
                              data.response === "not set" ? 
                                 (
                                    <></>
                                 ):
                                 (
                                    <div className="cc-navigation-labels">
                                       <div className="cc-label">{data.question.label}</div>
                                       <div className="cc-response">{data.response}</div>
                                    </div>
                                 )
                           }
                     </>
                     ):null
               )
            }
         </div>
         <form className="cc-progressive-form">
            {
               this.data.map(
                  (data, index) =>
                     <ProgressiveInput 
                        key={index}
                        index={index}
                        activeIndex={this.state.activeIndex}
                        data={data}
                     />
               )
            }
            <div role="button" className="cc-el-button" onKeyDown={e => this.goToNextSlide(e)} onClick={e => this.goToNextSlide(e)}>
               <CosmoIcon icon="arrow-right" h="22" w="22"/>
            </div>
         </form>
      </div>
   )}
  }

  const ProgressiveInput =({index, data, activeIndex}) => {
     return(
      <div 
      // className={dataindex===0 ? ("cc-progressive-form-el actived"):("cc-progressive-form-el")} 
      className={
         index === activeIndex
            ? "cc-progressive-form-el actived"
            : "cc-progressive-form-el"
      }
      data-actived={index}>
         <h3>{data.question.value}</h3>
            {
               data.pipe==="textbox" ? 
               (
                  <div className="cc-el">
                        <input type="text" name={data.question.label}/>
                  </div>
               ):
               data.pipe==="choice" ?
               (
               <div className="cc-el">
                     {data.choices.map(
                                 (d, i) =>
                                 <div className="cc-checkbox">
                                    <input type="checkbox" name={d.value}/>
                                    <span className="cc-checkmark"></span>
                                    <label for={d.value}>{d.value}</label>
                                 </div>
                              )}
               </div>
               )
               :null
            }
            </div>
     )
  }

export  { Conversation, Progressive}

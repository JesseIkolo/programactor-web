
import PropTypes from "prop-types"
import React from "react"
import {TextButton,ContactInfo,BeautifulLink,Tag, Container} from '../components/molecule'
import anime from 'animejs/lib/anime.es.js';
import VizSensor from 'react-visibility-sensor';

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

class Footer extends React.Component{
   constructor(props){
      super(props);
      // this.state = {
      //    isVisible: false
      //  }
   }
// var derniere_position_de_scroll_connue = 0;
// var ticking = false;

//    var el = document.getElementById("footer")
//    console.log(el.scrollTop);

//    function faireQuelqueChose(position_scroll) {

//       var animateEl = document.querySelectorAll(".pool");
//       console.log(animateEl)

//       var i = 0;
//       for (i = 0; i < animateEl.length; i++) {
//          console.log('elemt', animateEl[i])
//          anime({
//             targets: animateEl[i],
//             translateY: ['100px', 0],
//             opacity: ['0', '1'],
//             duration: 1000,
//             delay: i * 300,
//             easing: 'cubicBezier(0.91,0.02,0.52,0.7)',
//             complete: function () {
//                // var lp = this.classList.add("pooled");
//                console.log(this.animatables[0].target.classList.add("pooled"))
//             }
//          });
//       }
//    }

// window.addEventListener('scroll', function (e) {
//    derniere_position_de_scroll_connue = window.scrollY;
//    if (!ticking) {
//       // if(window.scrollY > el.scrollTop || window.scrollY < el.scrollTop + el.element.getBoundingClientRect().height){
//       // window.requestAnimationFrame(function() {
//       //    faireQuelqueChose(derniere_position_de_scroll_connue);
//       //    ticking = false;
//       // });
//       // }
//    }
//    ticking = true;
// });

state = {
   isVisible: false
 }

handleAlternate = (visible, alternator) => {
   var alternator = document.querySelector('.inverse-alt');

   if(visible){
      addClass(alternator,'alternate');
   }
   else{
      removeClass(alternator,'alternate');
   }
}

handleViz = (isVisible) => {
   if(this.state.isVisible){
     
      this.setState({isVisible: false})
   }else{
      
      this.setState({isVisible: true})
   }
}
introRef = React.createRef();

introTextAnimation(ref, visible) {
   this.handleAlternate(visible);
   var animation;

   if (visible) {
      // Wrap every letter in a span
      var textWrapper = document.querySelectorAll('.ml11 .letters');
      textWrapper.forEach(element => {
         element.innerHTML = element.textContent.replace(/[^\x00-\x20]/g, "<div class='letter'>$&</div>");

      });
      animation = anime.timeline({
            loop: 1,
            delay: 3000
         })
         .add({
            targets: '.ml11 .text-wrapper .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 30 * (i + 1)
         })
         .add({
            targets: ['.' + ref.introRef.className + ' .intro-pool p',
               '.' + ref.introRef.className + ' .intro-pool a'
            ],
            translateY: ['50px', 0],
            opacity: ['0', '1'],
            easing: "cubicBezier(0.91,0.02,0.52,0.7)",
            duration: 700,
            delay: (el, i) => 300 * (i + 1),
            complete : () => {
               console.log(this.ref)
            }
         })
         
   }
}
  render(){
 return(
<VizSensor
   partialVisibility
      onChange={(isVisible) => {
      // this.setState({imgViz: isVisible});
      this.introTextAnimation(this.refs, isVisible);}}>
 <div className="footer" >
   
      <div className="cosmos-grid-container">
         <div className="hire" ref="introRef">
            <h1 class="ml11 supra">
            <span class="text-wrapper">

               <span class="letters">
                  Have a projet, a product 
               </span>
               <br/>
               <span class="letters">
                  or a services in mind ? 
               </span>
            </span>
            </h1>

            <div className="hire-text intro-pool">

               <p>
                  Old or new, We will be proud to talk about it, and implement your vision.
               </p>
               <TextButton
               icon="ion-ios-arrow-right"
               text="Let's create something together"
               background={true}
               to="https://wa.link/85brqs"/>
            </div>
         </div>
      </div>
   
      <div className="separator"></div>
      <div className="cosmos-grid-container footer-linkgroup">
         <div className="link-group pool">
            <h3 >
               <u>Human centered design</u> and <u>digital brand</u> agency based in Douala, Cameroun.
            </h3>
            <Tag
               for="Brand Design"
               background={true}
            />
            <Tag
               for="Product Design"
               background={true}
            />
            <Tag
               for="Web & Mobile Development"
               background={true}
            />
            <Tag
               for="Research & Analytics"
               background={true}
            />
         </div>
         <div className="link-group pool">
            <h3 >Contact Us —</h3>
            <ContactInfo
               title="A meet at office ?"
               text="Rue des Princes, Bali,"
               subText="Douala 1er, Littoral, Cameroun."
            />
            <ContactInfo
               title="Want to mail us ?"
               text="hello@programactor.com"
            />
            <ContactInfo
               title="Or join our team ?"
               text="carreer@programactor.com"
            />
            <ContactInfo
               title="Maybe a call/whatsapp ?"
               text="00237 669 22 79 76"
            />
         </div>
         <div className="link-group pool">
            <h3 >Useful Links</h3>
               <BeautifulLink
                  text="Home"
                  to=""/>
                  <BeautifulLink
                  text="Works"
                  to="./works"/>
                  <BeautifulLink
                  text="About Us"
                  to="./aboutus"/>
                  <BeautifulLink
                  text="Services"
                  to=""/>
                  <BeautifulLink
                  text="Contact Us"
                  to=""/>
                  <h3 >Owner Projects</h3>
                  <BeautifulLink
                  text="One Touch Labs"
                  to=""/>
                   <BeautifulLink
                  text="Bongo"
                  to=""/>
                  <BeautifulLink
                  text="nzembo"
                  to=""/>
                  <BeautifulLink
                  text="Koteka"
                  to=""/>
                  <BeautifulLink
                  text="Kolia"
                  to=""/>
                  <BeautifulLink
                  text="Kolala"
                  to=""/>
           </div>
         <div className="link-group pool">
            <h3 >Social Networks</h3>
            <BeautifulLink
               text="Dribbble"
               to=""/>
               <BeautifulLink
               text="Instagram"
               to=""/>
               <BeautifulLink
               text="Twitter"
               to=""/>
               <BeautifulLink
               text="Linked In"
               to=""/>
               <BeautifulLink
               text="Behance"
               to=""/>
               <BeautifulLink
               text="Facebook"
               to=""/>
                <BeautifulLink
               text="Messenger"
               to=""/>
               <BeautifulLink
               text="Whatsapp Pro"
               to="https://wa.link/85brqs"/>
         </div>
      </div>
      <div className="cosmos-grid-container">
         <p className="copyright pool">
            © Programactor.design 2020. All rights reserved.<br/>
            Programactor.design is the brand of Programactor Inc. company registered in Cameroon.
         </p>
      </div>
  
  </div>
  </VizSensor>

)}
}


export default Footer

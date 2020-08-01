
import PropTypes from "prop-types"
import React from "react"
import {TextButton,ContactInfo,BeautifulLink,Tag} from '../components/molecule'
import anime from 'animejs/lib/anime.es.js';


const Footer = ({ siteTitle }) =>{
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

  
 return(
 <div className="inverse-alt footer" data-sal="slide-up"
 data-sal-delay="300"
 data-sal-easing="ease"id="footer" data-sal="slide-up">
      <div className="cosmos-grid-container">
         <div className="hire">
            <h1>
               You have a projet, a product <br/>or a services in mind ? <br/>
            </h1>
            <div className="hire-text">
               <p>
                  Old or new, We will be proud to talk about it, and implement your vision.
               </p>
               <TextButton 
               icon="ion-ios-arrow-right" 
               text="Let's create something together"
               background={true}
               to="https://wa.link/85brqs"
               />
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
)
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

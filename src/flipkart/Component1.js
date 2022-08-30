import React, { Component } from 'react'
class Component1 extends Component {
  render() {
    return (
      <div id="component1Top">
         <div id="icon">
            <img id="imgFlipkart" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""></img>
            <p><a href='{#}'>Flipkart Explore</a><img id="icofl" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt=""></img></p>
         </div>
         <div id="inpComp"><input id="ipnsearch" placeholder='Search for Product, brand,or more ' type={"text"}></input><i class="fa fa-search" style={{color:"#2874f0"}}></i></div>
         <div id="btnlogin">Login</div>
         <div id="navabar">
            <p>Become a Seller</p>
            <select id="selid"><option>More</option></select>
            <p><i class="fa fa-shopping-cart"></i>Cart</p>
         </div>
      </div>
    )
  }
}
export default Component1
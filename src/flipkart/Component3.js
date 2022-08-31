import React, { Component } from 'react'
class Component3 extends Component {
  render() {
    return (
        <>
      <div id="Component3">
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
     <div class="carousel-indicators">
       <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
       <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
       <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
     </div>
<div class="carousel-inner">
  <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/82/53/5e/82535eca42dee403c8ca773e28fa89bc.jpg" alt="Los Angeles" class="d-block" style={{height:"300px", width:"100%"}}/>
      </div>
      <div class="carousel-item">
        <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/08/realme-pass-featured.png" alt="Chicago" class="d-block" style={{ height:"300px",width:"100%"}}/>
      </div>
        <div class="carousel-item">
       <img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/05/11th_Gen_Intel_Core_H-series_processors.jpg" alt="New York" class="d-block" style={{ height:"300px",width:"100%"}}/>
      </div>
      </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
       <span class="carousel-control-prev-icon"></span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
       <span class="carousel-control-next-icon"></span>
       </button>
     </div>
      </div>
      </>
    )
  }
}
export default Component3
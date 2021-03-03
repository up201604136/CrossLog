<template>
  <div class="content">
    <div class="card_and_svg">
      <div
        id="card1"
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>lens_blur</md-icon>
          </template>

            <template slot="content">
            <p class="category" style="font-size:20px;margin-top:20px">Subsystem states</p>
                      <div style="text-align:left;padding-top:150px;text-align:left" id="content_card">
                        <h3 class="title" style="font-size:22px">
                          Wrapper 1  
                          <small style="color:green;text-align:right">ACTIVE</small>
                        </h3>
                        <h3 class="title" style="font-size:22px">
                         <br> Wrapper 2
                          <small style="color:green" >ACTIVE</small>
                        </h3>
                        <h3 class="title" style="font-size:22px">
                         <br> Wrapper 3
                          <small style="color:red">DESACTIVE</small>
                        </h3>
                      </div>

          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Problems with an order?</a>
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50"
        style="margin-top:40px"
      >
        <div class="phone-viewport">
   <!-- <img src="@/assets/img/full_process.png" alt="Full Process Display" style="width:100%;margin-left:20px"> -->
          
         <svg width="799.9999999999999" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

 <g>
  <title>background</title>
  <rect x="-1" y="-1" width="802" height="602" id="canvas_background" fill="#fff"/>
  <g id="canvasGrid" display="none">
   <rect id="svg_1" width="100%" height="100%" x="0" y="0" stroke-width="0" fill="url(#gridpattern)"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <image
                x="2.22222"
                stroke="null"
                xlink:href="@/assets/img/wrapp.png"
                id="svg_3"
                height="649.57131"
                width="783"
                y="-36.34898"
              />
     <ellipse ry="18" rx="18" id="svg_2" cy="220" cx="172" stroke-width="0" stroke="#000" fill="green"/>
  <ellipse ry="18" rx="18" id="svg_5" cy="220" cx="398" stroke-width="0" stroke="#000" fill="green"/>
  <ellipse ry="18" rx="18" id="svg_6" cy="220" cx="615" stroke-width="0" stroke="#000" fill="red"/>
</g>
</svg>


        </div>
      </div>
    </div>

    <md-bottom-bar class="md-accent" md-sync-route :md-active-item="activeVal">
      <div class="components">
        <md-bottom-bar-item
          to="/ID_Weight"
          md-label="ID and Weight"
          md-icon="qr_code_scanner"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/dynamic_acc"
          md-label="Dynamic accumulator"
          md-icon="dynamic_feed"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/palletization"
          md-label="Palletization"
          md-icon="precision_manufacturing"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/progressive_involvment"
          md-label="Progressive involvement"
          md-icon="wrap_text"
          class="active"
        ></md-bottom-bar-item>
      </div>
    </md-bottom-bar>
  </div>
</template>

<script>
import { StatsCard } from "@/components";

export default {
  name: "dynamic_acc",
  components: {
    StatsCard
  },
  data() {
    return {
      activeVal: "recent" // change this value dynamically
    };
  }
};
</script>
<style scoped>
.components {
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-color: #999999;
}

#card1 {
  height: 700px;
  margin-top: 12px;
}
#content_card {
  height: 500px;
}
.card_and_svg {
  display: flex;
  padding-left: 20px;
  margin-right: 30px;
}
.active {
  border-bottom: 4px solid rgb(121, 117, 117);
}
.blink_me {
  animation: blinker 2.5s linear infinite;
}
#blink_me {
  animation: blinker 2.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.group {
  width: 100%;
  height: 250px;
  text-align: center;
}
.subgroup1{
  height: 33.333%;
  display: flex;
}
.subgroup2{
  height: 33.333%;
  display: flex;
}
.subgroup3{
  height: 33.333%;
  display: flex;
}
.subsubgroup{
  width: 33.333%;
}


</style>

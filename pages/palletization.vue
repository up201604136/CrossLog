<template>
  <div class="content">
    <div class="card_and_svg">
      <div
        id="card1"
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>lens_blur</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-size:20px;margin-top:20px">
              Subsystem states
            </p>
            <div
              style="text-align:left;padding-top:50px;text-align:left"
              id="content_card"
            >
              <h3 class="title" style="text-align:center">
                Mode: <br />
                <small
                  class="blink_me"
                  style="color:black;text-align:right;font-size:22px;text-decoration:underline"
                  >AUTO</small
                >
                <br />
                <a style="font-size:16.5px;" href="">Change to manual</a>
                <div class="motors" style="margin-top:60px">
     
                  <div class="group">
                    <div class="subgroup1">
                     <div class="subsubgroup">
                       
                     </div>
                     <div class="subsubgroup">
                       <h4><b>1</b></h4>
                     </div>
                     <div class="subsubgroup">
                      <h4><b>2</b></h4>
                     </div>
                    </div>
                    <div class="subgroup2">
                       <div class="subsubgroup">
                      <h4><b>Status</b> </h4><h6>(w, p, a)</h6>
                     </div>
                     <div id="blink_me" class="subsubgroup">
                       <h4 style="color:green">Working</h4>
                     </div>
                     <div class="subsubgroup">
                       <h4 style="color:red">Pendent</h4>
                     </div>
                    </div>
                     <div class="subgroup3">
                     <div class="subsubgroup">
                      <h4><b>Speed</b></h4><h6>(km/h)</h6> 
                     </div>
                     <div class="subsubgroup">
                       <h4>1,2</h4>
                     </div>
                     <div class="subsubgroup">
                       <h4>0</h4>
                     </div>
                    </div>
                  </div>
                </div>
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
                xlink:href="@/assets/img/palletizing.png"
                id="svg_3"
                height="649.57131"
                width="783"
                y="-36.34898"
              />
  <ellipse fill="green" stroke="#000" stroke-width="0" stroke-opacity="null" cx="198" cy="305" id="svg_17" rx="18" ry="16"/>
  <ellipse fill="red" stroke="#000" stroke-width="0" stroke-opacity="null" cx="635" cy="305" id="svg_18" rx="18" ry="16"/>
 
  
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
          class="active"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/progressive_involvment"
          md-label="Progressive involvement"
          md-icon="wrap_text"
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

<template>
  <div class="content">
    <div class="card_and_svg">
   <div id="card1"
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
                          ID and weight 
                          <small style="color:green;text-align:right">ACTIVE</small>
                        </h3>
                        <h3 class="title" style="font-size:22px">
                          Dynamic accumulator
                          <small style="color:green" >ACTIVE</small>
                        </h3>
                        <h3 class="title" style="font-size:22px">
                          Palletization
                          <small style="color:red">DESACTIVE</small>
                        </h3>
                        <h3 class="title" style="font-size:22px">
                          Progressive involvement
                          <small style="color:green">ACTIVE</small>
                        </h3>
                      </div>
              <div class="sss" style="text-align:left">
                <img style="width:20px" src="@/assets/img/trafficlight_icon.png"> 
              <span style="font-size:13px"> Subsystem state</span>
              <br>
              <img style="width:20px" src="@/assets/img/plus_info.png"> 
              <span style="font-size:13px"> Browse each subsystem</span>
            </div>
          </template>
            
          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Report a major problem</a>
            </div>
          </template>
        </stats-card>
      </div>

    
<div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50" style="margin-top:40px"
      >
        <div class="phone-viewport">
              <!-- <img src="@/assets/img/full_process.png" alt="Full Process Display" style="width:100%;margin-left:20px"> -->
    <svg width="800.0000000000001" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

  <g>
  <image x="2.22222" stroke="null" xlink:href="@/assets/img/full_process.png" id="svg_1" height="649.57131" width="783" y="-36.34898"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_2" cy="75.00014" cx="690.88888" opacity="undefined" stroke="#000" fill="green"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_4" cy="105.00012" cx="691.99999" opacity="undefined" stroke="#000" fill="transparent"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_5" cy="256.11114" cx="691.99999" opacity="undefined" stroke="#000" fill="green"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_6" cy="286.11112" cx="691.99999" opacity="undefined" stroke="#000" fill="transparent"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_7" cy="348.3333" cx="693.1111" opacity="undefined" stroke="#000" fill="transparent"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_8" cy="378.33328" cx="693.1111" opacity="undefined" stroke="#000" fill="red"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_9" cy="478.33322" cx="691.99999" opacity="undefined" stroke="#000" fill="green"/>
  <ellipse ry="12.22221" rx="12.77777" id="svg_10" cy="509.44431" cx="691.99999" opacity="undefined" stroke="#000" fill="transparent"/>
  <!-- //// More info about each subsystem //// -->
 <ellipse style="cursor:pointer" onclick="location.href = '/ID_Weight';" stroke="#000" ry="13.5" rx="14" id="svg_11" cy="63.5" cx="486" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/>
  <path style="cursor:pointer" onclick="location.href = '/ID_Weight';" stroke="#000" id="svg_3" d="m476.575,60.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z" opacity="undefined" fill="#cccccc"/>
  <ellipse style="cursor:pointer" onclick="location.href = '/dynamic_acc';" stroke="#000" ry="13.5" rx="14" id="svg_12" cy="293.5" cx="546" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/>
  <path style="cursor:pointer" onclick="location.href = '/dynamic_acc';" stroke="#000" id="svg_13" d="m536.575,290.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z" opacity="undefined" fill="#cccccc"/>
  <ellipse style="cursor:pointer" onclick="location.href = '/palletization';" stroke="#000" ry="13.5" rx="14" id="svg_18" cy="383.5" cx="547" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/>
  <path style="cursor:pointer" onclick="location.href = '/palletization';" stroke="#000" id="svg_19" d="m537.575,380.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z" opacity="undefined" fill="#cccccc"/>
  <ellipse style="cursor:pointer" onclick="location.href = '/progressive_involvment';" stroke="#000" ry="13.5" rx="14" id="svg_20" cy="493.5" cx="547" opacity="undefined" stroke-opacity="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/>
  <path style="cursor:pointer" onclick="location.href = '/progressive_involvment';" stroke="#000" id="svg_21" d="m537.575,490.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z" opacity="undefined" fill="#cccccc"/>
 </g>
  </svg>
        </div>
          </div>
          
    </div>

         <md-bottom-bar class="md-accent" md-sync-route>
                <div class="components">
                  <md-bottom-bar-item to="/ID_Weight" md-label="ID and Weight" md-icon="qr_code_scanner" ></md-bottom-bar-item>
                  <md-bottom-bar-item to="/dynamic_acc" md-label="Dynamic accumulator" md-icon="dynamic_feed"></md-bottom-bar-item>
                  <md-bottom-bar-item to="/palletization" md-label="Palletization" md-icon="precision_manufacturing"></md-bottom-bar-item>
                  <md-bottom-bar-item to="/progressive_involvment" md-label="Progressive involvement" md-icon="wrap_text"></md-bottom-bar-item>
               </div>
       
      </md-bottom-bar>
  </div>


  
</template>

<script>
import { StatsCard } from "@/components";

export default {
  components: {
    StatsCard
  }
};
</script>
<style scoped>


  .components{
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    position:relative;
    background-color: #999999;
  }

  #card1{
    height: 700px;
    margin-top:12px;
  }
  #content_card{
    height: 500px;
  }
  .card_and_svg{
    display:flex;
    padding-left:20px;
    margin-right:30px;
  }
  .active{
    color:red;
  }
</style>
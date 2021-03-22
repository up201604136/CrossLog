<template>
  <div class="content">
    <h5 v-if="client.connected == 1" style="margin-top:-10px;margin-left:20px"><md-icon style="color:#00cc00;margin-top:-8px">wifi</md-icon> <b>Online</b></h5>
    <h5 v-if="client.connected == 0" style="margin-top:-10px;margin-left:20px"><md-icon style="color:red;margin-top:-8px">wifi_off</md-icon> <b>Offline</b></h5>
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
                <div class="motors" style="margin-top:40px">
     
                  <div class="group">
                    <div class="subgroup1">
                     <div class="subsubgroup">
                       
                     </div>
                     <div class="subsubgroup">
                       <h4><b>AGV 1</b></h4>
                     </div>
                     <div class="subsubgroup">
                       <h4><b>AGV 2</b></h4>
                     </div>
                     <div class="subsubgroup">
                      <h4><b>AGV + Gripper</b></h4>
                     </div>
                    </div>
                    <div class="subgroup2">
                      <div class="subsubgroup">
                       <h4><b>Position</b> </h4><h6>(x,y)</h6>
                     </div>
                       <div class="subsubgroup">
                      <h4>[{{x_torre1}},{{y_torre1}}]</h4>
                     </div>
                     <div class="subsubgroup">
                       <h4>[{{x_torre2}},{{y_torre2}}]</h4>
                     </div>
                     <div class="subsubgroup">
                      <h4>[{{x_cavalo}},{{y_cavalo}}]</h4>
                     </div>
                    </div>
                     <div class="subgroup3">
                       <div class="subsubgroup">
                      <h4><b>Status</b></h4><h6>(w,p,A)</h6> 
                     </div>
                     <div class="subsubgroup">
                      <h4 class="blink_me" v-if="status_torre1 == 'Working'" style="color:green">{{status_torre1}}</h4>
                       <h4 v-if="status_torre1 == 'Pendent'" style="color:red">{{status_torre1}}</h4>
                       <h4 class="blink_me" v-if="status_torre1 == 'Alarm'" style="color:red">{{status_torre1}}</h4>
                     </div>
                     <div class="subsubgroup">
                       <h4 class="blink_me" v-if="status_torre2 == 'Working'" style="color:green">{{status_torre2}}</h4>
                       <h4 v-if="status_torre2 == 'Pendent'" style="color:red">{{status_torre2}}</h4>
                       <h4 class="blink_me" v-if="status_torre2 == 'Alarm'" style="color:red">{{status_torre2}}</h4>
                     </div>
                     <div class="subsubgroup">
                       <h4 class="blink_me" v-if="status_cavalo == 'Working'" style="color:green">{{status_cavalo}}</h4>
                       <h4 v-if="status_cavalo == 'Pendent'" style="color:red">{{status_cavalo}}</h4>
                       <h4 class="blink_me" v-if="status_cavalo == 'Alarm'" style="color:red">{{status_cavalo}}</h4>
                     </div>
                    </div>
                     <div class="subgroup3">
                       <div class="subsubgroup">
                      <h4><b>Battery level</b></h4> 
                     </div>
                     <div class="subsubgroup">
                       <h4 v-if="sliderValue_battery1 == '-1'"><h4>No info</h4></h4>
                       <h4 v-if="sliderValue_battery1 >= '80'"><h4><i style="color:green" class="fas fa-battery-full"></i></h4></h4>
                       <h4 v-if="sliderValue_battery1 < '80' && sliderValue_battery1 >= '40'"><h4><i style="color:#ffcc00" class="fas fa-battery-half"></i></h4></h4>
                       <h4 v-if="sliderValue_battery1 < '40' && sliderValue_battery1 >= '10'"><h4><i style="color:red" class="fas fa-battery-quarter"></i></h4></h4> 
                       <h4 v-if="sliderValue_battery1 < '10' && sliderValue_battery1 >= '0'"><h4><span class="blink_me"><i style="color:red" class="fas fa-battery-empty"></i></span> </h4></h4> 
                     </div>
                     <div class="subsubgroup">
                       <h4 v-if="sliderValue_battery2 == '-1'"><h4>No info</h4></h4>
                       <h4 v-if="sliderValue_battery2 >= '80'"><h4><i style="color:green" class="fas fa-battery-full"></i></h4></h4>
                       <h4 v-if="sliderValue_battery2 < '80' && sliderValue_battery2 >= '40'"><h4><i style="color:#ffcc00" class="fas fa-battery-half"></i></h4></h4>
                       <h4 v-if="sliderValue_battery2 < '40' && sliderValue_battery2 >= '10'"><h4><i style="color:red" class="fas fa-battery-quarter"></i></h4></h4> 
                       <h4 v-if="sliderValue_battery2 < '10' && sliderValue_battery2 >= '0'"><h4><span class="blink_me"><i style="color:red" class="fas fa-battery-empty"></i></span> </h4></h4> 
                     </div>
                     <div class="subsubgroup">
                       <h4 v-if="sliderValue_battery3 == '-1'"><h4>No info</h4></h4>
                       <h4 v-if="sliderValue_battery3 >= '80'"><h4><i style="color:green" class="fas fa-battery-full"></i></h4></h4>
                       <h4 v-if="sliderValue_battery3 < '80' && sliderValue_battery3 >= '40'"><h4><i style="color:#ffcc00" class="fas fa-battery-half"></i></h4></h4>
                       <h4 v-if="sliderValue_battery3 < '40' && sliderValue_battery3 >= '10'"><h4><i style="color:red" class="fas fa-battery-quarter"></i></h4></h4> 
                       <h4 v-if="sliderValue_battery3 < '10' && sliderValue_battery3 >= '0'"><h4><span class="blink_me"><i style="color:red" class="fas fa-battery-empty"></i></span> </h4></h4> 
                     
                     </div>
                    </div>
                                       <div class="subgroup3">
                       <div class="subsubgroup">
                      <h4><b>Robotic Arm Position</b></h4> 
                     </div>
                     <div class="subsubgroup">
                     -
                     </div>
                     <div class="subsubgroup">
                      -
                     </div>
                     <div class="subsubgroup">
                       [{{sliderValue}},{{sliderValuey}}]
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
              <a style="cursor:pointer" @click="doPublish_order" >Report a problem with this system</a>
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
                xlink:href="@/assets/img/plataforma_.png"
                id="svg_3"
                height="649.57131"
                width="783"
                y="-36.34898"
              />
              
              <image
                :class="class_torre1"
                :style="style_torre1"
                :x="x_torre1"
                stroke="null"
                xlink:href="@/assets/img/torre_1.png"
                id="torre1"
                height="100"
                width="50"
                :y="y_torre1"
              />
              <image 
                :class="class_torre2"
                :style="style_torre2"
                :x="x_torre2"
                stroke="null"
                xlink:href="@/assets/img/torre_2.png"
                id="torre2"
                height="100"
                width="50"
                :y="y_torre2"
              />
               <image 
                :class="class_cavalo"
                :style="style_cavalo"
                :x="x_cavalo"
                stroke="null"
                xlink:href="@/assets/img/cavalo.png"
                id="peao2"
                height="100"
                width="50"
                :y="y_cavalo"
              />
  
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
import mqtt from "mqtt";

export default {
  name: "dynamic_acc",
  components: {
    StatsCard
  },
  data() {
    return {
      sliderValue_battery1: -1,
      sliderValue_battery2: -1,
      sliderValue_battery3: -1,
      sliderValue: 0,
      sliderValuey: 0,
      battery_cavalo:'',
      battery_torre2:'',
      battery_torre1:'',
      status_cavalo:'Pendent',
      style_cavalo:'',
      class_cavalo:'',
      status_torre1:'Pendent',
      style_torre1:'',
      class_torre1:'',
      status_torre2:'Pendent',
      style_torre2:'',
      class_torre2:'',
      x_torre1 : 150,
      y_torre1: 250,
      x_torre2 : 250,
      y_torre2: 250,
      x_cavalo : 180,
      y_cavalo: 250,  
      teste:220,   
      activeVal: "recent", // change this value dynamically
      connection: {
        host: "127.0.0.1",
        port: 9000,
        endpoint: "",
        clean: true, // 保留会话
        connectTimeout: 4000, // 超时时间
        reconnectPeriod: 4000, // 重连时间间隔
        // 认证信息
        clientId: "f8fd7d67-11d7-409b-acfb-f4f1da9ef440",
        username: "admin",
        password: "admin"
      },
      subscription: {
        topic: "topic/full_system",
        qos: 0
      },
      subscription_agvs: {
        topic: "topic/subscription_agvs",
        qos: 0
      },
      subscription_sliderValue: {
        topic: "topic/subscription_sliderValue",
        qos: 0
      },
      subscription_sliderValuey: {
        topic: "topic/subscription_sliderValuey",
        qos: 0
      },
      subscription_sliderValue_battery1: {
        topic: "topic/subscription_sliderValue_battery1",
        qos: 0
      },
      subscription_sliderValue_battery2: {
        topic: "topic/subscription_sliderValue_battery2",
        qos: 0
      },
      subscription_sliderValue_battery3: {
        topic: "topic/subscription_sliderValue_battery3",
        qos: 0
      },
      publish: {
        topic: "topic/hello",
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }'
      },
      publish_order: {
        topic: "topic/home_page",
        qos: 0,
        payload: '{ "type": "Alarm","msg": "Problem with a subsystem", "location": "Palletization", "solved": "no" }'
      },
      receiveNews: "",
      id_weight: "",
      message: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 }
      ],
      client: {
        connected: false
      },
      subscribeSuccess: false
    };
  },
   methods: {
    // 创建连接
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        if(topic== 'topic/subscription_agvs'){

            var obj = JSON.parse(message);
            console.log(obj);
            // Torre 1
            if(obj.agv == 1 && obj.position == 'r' && this.status_torre1 != 'Alarm'){
              this.x_torre1 = this.x_torre1 + 10;
            }
            if(obj.agv == 1 && obj.position == 'l' && this.status_torre1 != 'Alarm'){
              this.x_torre1 = this.x_torre1 - 10;
            }
            if(obj.agv == 1 && obj.position == 'u' && this.status_torre1 != 'Alarm'){
              this.y_torre1 = this.y_torre1 - 10;
            }
            if(obj.agv == 1 && obj.position == 'd' && this.status_torre1 != 'Alarm'){
              this.y_torre1 = this.y_torre1 + 10;
            }
            if(obj.agv == 1 && obj.position == 'w' && this.status_torre1 != 'Alarm'){
                this.class_torre1 = 'blink_me'
                this.style_torre1 = ' filter: brightness(3) contrast(3) grayscale(0.62);'
                this.status_torre1 = 'Working'
              
            }
             if(obj.agv == 1 && obj.position == 's' ){
              this.class_torre1 = ''
              this.style_torre1 = ''
              this.status_torre1 = 'Pendent'
            }
            if(obj.agv == 1 && obj.position == 'A'){
              this.class_torre1 = 'blink_me_alarm'
              this.style_torre1 = 'filter: brightness(3) contrast(3) grayscale(0.62) invert(1);'
              this.status_torre1 = 'Alarm'
            }
            if(obj.agv == 1 && obj.position == 'f_b'){
              this.battery_torre1 = 'Full_battery'
            }
            if(obj.agv == 1 && obj.position == 'm_b'){
              this.battery_torre1 = 'Medium_battery'
            }
            if(obj.agv == 1 && obj.position == 'l_b'){
              this.battery_torre1 = 'Low_battery'
            }
              // Torre 2
            if(obj.agv == 2 && obj.position == 'r' && this.status_torre2 != 'Alarm'){
              this.x_torre2 = this.x_torre2 + 10;
            }
            if(obj.agv == 2 && obj.position == 'l' && this.status_torre2 != 'Alarm'){
              this.x_torre2 = this.x_torre2 - 10;
            }
            if(obj.agv == 2 && obj.position == 'u' && this.status_torre2 != 'Alarm'){
              this.y_torre2 = this.y_torre2 - 10;
            }
            if(obj.agv == 2 && obj.position == 'd' && this.status_torre2 != 'Alarm'){
              this.y_torre2 = this.y_torre2 + 10;
            }
   // TORRE 2 - ALARMS, WORKS, ETC
            if(obj.agv == 2 && obj.position == 'w' && this.status_torre2 != 'Alarm'){
                this.class_torre2 = 'blink_me'
                this.style_torre2 = ' filter: brightness(3) contrast(3) grayscale(0.62);'
                this.status_torre2 = 'Working'
              
            }
             if(obj.agv == 2 && obj.position == 's'){
              this.class_torre2 = ''
              this.style_torre2 = ''
              this.status_torre2 = 'Pendent'
            }
            if(obj.agv == 2 && obj.position == 'A'){
              this.class_torre2 = 'blink_me_alarm'
              this.style_torre2 = 'filter: brightness(3) contrast(3) grayscale(0.62) invert(1);'
              this.status_torre2 = 'Alarm'
            }
            if(obj.agv == 2 && obj.position == 'f_b'){
              this.battery_torre2 = 'Full_battery'
            }
            if(obj.agv == 2 && obj.position == 'm_b'){
              this.battery_torre2 = 'Medium_battery'
            }
            if(obj.agv == 2 && obj.position == 'l_b'){
              this.battery_torre2 = 'Low_battery'
            }

            //CAVALO 
            if(obj.agv == 3 && obj.position == 'r' && this.class_cavalo != 'blink_me' && this.status_cavalo != 'Alarm'){
              this.x_cavalo = this.x_cavalo + 10;
            }
            if(obj.agv == 3 && obj.position == 'l' && this.class_cavalo != 'blink_me' && this.status_cavalo != 'Alarm'){
              this.x_cavalo = this.x_cavalo - 10;
            }
            if(obj.agv == 3 && obj.position == 'u' && this.class_cavalo != 'blink_me' && this.status_cavalo != 'Alarm'){
              this.y_cavalo = this.y_cavalo - 10;
            }
            if(obj.agv == 3 && obj.position == 'd' && this.class_cavalo != 'blink_me' && this.status_cavalo != 'Alarm'){
              this.y_cavalo = this.y_cavalo + 10;
            }
            // || (this.x_cavalo == 220 && this.y_cavalo == 170 )|| (this.x_cavalo == 250 && this.y_cavalo == 170 )|| (this.x_cavalo == 280 && this.y_cavalo == 170) || (this.x_cavalo == 320 && this.y_cavalo == 170)|| (this.x_cavalo == 470 && this.y_cavalo == 170 ) || (this.x_cavalo == 500 && this.y_cavalo == 170 )||(this.x_cavalo == 530 && this.y_cavalo == 170) || (this.x_cavalo == 560 && this.y_cavalo == 170 ) || (this.x_cavalo == 590 && this.y_cavalo == 170 )
            if(obj.agv == 3 && obj.position == 'w' && this.status_cavalo != 'Alarm'){
              if((this.x_cavalo == 180 && this.y_cavalo == 170 ) || (this.x_cavalo == 220 && this.y_cavalo == 170 )|| (this.x_cavalo == 250 && this.y_cavalo == 170 )|| (this.x_cavalo == 280 && this.y_cavalo == 170) || (this.x_cavalo == 320 && this.y_cavalo == 170)|| (this.x_cavalo == 470 && this.y_cavalo == 170 ) || (this.x_cavalo == 500 && this.y_cavalo == 170 )||(this.x_cavalo == 530 && this.y_cavalo == 170) || (this.x_cavalo == 560 && this.y_cavalo == 170 ) || (this.x_cavalo == 590 && this.y_cavalo == 170 )){
                this.class_cavalo = 'blink_me'
                this.style_cavalo = ' filter: brightness(3) contrast(3) grayscale(0.62);'
                this.status_cavalo = 'Working'
              }
            }
             if(obj.agv == 3 && obj.position == 's'){
              this.class_cavalo = ''
              this.style_cavalo = ''
              this.status_cavalo = 'Pendent'
            }
            if(obj.agv == 3 && obj.position == 'A'){
              this.class_cavalo = 'blink_me_alarm'
              this.style_cavalo = 'filter: brightness(3) contrast(3) grayscale(0.62) invert(1);'
              this.status_cavalo = 'Alarm'
            }
            if(obj.agv == 3 && obj.position == 'f_b'){
              this.battery_cavalo = 'Full_battery'
            }
            if(obj.agv == 3 && obj.position == 'm_b'){
              this.battery_cavalo = 'Medium_battery'
            }
            if(obj.agv == 3 && obj.position == 'l_b'){
              this.battery_cavalo = 'Low_battery'
            }
            

        }
     
        if(topic== 'topic/subscription_sliderValue'){

            var obj = JSON.parse(message);
            console.log(obj);
            this.sliderValue = obj.x 
        }
        if(topic== 'topic/subscription_sliderValuey'){

            var obj = JSON.parse(message);
            console.log(obj);
            this.sliderValuey = obj.x 
        }
        if(topic== 'topic/subscription_sliderValue_battery1'){

            var obj = JSON.parse(message);
            console.log(obj);
            this.sliderValue_battery1 = obj.x 
        }
        if(topic== 'topic/subscription_sliderValue_battery2'){

            var obj = JSON.parse(message);
            console.log(obj);
            this.sliderValue_battery2 = obj.x 
        }
        if(topic== 'topic/subscription_sliderValue_battery3'){

            var obj = JSON.parse(message);
            console.log(obj);
            this.sliderValue_battery3 = obj.x 
        }
       
      });
    },
    // 订阅主题
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doSubscribe_agvs() {
      const { topic, qos } = this.subscription_agvs;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
     doSubscribe_sliderValue() {
      const { topic, qos } = this.subscription_sliderValue;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
      doSubscribe_sliderValuey() {
      const { topic, qos } = this.subscription_sliderValuey;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doSubscribe_sliderValue_battery1() {
      const { topic, qos } = this.subscription_sliderValue_battery1;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doSubscribe_sliderValue_battery2() {
      const { topic, qos } = this.subscription_sliderValue_battery2;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doSubscribe_sliderValue_battery3() {
      const { topic, qos } = this.subscription_sliderValue_battery3;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    // 取消订阅
    doUnSubscribe() {
      const { topic } = this.subscription;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
     doUnSubscribe_sliderValue() {
      const { topic } = this.subscription_sliderValue;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
     doUnSubscribe_sliderValuey() {
      const { topic } = this.subscription_sliderValuey;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    doUnSubscribe_sliderValue_battery1() {
      const { topic } = this.subscription_sliderValue_battery1;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    doUnSubscribe_sliderValue_battery2() {
      const { topic } = this.subscription_sliderValue_battery2;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    doUnSubscribe_sliderValue_battery3() {
      const { topic } = this.subscription_sliderValue_battery3;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    doUnSubscribe_agvs() {
      const { topic } = this.subscription_agvs;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    // 发送消息
    doPublish() {
      const { topic, qos, payload } = this.publish;
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
      });
    },
    doPublish_order() {
      const { topic, qos, payload } = this.publish_order;
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
        alert("An alarm / event was set!");
      });
    },
    // 断开连接
    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end();
          this.client = {
            connected: false
          };
          console.log("Successfully disconnected!");
        } catch (error) {
          console.log("Disconnect failed", error.toString());
        }
      }
    }
  },
    // when page loads, call these functions --> Create connection to MQQT Broker + Subscribe to the topic
  beforeMount() {
    this.createConnection();
    this.doSubscribe();
    this.doSubscribe_agvs();
    this.doSubscribe_sliderValue();
    this.doSubscribe_sliderValuey();
    this.doSubscribe_sliderValue_battery1();
    this.doSubscribe_sliderValue_battery2();
    this.doSubscribe_sliderValue_battery3();
  },
  beforeDestroy() {
    this.destroyConnection();
     this.doUnSubscribe();
     this.doUnSubscribe_agvs();
     this.doUnSubscribe_sliderValue();
     this.doUnSubscribe_sliderValuey();
     this.doUnSubscribe_sliderValue_battery1();
     this.doUnSubscribe_sliderValue_battery2();
     this.doUnSubscribe_sliderValue_battery3();
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
  margin-top: -25px;
}
.subgroup1{
  height: 25%;
  display: flex;
}
.subgroup2{
  height: 25%;
  display: flex;
}
.subgroup3{
  height: 25%;
  display: flex;
}
.subgroup3{
  height: 25%;
  display: flex;
}
.subsubgroup{
  width: 25%;
}
.blink_me {
  animation: blinker 2s linear infinite; animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.blink_me_alarm{
 animation: blinker 1s linear infinite;
}

</style>

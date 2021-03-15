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
import mqtt from "mqtt";

export default {
  name: "dynamic_acc",
  components: {
    StatsCard
  },
  data() {
    return {
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
        var obj = JSON.parse(message);
        console.log(obj);
        this.id_weight = obj.id_weight;

        console.log(`Received message ${message} from topic ${topic}`);
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
    // 取消订阅
    doUnSubscribe() {
      const { topic } = this.subscription;
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

  },
  beforeDestroy() {
    this.destroyConnection();
     this.doUnSubscribe();
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

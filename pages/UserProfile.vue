<template>
  <div class="content">
    <h5 v-if="client.connected == 1" style="margin-top:-10px;margin-left:20px"><md-icon style="color:#00cc00;margin-top:-8px">wifi</md-icon> <b>Online</b></h5>
    <h5 v-if="client.connected == 0" style="margin-top:-10px;margin-left:20px"><md-icon style="color:red;margin-top:-8px">wifi_off</md-icon> <b>Offline</b></h5>
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
            <p class="category" style="font-size:20px;margin-top:20px">
              Subsystem states
            </p>
            <div
              style="text-align:left;padding-top:150px;text-align:left"
              id="content_card"
            >
              <h3 class="title" style="font-size:22px">
                ID and weight
                <!-- // if read values are 1, TURN GREEN and ACTIVE, else TURN RED and DESACTIVE -->
                <small v-if="id_weight == 1" style="color:green;text-align:right"
                  >ACTIVE</small>
                <small v-else style="color:red;text-align:right"
                  >DESACTIVE</small>  
              </h3>
              <h3 class="title" style="font-size:22px">
                Dynamic accumulator
                <small style="color:green">ACTIVE</small>
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
              <img
                style="width:20px"
                src="@/assets/img/trafficlight_icon.png"
              />
              <span style="font-size:13px"> Subsystem state</span>
              <br />
              <img style="width:20px" src="@/assets/img/plus_info.png" />
              <span style="font-size:13px"> Browse each subsystem</span>
            </div>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a style="cursor:pointer" @click="doPublish_order">Report a major problem</a>
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
          <svg
            width="800.0000000000001"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <image
                x="2.22222"
                stroke="null"
                xlink:href="@/assets/img/full_process.png"
                id="svg_1"
                height="649.57131"
                width="783"
                y="-36.34898"
              />
              <ellipse v-if="id_weight == 0"
                ry="12.22221"
                rx="12.77777"
                id="svg_2"
                cy="75.00014"
                cx="690.88888"
                opacity="undefined"
                stroke="#000"
                fill="red"
              />
              <ellipse v-if="id_weight == 1"
                ry="12.22221"
                rx="12.77777"
                id="svg_4"
                cy="105.00012"
                cx="691.99999"
                opacity="undefined"
                stroke="#000"
                fill="green"
              />
              <ellipse
                ry="12.22221"
                rx="12.77777"
                id="svg_5"
                cy="256.11114"
                cx="691.99999"
                opacity="undefined"
                stroke="#000"
                fill="green"
              />
              <ellipse
                ry="12.22221"
                rx="12.77777"
                id="svg_6"
                cy="286.11112"
                cx="691.99999"
                opacity="undefined"
                stroke="#000"
                fill="transparent"
              />
              <ellipse
                ry="12.22221"
                rx="12.77777"
                id="svg_7"
                cy="348.3333"
                cx="693.1111"
                opacity="undefined"
                stroke="#000"
                fill="transparent"
              />
              <ellipse
                ry="12.22221"
                rx="12.77777"
                id="svg_8"
                cy="378.33328"
                cx="693.1111"
                opacity="undefined"
                stroke="#000"
                fill="red"
              />
              <ellipse
                ry="12.22221"
                rx="12.77777"
                id="svg_9"
                cy="478.33322"
                cx="691.99999"
                opacity="undefined"
                stroke="#000"
                fill="green"
              />
              <ellipse
                ry="12.22221"
                rx="12.77777"
                id="svg_10"
                cy="509.44431"
                cx="691.99999"
                opacity="undefined"
                stroke="#000"
                fill="transparent"
              />
              <!-- //// More info about each subsystem //// -->
              <ellipse
                style="cursor:pointer"
                onclick="location.href = '/ID_Weight';"
                stroke="#000"
                ry="13.5"
                rx="14"
                id="svg_11"
                cy="63.5"
                cx="486"
                opacity="undefined"
                stroke-opacity="null"
                stroke-dasharray="null"
                stroke-width="null"
                fill="#000000"
              />
              <path
                style="cursor:pointer"
                onclick="location.href = '/ID_Weight';"
                stroke="#000"
                id="svg_3"
                d="m476.575,60.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z"
                opacity="undefined"
                fill="#cccccc"
              />
              <ellipse
                style="cursor:pointer"
                onclick="location.href = '/dynamic_acc';"
                stroke="#000"
                ry="13.5"
                rx="14"
                id="svg_12"
                cy="293.5"
                cx="546"
                opacity="undefined"
                stroke-opacity="null"
                stroke-dasharray="null"
                stroke-width="null"
                fill="#000000"
              />
              <path
                style="cursor:pointer"
                onclick="location.href = '/dynamic_acc';"
                stroke="#000"
                id="svg_13"
                d="m536.575,290.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z"
                opacity="undefined"
                fill="#cccccc"
              />
              <ellipse
                style="cursor:pointer"
                onclick="location.href = '/palletization';"
                stroke="#000"
                ry="13.5"
                rx="14"
                id="svg_18"
                cy="383.5"
                cx="547"
                opacity="undefined"
                stroke-opacity="null"
                stroke-dasharray="null"
                stroke-width="null"
                fill="#000000"
              />
              <path
                style="cursor:pointer"
                onclick="location.href = '/palletization';"
                stroke="#000"
                id="svg_19"
                d="m537.575,380.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z"
                opacity="undefined"
                fill="#cccccc"
              />
              <ellipse
                style="cursor:pointer"
                onclick="location.href = '/progressive_involvment';"
                stroke="#000"
                ry="13.5"
                rx="14"
                id="svg_20"
                cy="493.5"
                cx="547"
                opacity="undefined"
                stroke-opacity="null"
                stroke-dasharray="null"
                stroke-width="null"
                fill="#000000"
              />
              <path
                style="cursor:pointer"
                onclick="location.href = '/progressive_involvment';"
                stroke="#000"
                id="svg_21"
                d="m537.575,490.67881l6.27931,0l0,-5.94882l6.44138,0l0,5.94882l6.27931,0l0,6.10236l-6.27931,0l0,5.94882l-6.44138,0l0,-5.94882l-6.27931,0l0,-6.10236z"
                opacity="undefined"
                fill="#cccccc"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <md-bottom-bar class="md-accent" md-sync-route>
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
        ></md-bottom-bar-item>
      </div>
    </md-bottom-bar>
  </div>
</template>

<script>
import { StatsCard } from "@/components";
import mqtt from "mqtt";

export default {
  components: {
    StatsCard
  },
  data() {
    return {
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
        payload: '{ "type": "Alarm","msg": "Major problem", "location": "Full system", "solved": "no" }'
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
    this.doUnSubscribe();
    this.destroyConnection();
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
  color: red;
}
</style>

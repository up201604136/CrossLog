<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="grey">
          <template slot="header">
            <md-icon>list_alt</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-size:20px;margin-top:20px">
              Alarm/Event Location
            </p>
            <!-- // GRÁFICO // -->
            <div style="display:flex;width:100%;height:100%">
              <div
                style="text-align:left;margin-top:50px;width:60%;;height:100%"
              >
                <h3 class="title">
                  <small style="color:black; margin-left:10px">Home Page</small>
                </h3>
                <h3
                  style="background-color:#d0d0e1;border-bottom-left-radius: 5px;border-top-left-radius: 5px;"
                  class="title"
                >
                  <small style="color:black;margin-left:10px; "
                    >Full system</small
                  >
                </h3>
                <h3 class="title">
                  <small style="color:black;margin-left:10px"
                    >ID and Weight</small
                  >
                </h3>
                <h3
                  style="background-color:#d0d0e1;border-bottom-left-radius: 5px;border-top-left-radius: 5px;"
                  class="title"
                >
                  <small style="color:black; margin-left:10px"
                    >Dynamic Accumulator</small
                  >
                </h3>
                <h3 class="title">
                  <small style="color:black; margin-left:10px"
                    >Palletization</small
                  >
                </h3>
                <h3
                  style="background-color:#d0d0e1;border-bottom-left-radius: 5px;border-top-left-radius: 5px;"
                  class="title"
                >
                  <small style="color:black; margin-left:10px"
                    >Progressive Involvment</small
                  >
                </h3>
              </div>

              <!-- // SOLVED AND NOT SOLVED BY LOCATION // -->
              <div style="width:40%;margin-top:50px;text-align:center">
                <h3 class="title">
                  <md-icon style="color:red">clear</md-icon>
                  <small style="color:black;">{{ home_page_not_solved }}</small>
                  <md-icon style="color:green;margin-left:8px">done</md-icon>
                  <small style="color:black;">{{ home_page_solved }} </small>
                </h3>
                <h3
                  style="background-color:#d0d0e1;  border-bottom-right-radius: 5px;border-top-right-radius: 5px;"
                  class="title"
                >
                  <md-icon style="color:red">clear</md-icon>
                  <small style="color:black;">{{
                    full_system_not_solved
                  }}</small>
                  <md-icon style="color:green;margin-left:8px">done</md-icon>
                  <small style="color:black;">{{ full_system_solved }}</small>
                </h3>
                <h3 class="title">
                  <md-icon style="color:red">clear</md-icon>
                  <small style="color:black;">{{ id_weight_not_solved }}</small>
                  <md-icon style="color:green;margin-left:8px">done</md-icon>
                  <small style="color:black;">{{ id_weight_solved }}</small>
                </h3>
                <h3
                  style="background-color:#d0d0e1;  border-bottom-right-radius: 5px;border-top-right-radius: 5px;"
                  class="title"
                >
                  <md-icon style="color:red">clear</md-icon>
                  <small style="color:black;">{{ dynamic_not_solved }}</small>
                  <md-icon style="color:green;margin-left:8px">done</md-icon>
                  <small style="color:black;">{{ dynamic_solved }}</small>
                </h3>
                <h3 class="title">
                  <md-icon style="color:red">clear</md-icon>
                  <small style="color:black;">{{
                    palletization_not_solved
                  }}</small>
                  <md-icon style="color:green;margin-left:8px">done</md-icon>
                  <small style="color:black;">{{ palletization_solved }}</small>
                </h3>
                <h3
                  style="background-color:#d0d0e1;  border-bottom-right-radius: 5px;border-top-right-radius: 5px;"
                  class="title"
                >
                  <md-icon style="color:red">clear</md-icon>
                  <small style="color:black;">{{
                    progressive_not_solved
                  }}</small>
                  <md-icon style="color:green;margin-left:8px">done</md-icon>
                  <small style="color:black;">{{ progressive_solved }}</small>
                </h3>
              </div>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="grey">
          <template slot="header">
            <md-icon>list_alt</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-size:20px;margin-top:20px;height:95px">
              Alarms/Events by day
            </p>
            <!-- //CHART ? -->
            <div id="chart"></div>
          </template>
        </stats-card>
      </div>
            <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="grey">
          <template slot="header">
            <md-icon>list_alt</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-size:20px;margin-top:20px;height:100px">
              Solved issues
            </p>
            <!-- //CHART ? -->
            <div id="chart_donut"></div>
          </template>
        </stats-card>
      </div>

      <!-- // ALARMS / EVENTS TABLE // -->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="">
            <h4
              class="title"
              style="font-size:25px;width:100%;text-align:center"
            >
              Alarms and Events
            </h4>
          </md-card-header>
          <md-card-content>
            <md-table v-model="users">
              <md-table-row
                slot="md-table-row"
                slot-scope="{ item, index }"
                :key="index"
              >
                <md-table-cell md-label="Date">{{ item.data }}</md-table-cell>
                <md-table-cell md-label="Type (Alarm / Event)">{{
                  item.type
                }}</md-table-cell>
                <md-table-cell
                  style="background-color:#d0d0e1"
                  md-label="Message"
                  >{{ item.msg }}</md-table-cell
                >
                <md-table-cell md-label="Location">{{
                  item.location
                }}</md-table-cell>
                <md-table-cell md-label="Solved">
                  <a
                    @click="solveProblem(item.id_alarme)"
                    v-if="item.solved == 'no'"
                    style="cursor:pointer"
                    ><md-icon style="color:red">clear</md-icon></a
                  >
                  <span v-if="item.solved == 'yes'"
                    ><md-icon style="color:green">done</md-icon></span
                  >
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import mqtt from "mqtt";
import ApexCharts from "apexcharts";

import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
  SimpleTable
} from "@/components";
export default {
  components: {
    StatsCard
  },
  data() {
    return {
      options: {
        chart: {
          type: "bar"
        },
        series: [
          {
            name: "alarms / events",
            data: []
          }
        ],
        xaxis: {
          categories: []
        }
      },

          options_chart : {
            labels: ['Solved','Not Solved'],
            colors: ['#00cc66', '#ff1a1a'],
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        },

      full_system_not_solved: 0,
      full_system_solved: 0,
      home_page_not_solved: 0,
      home_page_solved: 0,
      id_weight_not_solved: 0,
      id_weight_solved: 0,
      dynamic_not_solved: 0,
      dynamic_solved: 0,
      palletization_not_solved: 0,
      palletization_solved: 0,
      progressive_not_solved: 0,
      progressive_solved: 0,
      users: [],
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
        topic: "topic/alarms_events",
        qos: 0
      },
      subscription_alarm_chart: {
        topic: "topic/alarm_chart",
        qos: 0
      },
       subscription_chart_final: {
        topic: "topic/chart_final",
        qos: 0
      },
      publish_solved: {
        topic: "topic/alarme_id",
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }'
      },
      publish_chart: {
        topic: "topic/chart",
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }'
      },
      receiveNews: "",
      mensagem: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 }
      ],
      client: {
        connected: false
      },
      subscribeSuccess: false,
      connection_verify: 0,
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },

  methods: {
    solveProblem(aux){
      this.doPublish_solved(aux);
    },
    // 创建连接
    createConnection() {
      // 连接字符串, 通过协议指定使用的连接方式
      // ws 未加密 WebSocket 连接
      // wss 加密 WebSocket 连接
      // mqtt 未加密 TCP 连接
      // mqtts 加密 TCP 连接
      // wxs 微信小程序连接
      // alis 支付宝小程序连

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
        if (topic == "topic/alarms_events") {
          var obj = JSON.parse(message);
          //console.log(obj);
          this.users = obj;
         // console.log(`Received message ${message} from topic ${topic}`);
         // console.log(this.users.length)


        }
         

        if (topic == "topic/alarm_chart") {
          var obj = JSON.parse(message);
         // console.log(obj);
          this.full_system_not_solved = obj.full_system_not_solved;
          this.full_system_solved = obj.full_system_solved;
          this.home_page_not_solved = obj.home_page_not_solved;
          this.home_page_solved = obj.home_page_solved;
          this.id_weight_not_solved = obj.id_weight_not_solved;
          this.id_weight_solved = obj.id_weight_solved;
          this.dynamic_not_solved = obj.dynamic_not_solved;
          this.dynamic_solved = obj.dynamic_solved;
          this.palletization_not_solved = obj.palletization_not_solved;
          this.palletization_solved = obj.palletization_solved;
          this.progressive_not_solved = obj.progressive_not_solved;
          this.progressive_solved = obj.progressive_solved; 
        }
        if (topic == "topic/chart_final") {
          var obj = JSON.parse(message);
          var i = 0;
          var tamanho = obj.length
          var mes = [tamanho];
          var day = [tamanho];
          var solved=0;
          var not_solved=0;
          while(tamanho>i){
            var date = obj[i].data
            if(obj[i].solved == 'yes'){
              solved++;
            }
            if(obj[i].solved == 'no'){
              not_solved++;
            }

            if(date.charAt(1)=='/'){
                mes[i] = date.charAt(0);
            } else {
               mes[i] = date.charAt(0) + '' + date.charAt(1);
            }

            if((date.charAt(1)=='/') && (date.charAt(3)=='/') ){
              day[i] = date.charAt(2);
             } 
             if((date.charAt(1)=='/') && (date.charAt(4)=='/') ){
               day[i] = date.charAt(2) + '' + date.charAt(3);
             }
             if((date.charAt(2)=='/') && (date.charAt(4)=='/') ){
               day[i] = date.charAt(3);
             }
             if((date.charAt(2)=='/') && (date.charAt(5)=='/') ){
               day[i] = date.charAt(3) + '' + date.charAt(4);
             }
            
              i++
          }
            var k=0;
            var aux=0;
            var juntos = [tamanho]
            var eixo_x = [10]
            var y = 0;
            while(tamanho>k){
              juntos[k] = day[k] + '/' + mes[k]
              k++
            }
            var counts = {};
      juntos.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

          var keys = Object.keys(counts)
          var values = Object.values(counts)
            console.log(solved)
            console.log(not_solved)
            this.options.xaxis.categories = keys
           this.options.series[0].data = values

           // Make Alarm/Event by day Chart
        var chart = new ApexCharts(document.querySelector("#chart"), this.options);
        chart.render();

        // Make solved/not solved Chart
        this.options_chart.series = [solved,not_solved]
         var chart_donut = new ApexCharts(document.querySelector("#chart_donut"), this.options_chart);
        chart_donut.render();
          
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
    doSubscribe_alarm_chart() {
      const { topic, qos } = this.subscription_alarm_chart;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
        doSubscribe_chart_final() {
      const { topic, qos } = this.subscription_chart_final;
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
    doUnSubscribe_alarm_chart() {
      const { topic } = this.subscription_alarm_chart;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
        doUnSubscribe_chart_final() {
      const { topic } = this.subscription_chart_final;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    // 发送消息
    doPublish_solved(aux) {
      const { topic, qos, payload } = this.publish_solved;
      let x = "{ " + '"id_alarme"' + " : " + aux + "}";
      console.log(x);

      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
      });
    },
    doPublish_chart() {
      const { topic, qos, payload } = this.publish_chart;
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
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
  beforeMount() {
    this.createConnection();
    this.doSubscribe();
    this.doPublish_chart();
    this.doSubscribe_alarm_chart();
    this.doSubscribe_chart_final();
  },
  beforeDestroy() {
    this.doUnSubscribe();
    this.destroyConnection();
    this.doUnSubscribe_alarm_chart();
    this.doUnSubscribe_chart_final();
  }
};
</script>

<template>
  <div class="content" >
     <h5 v-if="client.connected == 1" style="margin-top:-10px;margin-left:20px"><md-icon style="color:#00cc00;margin-top:-8px">wifi</md-icon> <b>Online</b></h5>
    <h5 v-if="client.connected == 0" style="margin-top:-10px;margin-left:20px"><md-icon style="color:red;margin-top:-8px">wifi_off</md-icon> <b>Offline</b></h5>
   
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
              Orders
            </p>
            <div>
            </div>
            <div style="text-align:left;margin-top:45px">

              <h3 class="title" style="width:100%;text-align:center;margin-bottom:10px;margin-top:-5px">
                <small class="myDIV" style="color:black;border-bottom:0.5px solid grey;padding:5px">Date - {{data_cima}}</small>
                <div class="hide"><md-icon style="font-size:8px">priority_high</md-icon>
                To modify date, go to Order List by Day<md-icon style="font-size:8px">priority_high</md-icon></div>
              </h3>

              <h3 class="title">
                {{complete}}/{{size}}
                <small style="color:green">Complete</small>
              </h3>
              <h3 class="title">
                {{in_progress}}/{{size}}
                <small style="color:black">In progress</small>
              </h3>
              <h3 class="title">
                {{pendent}}/{{size}}
                <small style="color:red">Pendent</small>
              </h3>
            </div>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a @click="doPublish_order" style="cursor:pointer"
                >Problems with an order?</a
              >
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>monitor</md-icon>
          </template>

          <template slot="content">
            <p class="category" style="font-size:20px;margin-top:20px">
              Process variables
            </p>
            <div>
            </div>
            <div style="text-align:left;margin-top:85px">
              <h3 class="title">
                {{ operators }}
                <i v-if="arrow_operators==1" class="fas fa-long-arrow-alt-up" style="color:green"></i>
                <small style="color:black; margin-left:5px">Operators</small>
              </h3>
              <h3 class="title">
                {{ agvs }}
                <small style="color:black;margin-left:5px">AGV´s</small>
              </h3>

              <h3 class="title">
                {{ dynamic_buffers }}
                <small style="color:black;margin-left:5px"
                  >Dynamic buffers</small
                >
              </h3>
            </div>
          </template>
          <template slot="footer">
            <div v-if="aux == '22'" class="stats">
              <md-icon class="text-danger">update</md-icon>
              <a @click="doPublish_variables" style="cursor:pointer"
                >Update process variables</a
              >
            </div>
            <div v-else class="stats">
              <md-icon class="text-danger">update</md-icon>
              <a href="#pablo">No updates needed</a>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-120 md-small-size-150 md-size-50"
      >
        <chart-card
          style="height:297px"
          :chart-data="emailsSubscriptionChart.data"
          :chart-options="emailsSubscriptionChart.options"
          :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="orange"
        >
          <template slot="content">
            <h4
              class="title"
              style="margin-top:10px;color:black;font-size:20px"
            >
              CrossLog Analysis
            </h4>
            <p class="category" style="margin-bottom:38px">
              Number of orders per month
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 10 days ago
            </div>
          </template>
        </chart-card>
      </div>

      <!-- // ORDERS TABLE // -->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4
              class="title"
              style="font-size:25px;width:100%;text-align:center"
            >
              Order list by day {{ prioridade }}
            </h4>
          </md-card-header>
          <md-datepicker
            style="margin-left:20px;width:95%;margin-top:10px;margin-bottom:-5px"
            v-model="selectedDate"
            :md-open-on-focus="false"
          >
            <label>Select date</label></md-datepicker
          >
          <md-card-content>
         <md-table v-model="users">
              <md-table-row
                slot="md-table-row"
                slot-scope="{ item, index }"
                :key="index"
              >
            <md-table-cell md-label="Priority">{{ item.prioridade }}</md-table-cell>
            <md-table-cell md-label="Client">{{ item.cliente }}</md-table-cell>
            <md-table-cell md-label="Status">{{ item.status }}</md-table-cell>
            <md-table-cell md-label="% Conclusion">{{ item.conclusion }} %</md-table-cell>
            <md-table-cell md-label="Actions">
                <a style="cursor:pointer" @click="subir_prioridade(item.prioridade,item.cliente,item.data,item.id_encomenda,item.status,item.conclusion)" href="" v-if="$keycloak.tokenParsed.given_name == 'Administrador'"><md-icon style="color:black">keyboard_arrow_up</md-icon></a>
                <a style="cursor:pointer" @click="descer_prioridade(item.prioridade,item.cliente,item.data,item.id_encomenda,item.status,item.conclusion)" href="" v-if="$keycloak.tokenParsed.given_name == 'Administrador'"><md-icon style="color:black">keyboard_arrow_down</md-icon></a>
                <a style="cursor:pointer" @click="show_more(item.id_encomenda)"><md-icon style="color:black">add</md-icon></a>
                <a v-if="$keycloak.tokenParsed.given_name == 'Administrador'" href=""><md-icon style="color:red">cancel</md-icon></a>
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

import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
  SimpleTable
} from "@/components";

export default {
  name: "dashboard_new",
  components: {
    StatsCard,
    ChartCard
  },
  data() {
    return {
      arrow_operators:0,
      data_cima:'',
      size:0,
      pendent:0,
      in_progress:0,
      complete:0,
      props: {
        tableHeaderColor: {
          type: String,
          default: ""
        }
      },
      selected: [],
      users: [],
      value: "",
      selectedDate: new Date(),
      aux: "22",
      prioridade : "",
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
        topic: "topic/hello",
        qos: 0
      },
      subscription_process_variables: {
        topic: "topic/process_variables",
        qos: 0
      },
      subscription_order_table_pub: {
        topic: "topic/order_table_pub",
        qos: 0
      },
      publish_order: {
        topic: "topic/home_page",
        qos: 0,
        payload: '{ "type": "Alarm","msg": "Problem with an order", "location": "Home Page", "solved": "no" }'
      },
      publish_variables: {
        topic: "topic/home_page",
        qos: 0,
        payload: '{ "type": "Event","msg": "Update variables", "location": "Home Page", "solved": "no" }'
      },
      publish_order_table: {
        topic: "topic/order_table",
        qos: 0,
        payload: ""
      },
      publish_prioridade: {
        topic: "topic/prioridade",
        qos: 0,
        payload: ""
      },
      publish_prioridade_descer: {
        topic: "topic/prioridade_descer",
        qos: 0,
        payload: ""
      },
      receiveNews: "",
      mensagem: "",
      message: "",
      operators: "",
      agvs: "",
      dynamic_buffers: "",
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
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
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
  watch:{
  selectedDate: function() {
      console.log(this.selectedDate)
      console.log("DDDD")
      this.doPublish_order_table()
      this.pendent = 0;
      this.in_progress = 0;
      this.complete = 0;
      this.data_cima = this.selectedDate
           this.data_cima = [this.selectedDate.getDate(),this.selectedDate.getMonth()+1,
               this.selectedDate.getFullYear()].join('/');

  }
  },
  methods: {

    subir_prioridade(prioridade,cliente,data,aux1,aux2,aux3){
      console.log("Subir prioridade " + prioridade + "da encomenda com ID" + aux1);
      this.doPublish_prioridade(prioridade,cliente,data,aux1,aux2,aux3);

    },
    descer_prioridade(prioridade,cliente,data,aux1,aux2,aux3){
      console.log("Descer prioridade " + prioridade + "da encomenda com ID" + aux1);
      this.doPublish_prioridade_descer(prioridade,cliente,data,aux1,aux2,aux3);

    },
    show_more(id_encomenda){
      console.log("Mais info sobre a encomenda número" + id_encomenda);
      window.location.href = "http://localhost:4000/typography?id_encomenda="+id_encomenda +''

    },
    // Create connection to the MQTT Broker
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
        connection_verify = 1;
      });
      this.client.on("error", error => {
        console.log("Connection failed", error);
        connection_verify = 0;
      });
      this.client.on("message", (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        if (topic == "topic/hello") {
          var obj = JSON.parse(message);
         // console.log(topic);
          this.mensagem = obj.int;
         // console.log(`Received message ${message} from topic ${topic}`);
        }
        if (topic == "topic/process_variables") {
         var obj = JSON.parse(message);
         // console.log(topic);
         if(obj.Dynamic_buffers > (obj.AGVs + obj.Operators)){
            this.arrow_operators = 1;
          } 
          this.operators = obj.Operators;
          this.agvs = obj.AGVs;
          this.dynamic_buffers = obj.Dynamic_buffers;

          
          



         // console.log(`Received message ${message} from topic ${topic}`);
        }
        if (topic == "topic/order_table_pub") {
         var obj = JSON.parse(message);
          console.log(obj);
          this.users = obj
          var tamanho = obj.length
          this.size = tamanho
          var i=0;
          while(tamanho>i){
            if(obj[i].status == 'Pendent'){
              this.pendent++;
            }
            if(obj[i].status == 'In Progress'){
              this.in_progress++;
            }
            if(obj[i].status == 'Complete'){
              this.complete++;
            }
            i++
          }

         // console.log(obj.length)
        


         // this.prioridade = obj[0].prioridade;
      
         // console.log(`Received message ${message} from topic ${topic}`);
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
    doSubscribe_process_variables() {
      const { topic, qos } = this.subscription_process_variables;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log("Subscribe to topics error", error);
          return;
        }
        this.subscribeSuccess = true;
        console.log("Subscribe to topics res", res);
      });
    },
    doSubscribe_order_table_pub() {
      const { topic, qos } = this.subscription_order_table_pub;
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
       doUnSubscribe_process_variables() {
      const { topic } = this.subscription;
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log("Unsubscribe error", error);
        }
      });
    },
    // 发送消息
    doPublish_order() {
      const { topic, qos, payload } = this.publish_order;
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
        alert("An alarm / event was set!");
      });
    },
    doPublish_variables() {
      const { topic, qos, payload } = this.publish_variables;
      this.client.publish(topic, payload, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
        alert("An alarm / event was set!");
      });
    },
        // send to NodeRed the date that the user chooses in the OrderList Table
       doPublish_order_table() {
      const { topic, qos, payload } = this.publish_order_table;
      let dataFormatada = ((this.selectedDate.getDate() )) + "/" + ((this.selectedDate.getMonth() + 1)) + "/" + this.selectedDate.getFullYear(); 
      var const1 = String(dataFormatada)

      this.client.publish(topic, const1, qos, error => {
        console.log('AQUI' + this.selectedDate)
        if (error) {
          console.log("Publish error", error);
        }
      });
    },
        doPublish_prioridade(prioridade, cliente,data,id_encomenda, status, conclusion) {
      const { topic, qos, payload } = this.publish_prioridade;
      let x = "{ "+'"prioridade"'+" : "+prioridade+","+'"cliente"'+" : "+'"' + cliente+'"' +","+'"data"'+" : "+'"' + data+'"' +","+'"id_encomenda"'+" : "+id_encomenda+","+'"status"'+" : "+ '"'+ status+'"'+","+'"conclusion"'+" : "+conclusion+" }"
      console.log(x)
      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log("Publish error", error);
        }
      });
    },
      doPublish_prioridade_descer(prioridade, cliente,data,id_encomenda, status, conclusion) {
      const { topic, qos, payload } = this.publish_prioridade_descer;
      let x = "{ "+'"prioridade"'+" : "+prioridade+","+'"cliente"'+" : "+'"' + cliente+'"' +","+'"data"'+" : "+'"' + data+'"' +","+'"id_encomenda"'+" : "+id_encomenda+","+'"status"'+" : "+ '"'+ status+'"'+","+'"conclusion"'+" : "+conclusion+" }"
      console.log(x)
      this.client.publish(topic, x, qos, error => {
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
  // when page loads, call these functions --> Create connection to MQQT Broker + Subscribe to the topic
  beforeMount() {
    this.createConnection();
    this.doSubscribe();
    this.doSubscribe_process_variables();
    this.doSubscribe_order_table_pub();
  },
  beforeDestroy() {
    this.doUnSubscribe();
    this.destroyConnection();
    this.doUnSubscribe_process_variables();
  }
};
</script>
<style scoped>
.hide {
  display: none;

}
    
.myDIV:hover + .hide {
  display: flex;
  color: black;
  font-size: 12px;

}
</style>
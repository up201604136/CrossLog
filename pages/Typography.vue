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
              Order details
            </p>
            <div>
            </div>
            <div style="text-align:left;margin-top:45px">
              <h3 class="title">
                <small style="color:grey">Order ID - </small><small style="color:black">{{url}}</small>
              </h3>
              <h3 class="title">
                <small style="color:grey">Client - </small><small style="color:black">{{order_cliente}}</small>
              </h3>
              <h3 class="title">
                <small style="color:grey">Number of pallets - </small><small style="color:black">{{number_pallets}}</small>
              </h3>
               <h3 class="title">
                <small style="color:grey">Estimated Completion time - </small>
              </h3>
              <h3 class="title">
                <small style="color:grey">Real Completion time - </small>
              </h3>
            </div>
          </template>

        </stats-card>
      </div>
          <!-- // ORDERS TABLE // -->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4
              class="title"
              style="font-size:25px;width:100%;text-align:center"
            >
              Order pallets details {{url}}
            </h4>
          </md-card-header>
          <md-card-content>
         <md-table v-model="users" :table-header-color="tableHeaderColor">
              <md-table-row
                slot="md-table-row"
                slot-scope="{ item, index }"
                :key="index"
              >
            <md-table-cell md-label="Order ID">{{ item.id_encomenda }}</md-table-cell>
            <md-table-cell md-label="Pallet ID">{{ item.id_palete }}</md-table-cell>
            <md-table-cell md-label="Status">{{ item.status_palete }}</md-table-cell>
            <md-table-cell md-label="% Conclusion">{{ item.conclusion_palete }} %</md-table-cell>
            <md-table-cell md-label="Buffer ID">{{ item.id_buffer }}</md-table-cell>
            <md-table-cell md-label="Visualize 3D">
            <a style="cursor:pointer"><md-icon style="color:black">play_arrow</md-icon></a>
                
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
import mqtt from 'mqtt'
import {
  StatsCard
} from "@/components";
export default {
  components: {
    StatsCard
  },
  data() {
    return {
      users: [],
      number_pallets:0,
      order_cliente:'',
            connection: {
        host: '127.0.0.1',
        port: 9000,
        endpoint: '',
        clean: true, // 保留会话
        connectTimeout: 4000, // 超时时间
        reconnectPeriod: 4000, // 重连时间间隔
        // 认证信息
        clientId: 'f8fd7d67-11d7-409b-acfb-f4f1da9ef440',
        username: 'admin',
        password: 'admin',
      },
      subscription: {
        topic: 'topic/order_details_table',
        qos: 0,
      },
      subscription_order_details_cliente: {
        topic: 'topic/order_details_cliente',
        qos: 0,
      },
      publish: {
        topic: 'topic/order_number',
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }',
      },
      receiveNews: '',
      mensagem: '',
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
      props: {
        dataBackgroundColor: {
          type: String,
          default: ""
        }
      },
      url: ""
    };
  },
  methods: {
    // 创建连接
    createConnection() {
      // 连接字符串, 通过协议指定使用的连接方式
      // ws 未加密 WebSocket 连接
      // wss 加密 WebSocket 连接
      // mqtt 未加密 TCP 连接
      // mqtts 加密 TCP 连接
      // wxs 微信小程序连接
      // alis 支付宝小程序连接
      const { host, port, endpoint, ...options } = this.connection
      const connectUrl = `ws://${host}:${port}${endpoint}`
      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.log('mqtt.connect error', error)
      }
      this.client.on('connect', () => {
        console.log('Connection succeeded!')
      })
      this.client.on('error', error => {
        console.log('Connection failed', error)
      })
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message)
        
        if (topic == "topic/order_details_table") {
          var obj = JSON.parse(message);
          this.users = obj
          this.number_pallets = this.users.length
         // this.prioridade = obj[0].prioridade;
      
         // console.log(`Received message ${message} from topic ${topic}`);
        }
         if (topic == "topic/order_details_cliente") {
          var aux = JSON.parse(message);
          this.order_cliente= aux[0].cliente
          console.log(aux[0].cliente)
      
          console.log(`Received message ${message} from topic ${topic}`);
        }
       
      //  console.log(`Received message ${message} from topic ${topic}`)
      })
    },
    // 订阅主题
    doSubscribe() {
      const { topic, qos } = this.subscription
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },
    doSubscribe_order_details_cliente() {
      const { topic, qos } = this.subscription_order_details_cliente
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },
    // 取消订阅
    doUnSubscribe() {
      const { topic } = this.subscription
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
        }
      })
    },
    doUnSubscribe_order_details_cliente() {
      const { topic } = this.subscription_order_details_cliente
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
        }
      })
    },
    // 发送消息
    doPublish() {
      const { topic, qos, payload } = this.publish
      var order_number = this.url

      this.client.publish(topic, order_number, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    // 断开连接
    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end()
          this.client = {
            connected: false,
          }
          console.log('Successfully disconnected!')
        } catch (error) {
          console.log('Disconnect failed', error.toString())
        }
      }
    },
  },

  beforeMount() {
    this.createConnection();
    this.doSubscribe();
    this.doSubscribe_order_details_cliente();
    var site = new URL(window.location.href);
    this.url = site.searchParams.get("id_encomenda");
    this.doPublish();
  },
   beforeDestroy() {
    this.doUnSubscribe();
    this.destroyConnection();
    this.doUnSubscribe_order_details_cliente();
  }
};
</script>

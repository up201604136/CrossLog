<script src="https://kit.fontawesome.com/bc42e7f86c.js" crossorigin="anonymous"></script>

<template>
  <div class="home-container">
 <h3 v-if="client.connected == 1" ><md-icon style="color:#00cc00;margin-right:10px">wifi</md-icon>Server Online</h3>
    <h3 v-if="client.connected == 0"><md-icon style="color:red;margin-right:10px">wifi_off</md-icon>Offline</h3>
<i class="fas fa-atom"></i>

<div class="title" >AGV Control system Simulation</div>
<div class="container">
  <div class="peao1">
    <h3>AGV 1</h3>
    <div class="container2">
      <div class="row1">
          <div class="column1">
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(1,4)" :src="image" style="width:60px; transform: rotate(180deg);cursor:pointer">
          </div> 
          <div class="column1">
          </div> 
      </div>
      <div class="row1">
                  <div class="column1">
              <img class="arrow" @click="doPublish(1,1)" :src="image" style="width:60px; transform: rotate(-90deg);cursor:pointer">
          </div> 
          <div class="column1">
            Last move: <br>{{movement_1}}
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(1,3)" :src="image" style="width:60px; transform: rotate(90deg);cursor:pointer">
          </div>
      </div>
      <div class="row1">
                  <div class="column1">
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(1,2)" :src="image" style="width:60px; transform: rotate(0deg);cursor:pointer">
          </div> 
          <div class="column1">
          </div>
      </div>
    </div>
            <h3 style="cursor:pointer" @click="doPublish(1,5)">Work</h3>
    <h3 style="cursor:pointer" @click="doPublish(1,6)">Stop work</h3>
    <h3 style="cursor:pointer" @click="doPublish(1,7)">ALARM</h3>
      <section>
    <range-slider
    style="margin-top:30px"
      class="slider"
      min="0"
      max="100"
      step="1"
      v-model="sliderValue_battery1"
    >
    </range-slider>
    <div> Battery level -> {{ sliderValue_battery1 }} %</div>

  </section>
  </div>
  <div class="peao2">
    <h3>AGV 2</h3>
    <div class="container2">
      <div class="row1">
          <div class="column1">
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(2,4)" :src="image" style="width:60px; transform: rotate(180deg);cursor:pointer">
          </div> 
          <div class="column1">
          </div> 
      </div>
      <div class="row1">
                  <div class="column1">
              <img class="arrow" @click="doPublish(2,1)" :src="image" style="width:60px; transform: rotate(-90deg);cursor:pointer">
          </div> 
          <div class="column1">
            Last move: <br>{{movement_2}}
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(2,3)" :src="image" style="width:60px; transform: rotate(90deg);cursor:pointer">
          </div>
      </div>
      <div class="row1">
                  <div class="column1">
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(2,2)" :src="image" style="width:60px; transform: rotate(0deg);cursor:pointer">
          </div> 
          <div class="column1">
          </div>
      </div>
    </div>
        <h3 style="cursor:pointer" @click="doPublish(2,5)">Work</h3>
    <h3 style="cursor:pointer" @click="doPublish(2,6)">Stop work</h3>
    <h3 style="cursor:pointer" @click="doPublish(2,7)">ALARM</h3>
          <section>
    <range-slider
    style="margin-top:30px"
      class="slider"
      min="0"
      max="100"
      step="1"
      v-model="sliderValue_battery2"
    >
    </range-slider>
    <div> Battery level -> {{ sliderValue_battery2 }} %</div>

  </section>
  </div>
  <div class="peao3">
    <h3>AGV + Gripper</h3>
    <div class="container2">
      <div class="row1">
          <div class="column1">
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(3,4)" :src="image" style="width:60px; transform: rotate(180deg);cursor:pointer">
          </div> 
          <div class="column1">
          </div> 
      </div>
      <div class="row1">
                  <div class="column1">
              <img class="arrow" @click="doPublish(3,1)" :src="image" style="width:60px; transform: rotate(-90deg);cursor:pointer">
          </div> 
          <div class="column1">
            Last move: <br>{{movement_3}}
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(3,3)" :src="image" style="width:60px; transform: rotate(90deg);cursor:pointer">
          </div>
      </div>
      <div class="row1">
                  <div class="column1">
          </div> 
          <div class="column1">
             <img class="arrow" @click="doPublish(3,2)" :src="image" style="width:60px; transform: rotate(0deg);cursor:pointer">
          </div> 
          <div class="column1">
          </div>
      </div>
    </div>
    <h3 style="cursor:pointer" @click="doPublish(3,5)">Work</h3>
    <h3 style="cursor:pointer" @click="doPublish(3,6)">Stop work</h3>
    <h3 style="cursor:pointer" @click="doPublish(3,7)">ALARM</h3>
          <section>
    <range-slider
    style="margin-top:30px"
      class="slider"
      min="0"
      max="100"
      step="1"
      v-model="sliderValue_battery3"
    >
    </range-slider>
    <div> Battery level -> {{ sliderValue_battery3 }} %</div>

  </section>
    <h2 style="color:#30a4ff;margin-top:20px">Gripper control system</h2>
    <div class="ranges">
      <section>
    <range-slider
    style="margin-top:30px"
      class="slider"
      min="0"
      max="100"
      step="1"
      v-model="sliderValue"
    >
    </range-slider>
    <div> X -> {{ sliderValue }}</div>

  </section>
        <section>
    <range-slider
      style="transform:rotate(90deg); margin-top:30px"
      class="slider" 
      min="0"
      max="100"
      step="1"
      v-model="sliderValuey"
    >
    </range-slider>
    <div style="margin-left:65px"> Y -> {{ sliderValuey }}</div>

  </section>

    </div>

  </div>
</div>
  </div>
</template>

<script>
import mqtt from 'mqtt'
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";

export default {
  name: 'Home',
  components: {
     RangeSlider
  },
  data() {
    return {
      sliderValue_battery1:100,
      sliderValue_battery2:100,
      sliderValue_battery3:100,
      sliderValue: 50,
      sliderValuey : 50,
      movement_1:'',
      movement_2:'',
      movement_3:'',
      image: require('@/assets/img/arrow2.png'),
      connection: {
        host: '127.0.0.1',
        port: 9000,
        endpoint: '',
        clean: true, // 保留会话
        connectTimeout: 4000, // 超时时间
        reconnectPeriod: 4000, // 重连时间间隔
        // 认证信息
        clientId: 'teste',
        username: 'admin',
        password: 'admin',
      },
      subscription: {
        topic: 'topic/hello',
        qos: 0,
      },
      publish: {
        topic: 'topic/agvs',
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }',
      },
        publish_sliderValue: {
        topic: 'topic/sliderValue',
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }',
      },
        publish_sliderValuey: {
        topic: 'topic/sliderValuey',
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }',
      },
       publish_sliderValue_battery1: {
        topic: 'topic/sliderValue_battery1',
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }',
      },
      publish_sliderValue_battery2: {
        topic: 'topic/sliderValue_battery2',
        qos: 0,
        payload: '{ "msg": "Hello, this is working." }',
      },
      publish_sliderValue_battery3: {
        topic: 'topic/sliderValue_battery3',
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
    }
  },
    watch:{
  sliderValue: function() {
      this.doPublish_sliderValue(this.sliderValue)
      //console.log(this.sliderValue)
      },
       sliderValuey: function() {
      this.doPublish_sliderValuey(this.sliderValuey)
      //console.log(this.sliderValuey)
      },
      sliderValue_battery1: function() {
      this.doPublish_sliderValue_battery1(this.sliderValue_battery1)
      //console.log(this.sliderValue_battery1)
      },
      sliderValue_battery2: function() {
      this.doPublish_sliderValue_battery2(this.sliderValue_battery2)
     // console.log(this.sliderValue_battery2)
      },
      sliderValue_battery3: function() {
      this.doPublish_sliderValue_battery3(this.sliderValue_battery3)
      // console.log(this.sliderValue_battery1)
      }
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
       var obj = JSON.parse(message);
       console.log(obj);
        this.mensagem = message
       
        console.log(`Received message ${message} from topic ${topic}`)
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
    // 取消订阅
    doUnSubscribe() {
      const { topic } = this.subscription
      this.client.unsubscribe(topic, error => {
        if (error) {
          console.log('Unsubscribe error', error)
        }
      })
    },
    // 发送消息
    doPublish(agv,position) {
      const { topic, qos, payload } = this.publish
      if(position == '1' && agv == '1'){
        position = 'u'
        this.movement_1 = 'up'
      }
      if(position == '1' && agv == '2'){
        position = 'u'
        this.movement_2 = 'up'
      }
      if(position == '1' && agv == '3'){
        position = 'u'
        this.movement_3 = 'up'
      }
      if(position == '2' && agv == '1'){
        position = 'r'
        this.movement_1 = 'right'
      }
      if(position == '2' && agv == '2'){
        position = 'r'
        this.movement_2 = 'right'
      }
      if(position == '2' && agv == '3'){
        position = 'r'
        this.movement_3 = 'right'
      }

      if(position == '3' && agv == '1'){
        position = 'd'
        this.movement_1 = 'down'
      }
      if(position == '3' && agv == '2'){
        position = 'd'
        this.movement_2 = 'down'
      }
      if(position == '3' && agv == '3'){
        position = 'd'
        this.movement_3 = 'down'
      }
      if(position == '4' && agv == '1'){
        position = 'l'
        this.movement_1 = 'left'
      }
      if(position == '4' && agv == '2'){
        position = 'l'
        this.movement_2 = 'left'
      }
      if(position == '4' && agv == '3'){
        position = 'l'
        this.movement_3 = 'left'
      }
            if(position == '5' && agv == '1'){
        position = 'w'
      }
      if(position == '6' && agv == '1'){
        position = 's'
      }
      if(position == '7' && agv == '1'){
        position = 'A'
      }
       if(position == '8' && agv == '1'){
        position = 'f_b'
      }
      if(position == '9' && agv == '1'){
        position = 'm_b'
      }
      if(position == '10' && agv == '1'){
        position = 'l_b'
      }
      if(position == '5' && agv == '2'){
        position = 'w'
      }
      if(position == '6' && agv == '2'){
        position = 's'
      }
      if(position == '7' && agv == '2'){
        position = 'A'
      }
       if(position == '8' && agv == '2'){
        position = 'f_b'
      }
      if(position == '9' && agv == '2'){
        position = 'm_b'
      }
      if(position == '10' && agv == '2'){
        position = 'l_b'
      }
      if(position == '5' && agv == '3'){
        position = 'w'
      }
      if(position == '6' && agv == '3'){
        position = 's'
      }
      if(position == '7' && agv == '3'){
        position = 'A'
      }
            if(position == '8' && agv == '3'){
        position = 'f_b'
      }
      if(position == '9' && agv == '3'){
        position = 'm_b'
      }
      if(position == '10' && agv == '3'){
        position = 'l_b'
      }
      if(position == '11' && agv == '3'){
        position = this.sliderValue
      }
      
      let x = "{ "+'"agv"'+" : "+agv+","+'"position"'+" : "+'"'+ position+'"'+" }"
      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
        doPublish_sliderValue(value) {

      const { topic, qos, payload } = this.publish_sliderValue
      let x = "{ "+'"x"'+" : "+value+" }"
      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
        doPublish_sliderValuey(value) {

      const { topic, qos, payload } = this.publish_sliderValuey
      let x = "{ "+'"x"'+" : "+value+" }"
      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
      doPublish_sliderValue_battery1(value) {

      const { topic, qos, payload } = this.publish_sliderValue_battery1
      let x = "{ "+'"x"'+" : "+value+" }"
      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    doPublish_sliderValue_battery2(value) {

      const { topic, qos, payload } = this.publish_sliderValue_battery2
      let x = "{ "+'"x"'+" : "+value+" }"
      this.client.publish(topic, x, qos, error => {
        if (error) {
          console.log('Publish error', error)
        }
      })
    },
    doPublish_sliderValue_battery3(value) {

      const { topic, qos, payload } = this.publish_sliderValue_battery3
      let x = "{ "+'"x"'+" : "+value+" }"
      this.client.publish(topic, x, qos, error => {
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


  },
  beforeDestroy() {
    this.destroyConnection();

 }
}

</script>

<style lang="scss">
.arrow:hover{
opacity:0.5;
}
.ranges{
  display: flex;
  margin-top:50px;
  margin-left:30px;
}
.title{
  text-align: center;
  margin-top:50px;
  font-size:20px;
}
.container{
  width: 100%;
  display:flex;
  height: 300px;
  margin-top:80px;
}
.container2{
  width: 100%;
  display:flex;
  height: 250px;
  margin-top:30px;
}
.column1{
  height: 33%;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  font-size:17px
}
.row1{
  width: 33.333%;
text-align:center;
}
.peao1,.peao2,.peao3{
width: 33.333%;
text-align:center;
border-left: 1px solid black;
}

@import url('../assets/style/home.scss');

.home-container {
  max-width: 1100px;
  margin: 0 auto;

  .conn-btn {
    color: #fff;
    background-color: #00b173;
    font-size: 14px;
  }

  .publish-btn {
    margin-bottom: 20px;
    float: right;
  }

  .el-button--success {
    background-color: #34c388 !important;
    border-color: #34c388 !important;
    font-size: 14px !important;
  }

  .el-button--danger {
    background-color: #f5222d !important;
    border-color: #f5222d !important;
  }

  .el-form-item {
    &.is-error {
      .el-input__inner,
      .el-textarea__inner {
        box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
      }
    }
    &.is-success {
      .el-input__inner,
      .el-textarea__inner {
        border-color: #34c388 !important;
      }
    }
  }
}
</style>

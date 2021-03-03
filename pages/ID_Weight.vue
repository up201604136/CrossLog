
<template>
  <div class="content">
    <div class="card_and_svg">
      <div
        id="card1"
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
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
                  <h5>Conveyors speed</h5>
                  <div class="list_conveyor">
                    <div class="list1">
                      <h4>M1 - </h4>
                      <h4>M2 - </h4>
                      <h4>M3 - </h4>
                      <h4>M4 - </h4>
                      <h4>M5 - </h4>
                      <h4>M6 - </h4>
                      <h4>M7 - </h4>
                      <h4>M8 - </h4>
                    </div>
                    <div class="list2">
                      <h4>M9 - </h4>
                      <h4>M10 - </h4>
                      <h4>M11 - </h4>
                      <h4>M12 - </h4>
                      <h4>M13 - </h4>
                      <h4>M14 - </h4>
                      <h4>M15 - </h4>
                    </div>
                  </div>
                </div>
              </h3>
            </div>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Report a problem with this system</a>
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
                xlink:href="@/assets/img/weigh_final.png"
                id="svg_1"
                height="649.57131"
                width="783"
                y="-36.34898"
              />
              <ellipse
                stroke="transparent"
                ry="11.5"
                rx="12"
                id="svg_14"
                cy="182"
                cx="510"
                opacity="undefined"
                fill-opacity="null"
                stroke-opacity="null"
                stroke-dasharray="null"
                stroke-width="null"
                fill="green"
              />
              <ellipse
                stroke="transparent"
                ry="11.5"
                rx="12"
                id="svg_16"
                cy="275"
                cx="158"
                opacity="undefined"
                fill-opacity="null"
                stroke-opacity="null"
                stroke-dasharray="null"
                stroke-width="null"
                fill="red"
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
          class="active"
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

export default {
  name: "ID_Weight",
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

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.list_conveyor {
  width: 100%;
  display: flex;
}
.list1 {
  width: 50%;
  text-align: left;
}
.list1 h4 {
  font-size: 15px;
}

.list2 {
  width: 50%;
  text-align: left;
  font-size: 15px;
}
.list2 h4 {
  font-size: 15px;
}
</style>

// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import ID_Weight from "@/pages/ID_Weight.vue";
import dynamic_acc from "@/pages/dynamic_acc.vue";
import palletization from "@/pages/palletization.vue";
import progressive_involvment from "@/pages/progressive_involvment.vue";
// router setup

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";
import VueKeycloakJs from "@dsb-norge/vue-keycloak-js";
import Chartist from "chartist";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
// configure router
Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: 'login-required',
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html"
  },
  config: {
    url: 'http://localhost:8080/auth',
    clientId: 'vue-test-app',
    realm: 'keycloak-demo'
  }
})
Vue.use(VueMaterial)
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      redirect: "/dashboard",
      children: [
        {
          path: "progressive_involvment",
          name: "progressive_involvment",
          component: progressive_involvment
        },
        {
          path: "palletization",
          name: "palletization",
          component: palletization
        },
        {
          path: "dynamic_acc",
          name: "dynamic_acc",
          component: dynamic_acc
        },
        {
          path: "ID_Weight",
          name: "ID_Weight",
          component: ID_Weight
        },
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "user",
          name: "User Profile",
          component: UserProfile
        },
        {
          path: "table",
          name: "Table List",
          component: TableList
        },
        {
          path: "typography",
          name: "Typography",
          component: Typography
        },
        {
          path: "icons",
          name: "Icons",
          component: Icons
        },
        {
          path: "maps",
          name: "Maps",
          meta: {
            hideFooter: true
          },
          component: Maps
        },
        {
          path: "notifications",
          name: "Notifications",
          component: Notifications
        },
        {
          path: "upgrade",
          name: "Upgrade to PRO",
          component: UpgradeToPRO
        }
      ]
    }
  ], // short for routes: routes,
  linkExactActiveClass: "nav-item active"
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // We wait for Keycloak init, then we can call all methods safely
    while (!router.app.$keycloak.ready) {
      await sleep(100)
    }
    
    if (router.app.$keycloak.authenticated) {
      next()
    } else {
      const loginUrl = router.app.$keycloak.createLoginUrl()
      window.location.replace(loginUrl)
    }
  } else {
    next()
  }
})

Vue.prototype.$Chartist = Chartist;


Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  router,
  data: {
    Chartist: Chartist
  },
  render: h => h(App)
}).$mount("#app");

let payload = {
  idToken: keycloak.idToken,
  accessToken: keycloak.token
}
if (keycloak.token && keycloak.idToken && keycloak.token != '' && keycloak.idToken != '') {
  store.commit("login", payload);
  console.log("User has logged in: " + keycloak.subject)
}
else {
  store.commit("logout");
}

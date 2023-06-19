import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import axios from 'axios'
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";


// Axios defaults
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = process.env.VUE_APP_URL

// Set authorization header
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.provide('$http', axios);
appInstance.config.productionTip = false;
appInstance.mount("#app");

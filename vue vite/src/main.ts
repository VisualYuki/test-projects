import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//import Vue from "vue";
//import { ValidationProvider, extend } from "vee-validate";

//Vue.component("ValidationProvider", ValidationProvider);

let app = createApp(App);
app.use(ElementPlus, {});

app.mount("#app");

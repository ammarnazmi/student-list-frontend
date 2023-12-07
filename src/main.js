import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import locale from "@/utils/locale";
import loadComponents from "./components/componentLoader";
import store from "./stores/store";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

store.$backendURL = "https://vuecrud-backend.test";

app.use(router);
app.use(locale);
app.use(store);
app.use(Toaster);

loadComponents(app);

app.mount("#app");

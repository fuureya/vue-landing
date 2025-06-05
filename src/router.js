import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import About from "./pages/About.vue";
import Tulisan from "./pages/Tulisan.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/about", component: About },
  { path: "/tulisan", component: Tulisan },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

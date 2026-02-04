import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import About from "./pages/About.vue";
import Tulisan from "./pages/Tulisan.vue";
import Kontak from "./pages/Kontak.vue";
import Proyek from "./pages/Proyek.vue";
import Sertifikat from "./pages/Sertifikat.vue";

const routes = [
  { path: "/", component: Homepage },
  { path: "/about", component: About },
  { path: "/tulisan", component: Tulisan },
  { path: "/kontak", component: Kontak },
  { path: "/proyek", component: Proyek },
  { path: "/sertifikat", component: Sertifikat },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,

    meta: {
      title: "Jaoued MOUETAMID | Accueil",
      transition: "overlay-up-full",
    },
  },
  {
    path: "/apropos",
    name: "About",
    component: About,
    meta: {
      title: "Jaoued MOUETAMID | A propos",
      transition: "overlay-left-full",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

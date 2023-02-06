import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ContactUs from "./pages/ContactUs.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/chi-siamo",
      name: "about-us",
      component: AboutUs,
    },
    {
        path: "/progetti/:slug",
        name: "single-project",
        component: SingleProject,
      },
    {
      path: "/contattaci",
      name: "contact-us",
      component: ContactUs,
    },
  ],
});

export default router;
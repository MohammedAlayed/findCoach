// src/router/index.js

import Vue from "vue";
import Router from "vue-router";

// Import your components

import Dashboard from "@/views/HomePage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history", // Use history mode for cleaner URLs (no hash #)
  routes: [
    // Catch-all route for 404 Not Found
    {
      path: "*",
      name: "NotFound",
      component: Dashboard,
    },
  ],
});

export default router;

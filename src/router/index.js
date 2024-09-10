// Import necessary functions from vue-router
import { createRouter, createWebHistory } from "vue-router";

// Import the HomeView component to be used in routing
import HomeView from "../views/HomeView.vue";

const routes = [{ path: "/", name: "home", component: HomeView }];

// Create the router instance
const router = createRouter({
  // Use history mode for cleaner URLs without hash
  history: createWebHistory(process.env.BASE_URL),
  // Define the routes to be used in the router
  routes,
});
export default router;

// Import the `createRouter` and `createWebHashHistory` methods from the `vue-router` library
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Request from "../views/Request-password.vue";
import Reset from "../views/Reset-password.vue";


// Define an empty array of routes
const routes = [
    { path: "/dashboard", name: "dashboard", component: Dashboard },
    { path: "/login", name: "login", component:Login },
    { path: "/request-password", name: "request", component:Request },
    { path: "/reset-password/token", name: "reset", component:Reset },


];

// Create a Vue Router instance and store it in the `router` constant
const router = createRouter({
    // Use the `createWebHashHistory` method to create the history mode for the router  without the hashtag
    history: createWebHistory(),
    // Pass the routes array to the router
    routes
});

// Export the router instance so it can be used in other parts of the application
export default router;

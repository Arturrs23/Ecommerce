import {createRouter, createWebHistory} from "vue-router";
import AppLayout from '../components/AppLayout.vue'
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Products from "../views/Products/Products.vue";
import Users from "../views/Users/Users.vue";
import Customers from "../views/Customers/Customers.vue";
// import CustomerView from "../views/Customers/CustomerView.vue";
// import Orders from "../views/Orders/Orders.vue";
// import OrderView from "../views/Orders/OrderView.vue";
import Request from "../views/Request-password.vue";
import Reset from "../views/Reset-password.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store";
// import Report from "../views/Reports/Report.vue";
// import OrdersReport from "../views/Reports/OrdersReport.vue";
// import CustomersReport from "../views/Reports/CustomersReport.vue";


// creating app layout and listing all the subpages as children
const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // the dashboard   
    path: '/app',
    name: 'app',
    // redirect: '/app/dashboard',
    component: AppLayout,
    meta: {
      requiresAuth: true
    },
    // all the subpages of /app
    children: [
      {
        path: 'dashboard',
        name: 'app.dashboard',
        component: Dashboard
      },
      {
        path: 'products',
        name: 'app.products',
        component: Products
      },
      {
        path: 'users',
        name: 'app.users',
        component: Users
      },
      {
        path: 'customers',
        name: 'app.customers',
        component: Customers
      },
    //   {
    //     path: 'customers/:id',
    //     name: 'app.customers.view',
    //     component: CustomerView
    //   },
    //   {
    //     path: 'orders',
    //     name: 'app.orders',
    //     component: Orders
    //   },
    //   {
    //     path: 'orders/:id',
    //     name: 'app.orders.view',
    //     component: OrderView
    //   },
    //   {
    //     path: '/report',
    //     name: 'reports',
    //     component: Report,
    //     meta: {
    //       requiresAuth: true
    //     },
    //     children: [
    //       {
    //         path: 'orders/:date?',
    //         name: 'reports.orders',
    //         component: OrdersReport
    //       },
    //       {
    //         path: 'customers/:date?',
    //         name: 'reports.customers',
    //         component: CustomersReport
    //       }
    //     ]
    //   },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/request-password',
    name: 'request',
    component: Request,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/reset-password/:token',
    name: 'reset',
    component: Reset,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notfound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

// This is a router guard that runs before each navigation.
router.beforeEach((to, from, next) => {
    // Check if the target route requires authentication and if the user has a token
    if (to.meta.requiresAuth && !store.state.user.token) {
      // If the target route requires authentication and the user does not have a token, redirect to the login page.
      next({name: 'login'})
    } 
    // Check if the target route requires a guest and if the user has a token
    else if (to.meta.requiresGuest && store.state.user.token) {
      // If the target route requires a guest and the user has a token, redirect to the dashboard.
      next({name: 'app.dashboard'})
    } else {
      // If none of the conditions above are met, proceed to the target route.
      next();
    }
  });
  

export default router;
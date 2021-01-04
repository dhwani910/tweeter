import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/Login.vue";
import SignupPage from "../views/Signup.vue";
import FeedPage from "../views/Feed.vue";

Vue.use(VueRouter);

const routes = [
  
  {
   
    path: '/',
    name: 'signup-page',
    component: SignupPage
  },
  {
   
    path: '/login',
    name: 'login-page',
    component: LoginPage
  },
  {
    path: '/feed',
    name: 'feed-page',
    component: FeedPage
    
  },
];

const router = new VueRouter({
  routes
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import HomeComp from "@/components/HomeComp.vue";
import PostComp from "@/components/PostComp.vue";

const routes = [
  {
    path: "/",
    name: "HomeComp",
    component: HomeComp,
  },
  {
    path: "/postComp",
    name: "PostComp",
    component: PostComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
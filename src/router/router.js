import * as VueRouter from 'vue-router'
// import Login from '@pages/Login.vue'

const routes = [
	{ path: "/", component: () => import("@pages/LayOut.vue"), children: [
    { path: "/resume", component: () => import("@pages/person/PersonInfo.vue") },
    { path: "/login", component: () => import("@pages/login/CloudLogin.vue") },
    { path: "/home", component: () => import("@pages/home/HomePage.vue") },
    { path: "/log", component: () => import("@pages/log/ChangeLog.vue") },
  ] },
	{ path: "/register", component: () => import("@pages/login/CloudRegister.vue") },
	{ path: "/jianli", component: () => import("@pages/person/JianLi.vue") },
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

export default router;
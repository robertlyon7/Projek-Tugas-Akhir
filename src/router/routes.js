const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },

  { path: "/ListingPage", component: () => import("pages/ListingPage.vue") },

  { path: "/BAHPage", component: () => import("pages/BAHPage.vue") },
  {
    path: "/HostRegister1",
    component: () => import("pages/HostRegister1.vue"),
  },
  {
    path: "/SignPage",
    component: () => import("pages/SignPage.vue"),
  },
  {
    path: "/LoginPage",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/DataPhoto",
    component: () => import("pages/DataPhoto.vue"),
  },
  {
    path: "/HostRegister2",
    component: () => import("pages/HostRegister2.vue"),
  },
  {
    path: "/DetailPage",
    component: () => import("pages/DetailPage.vue"),
  },
  {
    path: "/PaymentPage",
    component: () => import("pages/PaymentPage.vue"),
  },
  {
    path: "/CompletedPage",
    component: () => import("pages/CompletedPage.vue"),
  },
];

export default routes;

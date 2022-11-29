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
  { path: "/HostRegister1", component: () => import("pages/HostRegister1.vue") },
];

export default routes;

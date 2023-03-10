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

  { path: "/AccountPage", component: () => import("pages/AccountPage.vue") },

  { path: "/HostLanding", component: () => import("pages/HostLanding.vue") },
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
    path: "/DetailPage/:propertyid",
    props: true,
    component: () => import("pages/DetailPage.vue"),
  },

  {
    path: "/HostRegisterSuccess",
    component: () => import("pages/HostRegisterSuccess.vue"),
  },
  {
    path: "/DashboardLayout",
    component: () => import("layouts/DashboardLayout.vue"),
  },
  {
    path: "/PaymentPage",
    component: () => import("pages/PaymentPage.vue"),
  },
  {
    path: "/CompletedPage",
    component: () => import("pages/CompletedPage.vue"),
  },
  {
    path: "/ListingLoggedIn",
    component: () => import("pages/ListingLoggedIn.vue"),
  },
  {
    path: "/FavoritePage",
    component: () => import("pages/FavoritePage.vue"),
  },
  {
    path: "/TripsPage",
    component: () => import("pages/TripsPage.vue"),
  },
  {
    path: "/TripsDetail",
    component: () => import("pages/TripsDetail.vue"),
  },
  {
    path: "/RatingTrips",
    component: () => import("pages/RatingTrips.vue"),
  },
  {
    path: "/ForgotPassword",
    component: () => import("pages/ForgotPassword.vue"),
  },
  {
    path: "/NewPassword",
    component: () => import("pages/NewPassword.vue"),
  },
  {
    path: "/HostRegister",
    component: () => import("pages/HostRegister.vue"),
  },
];

export default routes;

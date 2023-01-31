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

  {path: "/AccountPage", component: () => import("pages/AccountPage.vue")},

  { path: "/HostLanding", component: () => import("pages/HostLanding.vue") },
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
    path: "/HostRegister3",
    component: () => import("pages/HostRegister3.vue"),
  },
  {
    path: "/HostRegister4",
    component: () => import("pages/HostRegister4.vue"),
  },
  {
    path: "/HostRegister5",
    component: () => import("pages/HostRegister5.vue"),
  },
  {
    path: "/HostRegister6",
    component: () => import("pages/HostRegister6.vue"),
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
];

export default routes;

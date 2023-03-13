<template>
  <q-layout>
    <q-header style="height: 70px">
      <q-toolbar>
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          style="margin-top: 11px"
        />
        <q-avatar class="q-pl-md" style="margin-top: 10px">
          <q-img src="../assets/images/logo.svg" />
        </q-avatar>
        <q-toolbar-title
          class="poppins-semibold q-pl-lg"
          style="margin-top: 13px"
        >
          Nusantara Host
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      style="background-color: #050d21; color: white"
      class="poppins-medium"
    >
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 10 }">
        <q-list padding>
          <q-item clickable v-ripple @click="page = 4">
            <q-item-section avatar>
              <q-avatar round :class="page == 4 ? 'active' : 'inactive'">
                <q-icon name="account_circle" />
              </q-avatar>
            </q-item-section>

            <q-item-section> Account </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple @click="page = 1">
            <q-item-section avatar>
              <q-avatar round :class="page == 1 ? 'active' : 'inactive'">
                <q-icon name="home" />
              </q-avatar>
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="page = 3">
            <q-item-section avatar>
              <q-avatar round :class="page == 3 ? 'active' : 'inactive'">
                <q-icon name="shopping_cart" />
              </q-avatar>
            </q-item-section>

            <q-item-section> Orders </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="$router.push('/ListingPage')"
            style="margin-top: 500px"
          >
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> Log Out </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <component-home v-if="page == 1" />
    <component-chat v-if="page == 2" />
    <component-order v-if="page == 3" />
    <component-account v-if="page == 4" />
  </q-layout>
</template>

<script>
import componentHome from "../pages/DashboardHome.vue";

import componentOrder from "../pages/DashboardOrder.vue";
import componentAccount from "../pages/DashboardAccount.vue";

import { ref } from "vue";

export default {
  data() {
    return {
      page: 1,
      drawer: ref(false),
      miniState: ref(true),
    };
  },
  components: {
    "component-home": componentHome,

    "component-order": componentOrder,
    "component-account": componentAccount,
  },
};
</script>
<style>
.active {
  background-color: #0c8ce9;
}

.inactive {
  background-color: none;
}
</style>

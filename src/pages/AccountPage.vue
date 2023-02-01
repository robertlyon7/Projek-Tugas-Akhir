<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-avatar
          clickable
          v-ripple
          @click="$router.push('/')"
          size="44px"
          style="margin-left: 150px"
        >
          <img src="../assets/images/logo.svg" />
        </q-avatar>

        <q-toolbar-title class="poppins-semibold">Nusantara</q-toolbar-title>

        <div class="q-pa-md">
          <div class="mx-auto" style="height: 60px"></div>
          <div class="absolute-center" style="width: 300px; max-width: 100%">
            <q-toolbar>
              <q-space />
            </q-toolbar>
          </div>
        </div>

        <div class="q-pa-md">
          <q-btn-dropdown
            color=""
            rounded
            dropdown-icon="face"
            style="margin-right: 150px"
          >
            <q-list class="poppins-semibold">
              <q-item clickable v-ripple @click="$router.push('/TripsPage')">
                <q-item-section>
                  <q-item-section>Trips</q-item-section>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple @click="$router.push('/FavoritePage')">
                <q-item-section>
                  <q-item-label>Favorites</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator
                style="margin-left: 10px; margin-right: 10px; color: black"
              />

              <q-item clickable v-ripple @click="$router.push('/AccountPage')">
                <q-item-section>
                  <q-item-label>Account</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator
                style="margin-left: 10px; margin-right: 10px; color: black"
              />

              <q-item clickable v-ripple @click="$router.push('/BAHPage')">
                <q-item-section>
                  <q-item-label>Become A Host</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator
                style="margin-left: 10px; margin-right: 10px; color: black"
              />

              <q-item clickable v-ripple @click="$router.push('/ListingPage')">
                <q-item-section>
                  <q-item-label>Log Out</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-banner>
          <h6 class="poppins-semibold" style="margin-left: 140px">
            <q-btn
              clickable
              v-ripple
              @click="$router.push('/ListingLoggedIn')"
              icon="chevron_left"
              style="color: black"
              v-close-popup
              flat
            />
            Account
          </h6>
        </q-banner>
        <div class="text-center">
          <div class="q-pa-md">
            <q-avatar style="margin-top: 10px">
              <img src="../assets/images/person.svg" />
            </q-avatar>
          </div>
          <div
            v-if="this.user != null"
            class="poppins-semibold text-center"
            style="font-size: 20px"
          >
            {{ user.user.name }}
          </div>
          <div
            v-if="this.user != null"
            class="poppins-semibold text-center q-mt-md"
            style="font-size: 20px"
          >
            {{ user.user.email }}
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      console.log("Checking", this.$store.getters["User/auth"]);
      this.user = this.$store.getters["User/auth"];
    },
  },
};
</script>

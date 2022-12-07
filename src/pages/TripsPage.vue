<template>
  <q-layout view="lHh lpr lFfd" container style="height: 900px">
    <q-page-container>
      <q-page>
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

            <q-toolbar-title class="poppins-semibold"
              >Nusantara</q-toolbar-title
            >

            <div class="q-pa-md">
              <div class="mx-auto" style="height: 60px"></div>
              <div
                class="absolute-center"
                style="width: 300px; max-width: 100%"
              >
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
                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/TripsPage')"
                  >
                    <q-item-section>
                      <q-item-section>Trips</q-item-section>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/FavoritePage')"
                  >
                    <q-item-section>
                      <q-item-label>Favorites</q-item-label>
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

                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/LoginPage')"
                  >
                    <q-item-section>
                      <q-item-label>Log Out</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </q-toolbar>
        </q-header>
        <q-page-container style="padding-bottom: 1px">
          <div class="navbar navbar_open">
            <q-banner inline-actions class="bg-white text-black">
              <h6
                class="poppins-semibold"
                style="margin-left: 150px; margin-top: -50px; font-size: 28px"
              >
                Your Trips
              </h6>
            </q-banner>
          </div>
        </q-page-container>
        <q-page-container>
          <h6
            class="poppins-semibold"
            style="margin-left: 190px; margin-top: -110px; font-size: 20px"
          >
            Completed
          </h6>
          <q-card
            clickable
            v-ripple
            @click="$router.push('/TripsDetail')"
            class="q-ml-xl q-mt-md"
            style="
              height: 270px;
              width: 900px;
              border-radius: 15px;
              margin-left: 150px;
            "
          >
            <div class="row">
              <div class="col-4">
                <q-img
                  class="q-ml-xl"
                  style="
                    height: 200px;
                    width: 200px;
                    border-radius: 10px;
                    margin-top: 35px;
                  "
                  src="../assets/images/detailimage.png"
                />
              </div>
              <div class="col-8">
                <div class="q-pl-md" style="padding-top: 70px">
                  <div class="poppins-semibold" style="font-size: 20px">
                    House in Lombok
                  </div>
                  <div class="poppins-medium" style="font-size: 16px">
                    Mayor Street 15
                  </div>
                  <div class="poppins-medium" style="font-size: 16px">
                    2 king bed, 3 queen bed
                  </div>
                  <div class="poppins-semibold" style="font-size: 16px">
                    Rp 2.000.000,00 / night
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </q-page-container>
        <q-page-container>
          <h6
            class="poppins-semibold"
            style="margin-left: 190px; margin-top: -20px; font-size: 20px"
          >
            Ongoing
          </h6>
          <q-card
            class="q-ml-xl q-mt-md"
            style="
              height: 270px;
              width: 900px;
              border-radius: 15px;
              margin-left: 150px;
              margin-bottom: 55px;
            "
          >
            <div class="row">
              <div class="col-4">
                <q-img
                  class="q-ml-xl"
                  style="
                    height: 200px;
                    width: 200px;
                    border-radius: 10px;
                    margin-top: 35px;
                  "
                  src="../assets/images/detailimage.png"
                />
              </div>
              <div class="col-8">
                <div class="q-pl-md" style="padding-top: 70px">
                  <div class="poppins-semibold" style="font-size: 20px">
                    House in Lombok
                  </div>
                  <div class="poppins-medium" style="font-size: 16px">
                    Mayor Street 15
                  </div>
                  <div class="poppins-medium" style="font-size: 16px">
                    2 king bed, 3 queen bed
                  </div>
                  <div class="poppins-semibold" style="font-size: 16px">
                    Rp 2.000.000,00 / night
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </q-page-container>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import LoginPage from "src/pages/LoginPage.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      current: ref(3),
      val: ref(true),
      basic: ref(false),
      fixed: ref(false),
      dialog: ref(false),
      cancelEnabled: ref(false),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

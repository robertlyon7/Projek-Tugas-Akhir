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
                style="margin-left: 150px; margin-top: -50px; font-size: 18px"
              >
                Your Favorites
              </h6>
            </q-banner>
            <div class="row">
              <div class="col">
                <img
                  src="../assets/images/detailimage.png"
                  alt=""
                  style="
                    height: 250px;
                    width: 250px;
                    margin-top: 15px;
                    margin-left: 166px;
                    border-radius: 20px;
                  "
                />
              </div>
              <div class="col">
                <div class="column" style="height: 150px; margin-left: -60px">
                  <div class="col" style="margin-top: -40px">
                    <h6 class="col poppins-semibold" style="font-size: 18px">
                      Resort in Lombok
                    </h6>
                    <h6
                      class="col poppins-regular"
                      style="font-size: 18px; margin-top: -50px"
                    >
                      City Beach
                    </h6>
                    <h6
                      class="col poppins-regular"
                      style="font-size: 18px; margin-top: -50px"
                    >
                      1 king bed
                    </h6>
                    <h6
                      class="col poppins-medium"
                      style="font-size: 18px; margin-top: -50px"
                    >
                      Rp 700.000,00 / night
                    </h6>
                    <div>
                      <q-btn
                        icon="delete_forever"
                        flat
                        size="22px"
                        @click="confirm = true"
                        style="margin-top: -50px; margin-left: -20px"
                      />
                      <q-dialog v-model="confirm" persistent>
                        <q-card
                          style="
                            height: 261px;
                            width: 526px;
                            border-radius: 20px;
                          "
                        >
                          <q-card-section class="row items-center">
                            <h6
                              class="poppins-semibold"
                              style="margin-left: 120px"
                            >
                              Remove this item ?
                            </h6>
                          </q-card-section>

                          <q-card-actions
                            align="center"
                            style="margin-top: -33px"
                          >
                            <q-btn
                              class="poppins-semibold"
                              outline
                              color="blue"
                              label="No"
                              v-close-popup
                              style="
                                background-color: white;
                                height: 20px;
                                width: 100px;
                                border-radius: 10px;
                                font-size: 18px;
                                margin-right: 27px;
                              "
                            />

                            <q-btn
                              class="poppins-semibold"
                              label="Yes"
                              v-close-popup
                              style="
                                font-size: 18px;
                                background-color: #0c8ce9;
                                color: white;
                                border-radius: 10px;
                                height: 20px;
                                width: 100px;
                                margin-left: 27px;
                              "
                            />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="col" style="margin-top: -50px">
                  <div
                    class="col poppins-semibold"
                    style="margin-right: 70px; margin-top: 80px"
                  >
                    <q-icon name="star" size="20px" />
                    4.9
                  </div>
                </div>
              </div>
              <div><q-icon name="delete_forever" size="20px" /></div>
            </div>
          </div>
        </q-page-container>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

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
      confirm: ref(false),
      address: ref(""),
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

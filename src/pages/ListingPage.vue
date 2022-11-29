<template>
  <div class="navbar navbar_open">
    <q-layout view="lHh lpr lFf" container style="height: 999px">
      <!--header-->
      <q-header elevated>
        <q-toolbar>
          <q-avatar size="44px" style="margin-left: 150px">
            <img src="../assets/images/logo.svg" />
          </q-avatar>

          <q-toolbar-title class="poppins-semibold">Nusantara</q-toolbar-title>

          <div class="q-pa-md">
            <div class="mx-auto" style="height: 60px"></div>
            <div class="absolute-center" style="width: 300px; max-width: 100%">
              <q-toolbar>
                <q-space />

                <q-input
                  rounded
                  dark
                  dense
                  standout
                  debounce="500"
                  v-model="search"
                  input-class="text-left"
                  class="q-ml-md"
                  placeholder="Where Are You Going ?"
                >
                  <template v-slot:append>
                    <q-icon v-if="text === ''" name="search" />
                    <q-icon
                      v-else
                      name="clear"
                      class="cursor-pointer"
                      @click="text = ''"
                    />
                  </template>
                </q-input>
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
                <q-item clickable v-ripple @click="$router.push('/SignPage')">
                  <q-item-section>
                    <q-item-section>Sign Up</q-item-section>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple @click="$router.push('/LoginPage')">
                  <q-item-section>
                    <q-item-label>Login</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple @click="$router.push('/BAHPage')">
                  <q-item-section>
                    <q-item-label>Become A Host</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </q-toolbar>
      </q-header>
      <!--header-->

      <!--footer-->
      <q-footer reveal style="height: 100px">
        <q-toolbar style="padding-top: 40px; padding-left: 40px">
          <q-avatar size="25px">
            <img src="../assets/images/copyright.png" />
          </q-avatar>
          <q-toolbar-title class="poppins-semibold" style="font-size: 17px"
            >Nusantara Inc.</q-toolbar-title
          >
          <q-avatar size="20px" class="q-mr-sm"
            ><q-img
              src="../assets/images/facebook.svg
              "
          /></q-avatar>
          <q-avatar size="20px" class="q-mr-sm q-ml-sm"
            ><img
              src="../assets/images/twitter.svg
            "
          /></q-avatar>
          <q-avatar size="20px" class="q-ml-sm" style="padding-right: 40px"
            ><img
              src="../assets/images/instagram.svg
            "
          /></q-avatar>
        </q-toolbar>
      </q-footer>
      <!--footer-->

      <!--page c-->
      <q-page-container style="padding-bottom: 1px">
        <div class="navbar navbar_open">
          <q-banner inline-actions class="bg-white text-black">
            <h6 class="poppins-semibold" style="margin-left: 150px">
              Places that you may like
            </h6>

            <template v-slot:action>
              <q-btn
                class="poppins-semibold"
                style="margin-right: 150px; border-radius: 7px"
                color="blue"
                icon="sort"
                label="Filter"
                no-caps
                @click="dialog = true"
              />
              <q-dialog v-model="dialog" persistent>
                <q-card>
                  <q-card-section class="row items-center">
                    <q-btn icon="close" color="primary" v-close-popup />
                    <q-card-section>
                      <div class="text-h6 poppins-semibold">Filters</div>
                    </q-card-section>
                  </q-card-section>

                  <q-separator />

                  <q-card-section
                    style="max-height: 60vh"
                    class="row items-center poppins-semibold"
                  >
                    <p v-for="n in 1" :key="n">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum repellendus sit voluptate voluptas eveniet porro.
                      Rerum blanditiis perferendis totam, ea at omnis vel
                      numquam exercitationem aut, natus minima, porro labore.
                    </p>

                    <p>Where Are You Going ?</p>

                    <q-input
                      rounded
                      outlined
                      bottom-slots
                      v-model="text"
                      label="Search for a location"
                    >
                      <template v-slot:prepend>
                        <q-icon name="search" />
                      </template>
                    </q-input>

                    <p>Type Of Place</p>

                    <!-- button place -->

                    <p>Price Range</p>

                    <!-- range harga search -->
                  </q-card-section>

                  <!-- Notice v-close-popup -->
                  <q-card-actions>
                    <q-btn flat label="Search" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </template>
          </q-banner>
        </div>
      </q-page-container>

      <!--page list-->
      <q-page-container style="padding-top: 1px; padding-bottom: 100px">
        <div class="q-pa-md">
          <div class="row justify-center q-gutter-sm">
            <q-intersection
              v-for="index in 20"
              :key="index"
              transition="scale"
              class="example-item"
            >
              <q-card class="q-ma-sm" style="border-radius: 25px">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />

                <div id="q-app" style="height: 1vh; margin-left: 290px">
                  <div class="q-pa-md">
                    <q-checkbox
                      size="50px"
                      style="margin-top: -490px"
                      v-model="val"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                    ></q-checkbox>
                  </div>
                </div>

                <q-card-section>
                  <div class="row">
                    <div
                      class="col-6 text-h6 poppins-semibold"
                      style="margin-bottom: 5px"
                    >
                      Bali, Indonesia
                    </div>
                    <div class="col-6 poppins-semibold">
                      <q-icon
                        name="star"
                        size="20px"
                        style="
                          padding-left: 110px;
                          padding-bottom: 3px;
                          padding-right: 4px;
                        "
                      />
                      4.9
                    </div>
                  </div>
                  <div
                    class="text-h9 poppins-semibold"
                    style="margin-bottom: 5px"
                  >
                    530 km away
                  </div>
                  <div class="text-h8 poppins-semibold">
                    Rp 1.500.000,00 / night
                  </div>
                </q-card-section>
              </q-card>
            </q-intersection>
          </div>
        </div>
      </q-page-container>
      <!--page list-->
    </q-layout>
  </div>
</template>

<style lang="sass" scoped>
.example-item
  height: 450px
  width: 390px
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

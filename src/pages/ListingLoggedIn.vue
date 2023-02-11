<template>
  <div class="navbar navbar_open">
    <q-layout container style="height: 999px">
      <!--header-->
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
            <div class="absolute-center" style="width: 550px; max-width: 100%">
              <q-toolbar>
                <q-space />

                <q-card
                  class="row"
                  style="
                    background: #151c2c;
                    height: 55px;
                    width: 700px;
                    border-radius: 40px;
                  "
                >
                  <q-card-section class="q-ml-md"
                    ><label class="poppins-medium">Where are you going?</label>
                  </q-card-section>

                  <q-card-section class="q-mb-sm q-ml-md q-pt-sm">
                    <q-btn-dropdown
                      no-caps
                      flat
                      style="font-size: 15px; margin-left: -20px"
                      dropdown-icon="expand_more"
                      class="poppins-medium text-white"
                      label="Province"
                    >
                      <q-list>
                        <q-item clickable v-close-popup>
                          <q-item-section class="poppins-medium">
                            <q-item-label>Jawa Tengah</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup>
                          <q-item-section class="poppins-medium">
                            <q-item-label>Jawa Timur</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                  </q-card-section>

                  <q-card-section class="q-pt-sm">
                    <q-btn-dropdown
                      no-caps
                      flat
                      style="font-size: 15px; margin-left: -30px"
                      class="poppins-medium text-white"
                      label="City"
                    >
                      <q-list>
                        <q-item clickable v-close-popup>
                          <q-item-section class="poppins-medium">
                            <q-item-label>Semarang</q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup>
                          <q-item-section class="poppins-medium">
                            <q-item-label>Surabaya</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                  </q-card-section>

                  <q-card-section>
                    <q-btn
                      clickable
                      v-ripple
                      @click="$router.push('/ListingLoggedIn')"
                      icon="search"
                      :ripple="{ center: true }"
                      style="
                        color: white;
                        margin-left: -30px;
                        font-size: 15px;
                        margin-top: -8px;
                      "
                    />
                  </q-card-section>
                </q-card>
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

                <q-item
                  clickable
                  v-ripple
                  @click="$router.push('/AccountPage')"
                >
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

                <q-item
                  clickable
                  v-ripple
                  @click="this.$router.push(`DetailPage/${place.id}`)"
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
      <!--header-->

      <!--page c-->
      <q-page-container style="padding-bottom: 1px">
        <div class="navbar navbar_open">
          <q-banner inline-actions class="bg-white text-black">
            <h6
              @click="check()"
              class="poppins-semibold"
              style="margin-left: 150px"
            >
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
                <q-card
                  class="my-card hide-scrollbar"
                  style="border-radius: 50px; height: 780px"
                >
                  <q-card-section
                    class="row items-center"
                    style="background-color: #050d21"
                  >
                    <q-btn icon="close" style="color: white" v-close-popup />
                    <q-card-section>
                      <div
                        class="text-h6 poppins-semibold"
                        style="color: white"
                      >
                        Filters
                      </div>
                    </q-card-section>
                  </q-card-section>

                  <q-card-section
                    style="max-height: 50vh; margin-top: 44px"
                    class="row items-center poppins-semibold"
                  >
                    <div style="margin-left: 44px; margin-bottom: 20px">
                      <p
                        class="poppins-semiblod"
                        style="margin-bottom: 20px; font-size: 24px"
                      >
                        Where Are You Going ?
                      </p>

                      <q-input
                        rounded
                        outlined
                        bottom-slots
                        v-model="text"
                        placeholder="Search for a location"
                        style="margin-bottom: 25px; margin-right: 400px"
                      >
                        <template v-slot:prepend>
                          <q-icon name="search" />
                        </template>
                      </q-input>

                      <div>
                        <p
                          class="poppins-semiblod"
                          style="margin-bottom: 20px; font-size: 24px"
                        >
                          Type Of Place
                        </p>
                        <q-btn
                          style="
                            height: 130px;
                            width: 163px;
                            margin-right: 15px;
                            margin-bottom: 25px;
                            border-radius: 15px;
                            font-size: 14px;
                            padding-left: 10px;
                            padding-right: 10px;
                          "
                          class="q-px-xl q-py-xs"
                          outline
                          color="#000000"
                          label="House, Villas, Apatment, etc"
                          icon="apartment"
                        />
                        <q-btn
                          style="
                            height: 130px;
                            width: 163px;
                            margin-right: 15px;
                            margin-bottom: 25px;
                            border-radius: 15px;
                            font-size: 14px;
                            padding-left: 10px;
                            padding-right: 10px;
                          "
                          class="q-px-xl q-py-xs"
                          outline
                          color="#000000"
                          label="Meeting Rooms"
                          icon="meeting_room"
                        >
                        </q-btn>
                        <q-btn
                          style="
                            height: 130px;
                            width: 163px;
                            margin-bottom: 25px;
                            border-radius: 15px;
                            font-size: 14px;
                            padding-left: 20px;
                            padding-right: 20px;
                          "
                          class="q-px-xl q-py-xs"
                          outline
                          color="#000000"
                          label="Experiences"
                          icon="language"
                        />
                      </div>

                      <!-- button place -->

                      <p
                        class="poppins-semiblod"
                        style="margin-bottom: 20px; font-size: 24px"
                      >
                        Price Range
                      </p>

                      <div class="column" style="height: 150px">
                        <div class="row">
                          <q-input
                            style="
                              height: 80px;
                              width: 300px;
                              border-radius: 10px;
                            "
                            color="black"
                            outlined
                            v-model="text"
                            label="min. price"
                            stack-label
                            :dense="dense"
                          />
                          <q-icon
                            name="remove"
                            style="
                              margin-left: 10px;
                              margin-right: 10px;
                              margin-top: 23px;
                            "
                          />
                          <q-input
                            style="
                              height: 80px;
                              width: 300px;
                              border-radius: 10px;
                            "
                            color="black"
                            outlined
                            v-model="text"
                            label="max. price"
                            stack-label
                            :dense="dense"
                          />
                        </div>
                      </div>

                      <div>
                        <!-- Notice v-close-popup -->
                        <q-btn
                          flat
                          no-caps
                          label="Search"
                          color="white"
                          v-close-popup
                          style="
                            font-size: 24px;
                            background-color: #0c8ce9;
                            border-radius: 20px;
                            height: 40px;
                            width: 220px;
                            margin-left: 525px;
                            margin-bottom: 30px;
                            margin-top: -50px;
                          "
                        />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </template>
          </q-banner>
        </div>
      </q-page-container>

      <!--page list-->
      <q-page-container style="padding-top: 1px; padding-bottom: 100px">
        <div class="q-pa-md" v-if="listState != null">
          <q-infinite-scroll @load="ketikaOnLoad" :offset="250">
            <div class="row" ref="scrollTargetketikaonloadRef">
              <div
                class="col-3 q-pa-md"
                v-for="place in listState.data.data"
                :key="place.id"
              >
                <q-card
                  class="q-ma-sm"
                  style="border-radius: 25px"
                  clickable
                  v-ripple
                  @click="this.$router.push(`DetailPage/${place.id}`)"
                >
                  <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />

                  <div id="q-app" style="height: 1vh; margin-left: 290px">
                    <div class="q-pa-md">
                      <q-checkbox
                        color="red"
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
                        {{ place.name_property }}
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
                      {{ place.location }}
                    </div>
                    <div class="text-h8 poppins-semibold">
                      Rp {{ place.price }} / night
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <template v-slot:loading>
              <div class="row justify-center q-my-md">
                <q-spinner-dots color="primary" size="40px" />
              </div>
            </template>
          </q-infinite-scroll>
        </div>
      </q-page-container>
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
    </q-layout>
  </div>
</template>

<style lang="sass" scoped>
.example-item
  height: 450px
  width: 390px
</style>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 850px
</style>

<script>
import { defineComponent, ref } from "vue";
import { mapState } from "vuex";
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

  mounted() {
    this.get_list_property();
  },

  computed: {
    // ...mapState(["User"]),
  },

  data() {
    return {
      listState: null,
      orang: null,
    };
  },

  methods: {
    check() {
      console.log("Checking", this.$store.getters["User/auth"]);
    },
    // Log out with Userfront.logout()
    handleLogout() {
      Userfront.logout();
    },

    get_list_property() {
      this.$store
        .dispatch("Property/getList")
        .then((res) => {
          this.listState = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    ketikaOnLoad(index, done) {
      if (this.listState.data.next_page_url) {
        this.$store.dispatch("Property/next").then((res) => {
          this.listState = {
            ...res.data,
            data: [...this.listState.data, ...res.data.data],
          };

          done();
        });
      } else {
        done();
      }
    },
  },
  computed: {
    // User is logged out if they don't have an access token
    isLoggedOut() {
      return !Userfront.tokens.accessToken;
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      text: ref(""),
      current: ref(3),
      wifi: ref(true),
      kitchen: ref(false),
      washer: ref(false),
      dryer: ref(true),
      Air_Conditioning: ref(true),
      heating: ref(false),
      val: ref(false),
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

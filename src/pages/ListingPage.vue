<template>
  <div class="navbar navbar_open">
    <q-layout container style="height: 999px">
      <!--header-->
      <q-header elevated style="display: flex">
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
                      @click="$router.push('/ListingPage')"
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
              dropdown-icon="account_circle"
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

                <q-separator
                  style="margin-left: 10px; margin-right: 10px; color: black"
                />

                <q-item
                  clickable
                  v-ripple
                  @click="$router.push('/DashboardLayout')"
                >
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

      <!--page c-->
      <q-page-container style="padding-bottom: 1px; display: flex">
        <div class="navbar navbar_open">
          <q-banner inline-actions class="bg-white text-black">
            <h6 class="poppins-semibold" style="margin-left: 150px">
              Places that you may like
            </h6>
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
                  <q-img
                    style="width: 365px; height: 250px"
                    :src="`http://api.seele.my.id/images/${place.images[0].image}`"
                  />

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

                  <q-card-section style="height: 150px">
                    <div class="row">
                      <div
                        class="col-6 poppins-semibold"
                        style="margin-bottom: 5px; font-size: 18px"
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
                      {{ place.id_kota }}
                    </div>
                    <div class="text-h8 poppins-semibold">
                      {{ `${intl.format(place.price)} / night` }}
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

const linksList = [];

export default defineComponent({
  name: "MainLayout",

  data() {
    return {
      intl: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }),
      data: [],
    };
  },

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
      // imageLink: "http://api.seele.my.id//public/images/",
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
          const val = res.data.data.data;
          console.log(val);
          var valueData = {
            name: "isTrue",
          };
          val.forEach((e) => {
            console.log(e.id);
            valueData[e.id] = false;
          });
          this.val.push(valueData);
          console.log(this.val);
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

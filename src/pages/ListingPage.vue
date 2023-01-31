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
                    style="max-height: 60vh; margin-top: 44px"
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

                      <p
                        class="poppins-semiblod"
                        style="margin-bottom: 20px; font-size: 24px"
                      >
                        Rooms and beds
                      </p>
                      <p
                        class="poppins-medium"
                        style="margin-bottom: 20px; font-size: 20px"
                      >
                        Bedrooms
                      </p>
                      <div
                        class="q-pa-lg flex-center"
                        style="margin-top: -22px; margin-left: -22px"
                      >
                        <q-btn
                          label="Any"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="1"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="2"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="3"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="4"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="5+"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                      </div>
                      <p
                        class="poppins-medium"
                        style="margin-bottom: 20px; font-size: 20px"
                      >
                        Beds
                      </p>
                      <div
                        class="q-pa-lg flex-center"
                        style="margin-top: -22px; margin-left: -22px"
                      >
                        <q-btn
                          label="Any"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="1"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="2"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="3"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="4"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="5+"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                      </div>
                      <p
                        class="poppins-medium"
                        style="margin-bottom: 20px; font-size: 20px"
                      >
                        Bathrooms
                      </p>
                      <div
                        class="q-pa-lg flex-center"
                        style="margin-top: -22px; margin-left: -22px"
                      >
                        <q-btn
                          label="Any"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="1"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="2"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="3"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="4"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="5+"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                      </div>
                      <p
                        class="poppins-semiblod"
                        style="
                          margin-bottom: 20px;
                          font-size: 24px;
                          margin-top: 22px;
                        "
                      >
                        Guests
                      </p>
                      <p
                        class="poppins-medium"
                        style="margin-bottom: 20px; font-size: 20px"
                      >
                        Adults
                      </p>
                      <div
                        class="q-pa-lg flex-center"
                        style="margin-top: -22px; margin-left: -22px"
                      >
                        <q-btn
                          label="Any"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="1"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="2"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="3"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="4"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="5+"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                      </div>
                      <p
                        class="poppins-medium"
                        style="margin-bottom: 20px; font-size: 20px"
                      >
                        Children
                      </p>
                      <div
                        class="q-pa-lg flex-center"
                        style="margin-top: -22px; margin-left: -22px"
                      >
                        <q-btn
                          label="Any"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="1"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="2"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="3"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="4"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                        <q-btn
                          label="5+"
                          outline
                          no-caps
                          style="
                            border-radius: 50px;
                            background-color: white;
                            width: 70px;
                            height: 50px;
                            margin-right: 22px;
                          "
                        />
                      </div>

                      <p
                        class="poppins-semiblod"
                        style="margin-bottom: 20px; font-size: 24px"
                      >
                        Amenities
                      </p>
                      <div>
                        <div class="q-gutter-sm" style="margin-bottom: 20px">
                          <q-checkbox
                            v-model="wifi"
                            label="Wifi"
                            color="blue"
                            style="margin-right: 120px"
                          />
                          <q-checkbox
                            v-model="kitchen"
                            label="Kitchen"
                            color="blue"
                          />
                          <br />
                          <q-checkbox
                            v-model="washer"
                            label="Washer"
                            color="blue"
                            style="margin-right: 92px"
                          />

                          <q-checkbox
                            v-model="dryer"
                            label="Dryer"
                            color="blue"
                          />
                          <br />
                          <q-checkbox
                            v-model="Air_Conditioning"
                            label="Air Conditioning"
                            color="blue"
                            style="margin-right: 33px"
                          />
                          <q-checkbox
                            v-model="heating"
                            label="Heating"
                            color="blue"
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
        <div class="q-pa-md">
          <div class="row justify-center q-gutter-sm">
            <q-intersection
              v-for="index in 20"
              :key="index"
              transition="scale"
              class="example-item"
            >
              <q-card
                class="q-ma-sm"
                style="border-radius: 25px"
                clickable
                v-ripple
                @click="$router.push('/DetailPage')"
              >
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />

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
                      Villa Tabanan
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
                    Bali, Indonesia
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

const linksList = [];

export default defineComponent({
  name: "MainLayout",

  mounted() {
    this.get_list_property();
  },

  methods: {
    get_list_property() {
      // console.log("credential", this.credential);
      this.$store
        .dispatch("Property/getList")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
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

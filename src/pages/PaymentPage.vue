<template>
  <q-layout container style="height: 915px">
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

              <q-item
                clickable
                v-ripple
                @click="$router.push('/DashboardLayout')"
              >
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
                  <q-item-label @click="logout">Log Out</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-page-container>
          <div>
            <q-banner>
              <div class="column" style="height: 55px; margin-top: -125px">
                <div class="col-4 col-md-6">
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

                    Payment
                  </h6>
                </div>
              </div>
            </q-banner>
            <div class="row">
              <!--kiri-->
              <div class="col" style="margin-left: 220px; margin-top: -50px">
                <h6 class="poppins-medium" size="30px">Your Booking</h6>
                <h6
                  class="poppins-medium"
                  size="28px"
                  style="margin-top: -20px"
                >
                  Dates
                </h6>
                <q-input
                  borderless
                  class="poppins-medium"
                  label="Check in date"
                  v-model="date"
                  mask="date"
                  :rules="['date']"
                  style="margin-right: 50px"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <q-input
                  borderless
                  class="poppins-medium"
                  label="Check Out date"
                  v-model="date2"
                  mask="date"
                  :rules="['date']"
                  style="margin-right: 50px"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        cover
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="date2">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <h6 class="poppins-medium" size="28px" style="margin-top: 20px">
                  Guest
                </h6>
                <q-input
                  borderless
                  label="Guest"
                  class="row poppins-regular"
                  v-model.number="modelAdult"
                  type="number"
                  style="font-size: 22px; width: 367px; height: 78px"
                />

                <q-btn
                  id="pay-button"
                  clickable
                  v-ripple
                  @click="pay"
                  class="poppins-semibold"
                  no-caps
                  label="Confirm and pay"
                  style="
                    background-color: #0a97fe;
                    color: white;
                    border-radius: 20px;
                    width: 370px;
                    height: 30px;
                    font-size: 20px;
                    margin-top: 66px;
                  "
                />
              </div>
              <!--kanan-->
              <div class="col" style="margin-left: 50px">
                <q-card
                  class="my-card"
                  style="
                    height: 460px;
                    width: 500px;
                    margin-left: 30px;
                    border-radius: 30px;
                    margin-top: -90px;
                  "
                >
                  <q-card-section class="row">
                    <img
                      src="../assets/images/detailimage.png"
                      alt=""
                      style="
                        height: 110px;
                        width: 120px;
                        margin-top: 20px;
                        margin-left: 20px;
                        border-radius: 20px;
                      "
                    />

                    <div
                      class="column"
                      style="height: 150px; margin-left: 30px"
                    >
                      <div class="col">
                        <h6 class="col poppins-medium">Villa in Bali</h6>
                      </div>
                      <div class="col" style="margin-top: -145px">
                        <div
                          class="col poppins-semibold"
                          style="margin-right: 70px; margin-top: 80px"
                        >
                          <q-icon name="star" size="20px" />
                          4.9
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                  <div class="row">
                    <div class="col">
                      <div
                        class="column"
                        style="height: 150px; margin-left: 40px"
                      >
                        <div class="col" style="margin-top: -18px">
                          <h6 class="poppins-medium" style="font-size: 18px">
                            Price details
                          </h6>
                        </div>
                        <div
                          class="col"
                          style="margin-top: 20px; margin-bottom: 18px"
                        >
                          <h6 class="poppins-regular" style="font-size: 18px">
                            1.300.000 x 2 nights
                          </h6>
                        </div>
                        <div
                          class="col"
                          style="margin-top: 20px; margin-bottom: 20px"
                        >
                          <h6
                            class="poppins-regular"
                            style="font-size: 18px; margin-top: 30px"
                          >
                            Service fee
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col" style="margin-top: 30px">
                      <div
                        class="column"
                        style="
                          height: 150px;
                          margin-left: 40px;
                          margin-right: 40px;
                        "
                      >
                        <div class="col">
                          <h6
                            class="poppins-regular"
                            style="font-size: 18px; text-align: right"
                          >
                            2.600.000
                          </h6>
                        </div>
                        <div class="col">
                          <h6
                            class="poppins-regular"
                            style="
                              font-size: 18px;
                              text-align: right;
                              margin-top: 25px;
                            "
                          >
                            400.000
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <q-separator color="black" inset style="margin-top: 10px" />
                  <div class="row" style="margin-top: -10px">
                    <div
                      class="col poppins-medium"
                      style="
                        margin-left: 40px;
                        margin-top: 40px;
                        font-size: 18px;
                      "
                    >
                      Total
                    </div>
                    <div
                      class="col poppins-regular"
                      style="
                        font-size: 18px;
                        margin-right: 40px;
                        text-align: right;
                        margin-top: 40px;
                      "
                    >
                      3.000.000
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </q-page-container>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      chef: ref(true),
      maid: ref(true),
      beds: ref(false),
      text: ref(""),
      card_number: ref(""),
      exp: ref(""),
      cvv: ref(""),
      sa: ref(""),
      apt: ref(""),
      city: ref(""),
      state: ref(""),
      zip: ref(""),
      xxxx: ref(""),
      dense: ref(false),
      val: ref(true),
      date: ref("2023/03/01"),
      date2: ref("2023/03/01"),
      model: ref(null),
      options: ["Credit or debit card", "OVO", "Gopay"],
    };
  },
  created() {},
  methods: {
    pay() {
      console.log("payment");
      window.snap.pay("67fda727-fddc-440f-b761-1ab0de01e6fe");
    },
  },
};
</script>

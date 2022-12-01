<template>
  <q-layout view="lHh lpr lFf" container style="height: 3200px">
    <q-page-container>
      <q-page>
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

                  <q-input
                    rounded
                    dark
                    dense
                    standout
                    debounce="500"
                    v-model="Search"
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

                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/LoginPage')"
                  >
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

        <!--page-1-->
        <q-page-container>
          <div>
            <q-banner>
              <div class="column" style="height: 55px; margin-top: -125px">
                <div class="col-4 col-md-6">
                  <h6 class="poppins-semibold" style="margin-left: 140px">
                    <q-btn
                      clickable
                      v-ripple
                      @click="$router.push('/ListingPage')"
                      icon="chevron_left"
                      style="color: black"
                      v-close-popup
                      flat
                    />

                    Villa in Bali
                  </h6>
                </div>

                <div class="col-4 col-md-6 column items-end" id="q-app">
                  <div class="q-pa-md">
                    <q-checkbox
                      size="50px"
                      v-model="val"
                      color="red"
                      checked-icon="favorite"
                      unchecked-icon="favorite_border"
                      indeterminate-icon="help"
                      style="margin-right: 150px; margin-top: 15px"
                    ></q-checkbox>
                  </div>
                </div>
              </div>
            </q-banner>

            <q-card-section>
              <div
                class="column"
                style="height: 150px; margin-left: 50px; margin-top: -78px"
              >
                <div class="col poppins-semibold">
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
                  <p
                    class="poppins-medium"
                    style="margin-left: 170px; margin-top: -23px"
                  >
                    Seririt Bali, indonesia
                  </p>
                </div>
              </div>
            </q-card-section>
          </div>
        </q-page-container>

        <q-card-section>
          <div
            class="row"
            style="margin-top: -230px; margin-left: 150px; margin-right: 300px"
          >
            <div class="col" style="padding-right: 300px">
              <q-img
                src="../assets/images/detailimage.png"
                style="
                  height: 570px;
                  width: 550px;
                  border-top-left-radius: 20px;
                  border-bottom-left-radius: 20px;
                "
                :ratio="1"
              />
            </div>
            <div class="col" style="padding-right: 100px">
              <q-img
                src="../assets/images/detailimage2.png"
                style="height: 275px; width: 350px; margin-bottom: 20px"
                :ratio="16 / 9"
              /><q-img
                src="../assets/images/detailimage3.png"
                style="height: 275px; width: 350px"
                :ratio="16 / 9"
              />
            </div>
            <div class="col">
              <q-img
                src="../assets/images/detailimage4.png"
                style="
                  height: 275px;
                  width: 400px;
                  margin-bottom: 20px;
                  border-top-right-radius: 20px;
                "
                :ratio="16 / 9"
              /><q-img
                src="../assets/images/detailimage5.png"
                style="
                  height: 275px;
                  width: 400px;
                  border-bottom-right-radius: 20px;
                "
                :ratio="16 / 9"
              />
              <q-btn
                class="poppins-semibold"
                label="Show all photos"
                no-caps
                style="
                  background-color: #0c8ce9;
                  color: white;
                  border-radius: 10px;
                  margin-left: 180px;
                  margin-top: -110px;
                  width: 200px;
                  height: 50px;
                "
              />
            </div>
          </div>

          <div class="column items-end">
            <div class="col poppins-medium" style="margin-right: 170px">
              Rp 1.300.000,00/night
            </div>
          </div>
          <div style="margin-left: 150px">
            <div
              class="column items-start"
              style="height: 150px; margin-right: 400px"
            >
              <div class="col poppins-medium" style="font-size: 25px">
                Entire villa hosted by
                <q-avatar class="items-center" style="margin-left: 600px">
                  <img
                    src="../assets/images/person.svg"
                    style="width: 33px; height: 33px"
                  />
                </q-avatar>
              </div>
              <div
                class="row poppins-regular"
                style="margin-top: -100px; width: 45%"
              >
                <div class="col" style="margin-right: 20px">7 Guests</div>
                <div
                  class="col"
                  style="margin-right: 20px; padding-right: 20px"
                >
                  3 Bedrooms
                </div>
                <div class="col" style="margin-right: 20px">4 Beds</div>
                <div class="col" style="margin-right: 20px">3 Baths</div>
              </div>
            </div>
            <q-separator
              color="black"
              inset
              style="margin-right: 577px; margin-left: -3px; margin-top: -60px"
            />
            <div
              class="column items-start"
              style="height: 150px; margin-right: 400px; height: 999px"
            >
              <div
                class="col poppins-medium"
                style="font-size: 25px; margin-top: 30px"
              >
                Entire villa hosted by
                <div class="poppins-regular" style="font-size: 22px">
                  Villa L'espoir II - Open on 20th Feb. 2020, our 2nd villa
                  which is just about 40m away from Villa L'espoir I. Again
                  luxury PANORAMIC view villa in tranquil northern Bali. It is
                  at where the green vineyards and rice fields meet the ocean.
                  You will have a dream vacation at Villa L’espoir II can meet
                  all your expectation and beyond… There is quite much useful
                  information list below and they shall answer most of the
                  questions about transportation, meals, entertainment, etc.
                  Enjoy your stay...
                </div>
              </div>
              <div
                class="col poppins-medium"
                style="font-size: 25px; margin-top: 30px"
              >
                What this place offers
                <div style="margin-top: 30px">
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar text-color="black" icon="wifi" />
                    </q-item-section>
                    <q-item-section
                      class="poppins-regular"
                      style="font-size: 22px"
                      >WiFi</q-item-section
                    >
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar text-color="black" icon="restaurant" />
                    </q-item-section>
                    <q-item-section
                      class="poppins-regular"
                      style="font-size: 22px"
                      >Kitchen</q-item-section
                    >
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar text-color="black" icon="pool" />
                    </q-item-section>
                    <q-item-section
                      class="poppins-regular"
                      style="font-size: 22px"
                      >Swimming pool</q-item-section
                    >
                  </q-item>
                  <q-item style="margin-left: 300px; margin-top: -175px">
                    <q-item-section avatar>
                      <q-avatar
                        text-color="black"
                        icon="local_laundry_service"
                      />
                    </q-item-section>
                    <q-item-section
                      class="poppins-regular"
                      style="font-size: 22px"
                      >Laundry</q-item-section
                    >
                  </q-item>
                  <q-item style="margin-left: 300px">
                    <q-item-section avatar>
                      <q-avatar text-color="black" icon="directions_car" />
                    </q-item-section>
                    <q-item-section
                      class="poppins-regular"
                      style="font-size: 22px"
                      >Free car parking</q-item-section
                    >
                  </q-item>
                </div>
              </div>
              <div class="col poppins-medium" style="font-size: 30px">
                Book Now
                <div>
                  <q-card
                    class="my-card row"
                    style="
                      height: 500px;
                      width: 800px;
                      border-radius: 30px;
                      margin-top: 30px;
                    "
                  >
                    <q-card-section>
                      <div
                        class="col poppins-medium"
                        style="
                          font-size: 28px;
                          margin-left: 15px;
                          margin-bottom: 15px;
                        "
                      >
                        Dates
                      </div>
                      <div class="row">
                        <div class="col">
                          <div
                            class="q-pa-md col"
                            no-border-radius
                            style="width: 400px"
                          >
                            <q-input
                              class="poppins-medium"
                              label="Check in date"
                              outlined
                              v-model="date"
                              mask="date"
                              :rules="['date']"
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
                          </div>
                        </div>
                        <div class="col">
                          <div
                            class="q-pa-md col"
                            style="width: 400px; margin-left: -16px"
                          >
                            <q-input
                              class="poppins-medium"
                              label="Check out date"
                              outlined
                              v-model="date"
                              mask="date"
                              :rules="['date']"
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
                          </div>
                        </div>
                      </div>

                      <div
                        class="col poppins-medium"
                        style="
                          font-size: 30px;
                          margin-left: 15px;
                          margin-bottom: 15px;
                        "
                      >
                        Guests
                      </div>
                      <div class="row">
                        <div class="col">
                          <q-input
                            label="adult"
                            class="row poppins-regular"
                            v-model.number="modelAdult"
                            type="number"
                            outlined
                            style="
                              font-size: 22px;
                              width: 367px;
                              height: 78px;
                              margin-left: 15px;
                            "
                          />
                        </div>
                        <div class="col">
                          <q-input
                            label="kids"
                            class="row poppins-regular"
                            v-model.number="modelKids"
                            type="number"
                            outlined
                            style="
                              font-size: 22px;
                              width: 367px;
                              height: 78px;
                              margin-left: -3px;
                            "
                          />
                        </div>
                      </div>

                      <q-btn
                        no-caps
                        class="poppins-semibold text-center"
                        label="Book Now"
                        size="30px"
                        style="
                          margin-left: 155px;
                          margin-top: 50px;
                          background-color: #0a97fe;
                          color: white;
                          border-radius: 20px;
                          width: 450px;
                          height: 85px;
                        "
                      />
                    </q-card-section>
                  </q-card>
                </div>
                <div
                  class="col poppins-medium"
                  style="font-size: 30px; margin-top: 120px"
                >
                  Reviews
                  <div class="row" style="margin-top: 40px">
                    <div class="col">
                      <q-card class="my-card" flat>
                        <q-item>
                          <q-item-section avatar>
                            <q-avatar>
                              <img
                                src="../assets/images/testimony1.png"
                                alt=""
                              />
                            </q-avatar>
                          </q-item-section>

                          <q-item-section>
                            <q-item-label
                              class="poppins-medium"
                              style="font-size: 22px"
                              >Bob</q-item-label
                            >
                            <q-item-label
                              class="poppins-regular"
                              style="font-size: 22px"
                              caption
                            >
                              October 2022
                            </q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-card-section vertical>
                          <q-card-section
                            class="col-4 poppins-regular"
                            style="font-size: 22px"
                          >
                            Loved it! A nice bit of calk after a hectic week in
                            seminyak and canggu. Would recommend
                          </q-card-section>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col">
                      <q-card class="my-card" flat>
                        <q-item>
                          <q-item-section avatar>
                            <q-avatar>
                              <img
                                src="../assets/images/testimony2.png"
                                alt=""
                              />
                            </q-avatar>
                          </q-item-section>

                          <q-item-section>
                            <q-item-label
                              class="poppins-medium"
                              style="font-size: 22px"
                              >Ron</q-item-label
                            >
                            <q-item-label
                              class="poppins-regular"
                              style="font-size: 22px"
                              caption
                            >
                              September 2022
                            </q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-card-section vertical>
                          <q-card-section
                            class="col-4 poppins-regular"
                            style="font-size: 22px"
                          >
                            We enjoyed relaxing and getting away in this
                            beautiful space. Wish we had more time here. Very
                            chill beach vibes nearby with a few restaurants.
                          </q-card-section>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                  <div class="row" style="margin-top: 40px">
                    <div class="col">
                      <q-card class="my-card" flat>
                        <q-item>
                          <q-item-section avatar>
                            <q-avatar>
                              <img
                                src="../assets/images/testimony3.png"
                                alt=""
                              />
                            </q-avatar>
                          </q-item-section>

                          <q-item-section>
                            <q-item-label
                              class="poppins-medium"
                              style="font-size: 22px"
                              >Jess</q-item-label
                            >
                            <q-item-label
                              class="poppins-regular"
                              style="font-size: 22px"
                              caption
                            >
                              September 2022
                            </q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-card-section vertical>
                          <q-card-section
                            class="col-4 poppins-regular"
                            style="font-size: 22px"
                          >
                            We had a great stay in Balian. Made’s flexibility
                            was really appreciated. The two places we stayed at
                            were just the kind of jungle hideaways we were
                            looking for
                          </q-card-section>
                        </q-card-section>
                      </q-card>
                    </div>
                    <div class="col">
                      <q-card class="my-card" flat>
                        <q-item>
                          <q-item-section avatar>
                            <q-avatar>
                              <img
                                src="../assets/images/testimony4.png"
                                alt=""
                              />
                            </q-avatar>
                          </q-item-section>

                          <q-item-section>
                            <q-item-label
                              class="poppins-medium"
                              style="font-size: 22px"
                              >Ron</q-item-label
                            >
                            <q-item-label
                              class="poppins-regular"
                              style="font-size: 22px"
                              caption
                            >
                              August 2022
                            </q-item-label>
                          </q-item-section>
                        </q-item>

                        <q-card-section vertical>
                          <q-card-section
                            class="col-4 poppins-regular"
                            style="font-size: 22px"
                          >
                            The place is gorgeous, in a wonderful location, and
                            the host and Made are amazing! So incredibly kind
                            and helpful, anything we needed they were right
                            there.
                          </q-card-section>
                        </q-card-section>
                      </q-card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-page>
    </q-page-container>
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
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      val: ref(true),
      date: ref("2019/02/01"),
      model: ref(null),
      options: ["q", "w", "e", "r", "t"],
    };
  },
};
</script>

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
                style="margin-left: 150px; margin-top: -50px; font-size: 26px"
              >
                Thanks For Staying With Us
              </h6>
            </q-banner>
          </div>
        </q-page-container>
        <q-page-container style="padding-bottom: 1px">
          <div class="navbar navbar_open">
            <q-banner inline-actions class="bg-white text-black">
              <h6
                class="poppins-semibold"
                style="margin-left: 150px; margin-top: -140px; font-size: 26px"
              >
                How would you rate us ?
              </h6>
              <div
                class="q-gutter-y-md column"
                style="margin-left: 150px; margin-top: -50px"
              >
                <q-rating
                  v-model="ratingModel"
                  size="3.5em"
                  color="#FBBC05"
                  icon="star_border"
                  icon-selected="star"
                />
              </div>
            </q-banner>
          </div>
        </q-page-container>
        <q-page-container style="padding-bottom: 1px">
          <div class="navbar navbar_open">
            <q-banner inline-actions class="bg-white text-black">
              <h6
                class="poppins-semibold"
                style="margin-left: 150px; margin-top: -140px; font-size: 26px"
              >
                How was your stay ?
              </h6>
              <q-input
                flat
                v-model="text"
                outlined
                autogrow
                label="Write a review for us"
                style="width: 700px; margin-left: 150px; margin-top: -30px"
              />
            </q-banner>
          </div>
        </q-page-container>
        <q-page-container style="padding-bottom: 1px">
          <div>
            <q-btn
              @click="alert = true"
              class="poppins-semibold"
              clickable
              v-ripple
              no-caps
              label="Submit"
              style="
                margin-top: 50px;
                margin-left: 150px;
                font-size: 24px;
                background-color: #0c8ce9;
                color: white;
                border-radius: 20px;
                width: 250px;
                height: 80px;
              "
            />

            <q-dialog v-model="alert">
              <q-card
                class="my-card hide-scrollbar"
                style="border-radius: 50px; height: 350px"
              >
                <q-card-section
                  class="row items-center"
                  style="background-color: #050d21"
                >
                  <q-btn icon="close" style="color: white" v-close-popup />
                </q-card-section>

                <q-card-section
                  class="q-pt-none poppins-semibold"
                  style="font-size: 28px; margin-top: 90px; margin-left: 90px"
                >
                  Thank You, your review <br />
                  help us to improve
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </q-page-container>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      ratingModel: ref(3),
      text: ref(""),
      alert: ref(false),
      address: ref(""),
    };
  },
};
</script>

<template>
  <q-layout container style="height: 1000px">
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

        <q-page-container>
          <div>
            <q-banner>
              <div class="column" style="height: 55px; margin-top: -125px">
                <div class="col-4 col-md-6">
                  <h6 class="poppins-semibold" style="margin-left: 140px">
                    <q-btn
                      clickable
                      v-ripple
                      @click="$router.push('/DetailPage')"
                      icon="chevron_left"
                      style="color: black"
                      v-close-popup
                      flat
                    />

                    Villa in Bali
                  </h6>
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

        <q-page>
          <div style="margin-left: 180px">
            <div
              class="col poppins-semibold"
              style="font-size: 32px; margin-top: -170px"
            >
              Overview
              <div class="col">
                <q-img
                  src="../assets/images/detailimage.png"
                  style="
                    height: 550px;
                    width: 550px;
                    margin-top: 30px;
                    margin-bottom: 50px;
                  "
                />
              </div>
            </div>
            <div class="col poppins-semibold" style="font-size: 32px">
              Bathroom
              <div class="col">
                <q-img
                  src="../assets/images/detailimage3.png"
                  style="
                    height: 300px;
                    width: 400px;
                    margin-top: 30px;
                    margin-bottom: 50px;
                  "
                />
              </div>
            </div>
            <div class="col poppins-semibold" style="font-size: 32px">
              Pool
              <div class="col">
                <q-img
                  src="../assets/images/detailimage4.png"
                  style="
                    height: 250px;
                    width: 400px;
                    margin-top: 30px;
                    margin-bottom: 50px;
                  "
                />
              </div>
            </div>
            <div class="col">
              <div class="col">
                <q-img
                  src="../assets/images/detailimage2.png"
                  style="
                    height: 300px;
                    width: 450px;
                    margin-top: 30px;
                    margin-bottom: 50px;
                  "
                />
              </div>
            </div>
            <div class="col poppins-semibold" style="font-size: 32px">
              Dining Room
              <div class="col">
                <q-img
                  src="../assets/images/detailimage5.png"
                  style="
                    height: 450px;
                    width: 650px;
                    margin-top: 30px;
                    margin-bottom: 150px;
                  "
                />
              </div>
            </div>
          </div>
        </q-page>

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
      </q-page>
    </q-page-container>
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

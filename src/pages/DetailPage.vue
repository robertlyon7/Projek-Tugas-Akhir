<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 999px">
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

      <!--page-1-->
      <q-page-container>
        <div>
          <q-banner>
            <div class="column" style="height: 55px">
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
                    style="margin-right: 150px"
                  ></q-checkbox>
                </div>
              </div>
            </div>
          </q-banner>

          <q-card-section>
            <div
              class="column"
              style="height: 150px; margin-left: 50px; margin-top: 7px"
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
      <q-card-section>
        <div
          class="row"
          style="margin-top: -200px; margin-left: 150px; margin-right: 300px"
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
          </div>
        </div>
      </q-card-section>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      val: ref(true),
    };
  },
};
</script>

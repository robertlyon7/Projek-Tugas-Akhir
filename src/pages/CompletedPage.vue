<template>
  <q-layout container style="height: 915px">
    <q-header elevated>
      <q-toolbar>
        <q-avatar
          clickable
          v-ripple
          @click="$router.push('/')"
          size="44px"
          style="margin-left: 70px"
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
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col" style="margin-left: 200px; margin-top: 100px">
            <h3 class="poppins-bold" style="font-size: 50px">
              Yay your order has <br />
              been completed
            </h3>
            <h6 class="poppins-regular" style="font-size: 26px">
              your order invoice has been sent to your <br />
              email address or you can check on your <br />
              accout
            </h6>
            <q-btn
              clickable
              v-ripple
              @click="$router.push('/ListingPage')"
              no-caps
              class="poppins-semibold"
              style="
                font-size: 20px;
                width: 250px;
                height: 60px;
                background-color: #0c8ce9;
                color: white;
                border-radius: 20px;
              "
              >Back to home
            </q-btn>
          </div>
          <div class="col" style="margin-right: 200px; margin-top: 150px">
            <img
              src="../assets/images/completed.png"
              alt=""
              style="height: 411px; width: 574px"
            />
          </div>
        </div>
        <q-footer reveal style="height: 100px">
          <q-toolbar style="padding-top: 40px; padding-left: 40px">
            <q-avatar size="25px" style="margin-left: 50px">
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
            <q-avatar size="20px" class="q-ml-sm" style="padding-right: 70px"
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
      date: ref("2019/02/01"),
      model: ref(null),
      options: ["Credit or debit card", "OVO", "Gopay"],
    };
  },
};
</script>

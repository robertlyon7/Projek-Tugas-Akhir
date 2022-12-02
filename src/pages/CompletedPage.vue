<template>
  <q-layout view="lHh lpr lFf" container style="height: 915px">
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

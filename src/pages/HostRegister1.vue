<template>
  <q-layout container style="height: 915px">
    <q-page-container>
      <div class="row" style="height: 915px">
        <div class="col-6 text-white" style="background-color: #050d21">
          <div class="row" style="padding-top: 70px; padding-left: 100px">
            <q-avatar
              size="40px"
              @click="$router.push('/ListingLoggedIn')"
              style="cursor: pointer"
              ><q-img src="../assets/images/logo.svg"
            /></q-avatar>
            <div
              class="poppins-semibold"
              style="padding-top: 7px; padding-left: 5px; font-size: 20px"
            >
              Nusantara
            </div>
          </div>
          <div
            class="poppins-semibold"
            style="padding-top: 250px; padding-left: 100px; font-size: 40px"
          >
            What are you going to <br />
            call this place ?
          </div>
        </div>
        <div class="col-6 self-center">
          <div class="column items-center">
            <q-form>
              <q-input
                class="poppins-semibold"
                style="
                  background-color: white;
                  border-radius: 20px;
                  margin-bottom: 35px;
                  width: 400px;
                  height: 60px;
                "
                outlined
                v-model="text"
                label="Property Name"
              />
              <q-input
                class="poppins-semibold"
                style="
                  background-color: white;
                  border-radius: 20px;
                  margin-bottom: 35px;
                  width: 400px;
                  height: 60px;
                "
                outlined
                v-model="text"
                label="Property Description"
              />
            </q-form>
          </div>
          <div class="poppins-semibold" style="margin-left: 600px">
            <q-btn
              clickable
              v-ripple
              @click="$router.push('/HostRegister2')"
              no-caps
              label="Next"
              style="
                margin-top: 150px;
                margin-bottom: -150px;
                background: #0c8ce9;
                color: white;
                height: 50px;
                width: 100px;
                border-radius: 10px;
              "
            />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>

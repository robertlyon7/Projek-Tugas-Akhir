<template>
  <q-layout container style="height: 915px">
    <q-page-container
      ><div class="row" style="height: 915px">
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
            Let’s see your beautiful<br />
            property
          </div>
        </div>
        <div class="col-6 self-center">
          <div class="column items-center">
            <q-file
              color="#050d21"
              style="max-width: 300px"
              v-model="filesImages"
              filled
              multiple
              use-chips
              bordered
              label="Place an image"
              accept=".jpg, image/*"
              @rejected="onRejected"
            >
              <template v-slot:prepend>
                <q-icon name="image" />
              </template>
            </q-file>
          </div>
          <div class="row poppins-semibold">
            <div class="col-6">
              <q-btn
                clickable
                v-ripple
                @click="$router.push('/HostRegister5')"
                no-caps
                label="Back"
                style="
                  margin-left: 100px;
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
            <div class="col-6">
              <q-btn
                
                clickable
                v-ripple
                @click="$router.push('/HostRegisterSuccess')"
                no-caps
                label="Next"
                style="
                  margin-top: 150px;
                  margin-bottom: -150px;
                  margin-left: 230px;
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
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    return {
      filesImages: ref(null),
      filesMaxSize: ref(null),
      filesMaxTotalSize: ref(null),
      filesMaxNumber: ref(null),

      onRejected(rejectedEntries) {
        $q.notify({
          type: "negative",
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
        });
      },
    };
  },
};
</script>

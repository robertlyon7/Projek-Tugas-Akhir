<template>
  <q-layout>
    <q-page-container>
      <q-page
        style="
          background: rgb(12, 140, 233);
          background: linear-gradient(
            45deg,
            rgba(12, 140, 233, 0.42854236421130953) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(12, 140, 233, 0.422940123314951) 100%
          );
        "
      >
        <div>
          <q-toolbar>
            <q-avatar
              clickable
              v-ripple
              @click="$router.push('/')"
              style="margin-left: 150px"
            >
              <img src="../assets/images/logoblack.svg" />
            </q-avatar>
            <h6
              class="poppins-semibold"
              style="margin-left: 7px; padding-top: 4px; font-size: 20px"
            >
              Nusantara
            </h6>
          </q-toolbar>
          <q-card
            v-for="n in 1"
            :key="n"
            :class="`shadow-${15}`"
            dark
            bordered
            class="my-card shadow box"
            style="
              background-color: #050d21;
              height: 470px;
              width: 500px;
              margin-top: 88px;
              margin-left: 600px;
              margin-right: 600px;
              border-radius: 25px;
            "
          >
            <q-card-section>
              <div
                class="text-center poppins-bold"
                style="font-size: 30px; margin-top: 25px; margin-bottom: 15px"
              >
                New Password
              </div>
              <div class="text-center poppins-medium" style="font-size: 18px">
                don't forget anymore
              </div>
            </q-card-section>

            <q-card-section>
              <div>
                <q-form
                  class="q-gutter-md"
                  style="margin-left: 20px; margin-right: 20px"
                >
                  <q-input
                    class="poppins-semibold"
                    style="
                      background-color: white;
                      border-radius: 20px;
                      width: 400px;
                      height: 60px;
                      margin-bottom: 30px;
                    "
                    v-model="password"
                    filled
                    placeholder="Insert Your New Password"
                    :type="isPwd ? 'password' : 'text'"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" color="black" />
                    </template>
                  </q-input>

                  <q-input
                    class="poppins-semibold"
                    style="
                      background-color: white;
                      border-radius: 20px;
                      width: 400px;
                      height: 60px;
                      margin-bottom: 55px;
                    "
                    v-model="password"
                    filled
                    placeholder="Confirm Your New Password"
                    :type="isPwd ? 'password' : 'text'"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" color="black" />
                    </template>
                  </q-input>

                  <div>
                    <q-btn
                      clickable
                      v-ripple
                      @click="$router.push('/LoginPage')"
                      class="poppins-semibold"
                      label="Confirm"
                      type="submit"
                      no-caps
                      color="#0C8CE9"
                      style="
                        font-size: 18px;
                        background-color: #0c8ce9;
                        border-radius: 20px;
                        width: 400px;
                        height: 50px;
                      "
                    >
                    </q-btn>
                  </div>
                </q-form>
              </div>
            </q-card-section>
          </q-card>
        </div> </q-page
    ></q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      password: ref(""),
      isPwd: ref(true),

      email: ref(""),
      search: ref(""),
      tel: ref(""),
      url: ref(""),
      time: ref(""),
      date: ref(""),
      name,
      age,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

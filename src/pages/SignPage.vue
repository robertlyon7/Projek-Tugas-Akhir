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
              height: 570px;
              width: 500px;
              margin-top: 35px;
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
                Sign Up
              </div>
              <div class="text-center poppins-medium" style="font-size: 18px">
                Welcome To Nusantara
              </div>
            </q-card-section>

            <q-card-section>
              <div>
                <q-form
                  class="q-gutter-md"
                  style="margin-left: 20px; margin-right: 20px"
                >
                  <q-input
                    type="text"
                    class="poppins-semibold"
                    style="
                      background-color: white;
                      border-radius: 20px;
                      margin-bottom: 35px;
                      width: 400px;
                      height: 60px;
                    "
                    filled
                    placeholder="Name"
                    v-model="this.credential.name"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        style="padding-left: 10px"
                        name="person"
                        color="black"
                      />
                    </template>
                  </q-input>

                  <q-input
                    class="poppins-semibold"
                    style="
                      background-color: white;
                      border-radius: 20px;
                      width: 400px;
                      height: 60px;
                      margin-bottom: 35px;
                    "
                    filled
                    placeholder="Email"
                    v-model="this.credential.email"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        style="padding-left: 10px"
                        name="mail"
                        color="black"
                      />
                    </template>
                  </q-input>

                  <q-input
                    class="poppins-semibold"
                    style="
                      background-color: white;
                      border-radius: 20px;
                      width: 400px;
                      height: 60px;
                      margin-bottom: 35px;
                    "
                    filled
                    placeholder="Password"
                    :type="isPwd ? 'password' : 'text'"
                    v-model="this.credential.password"
                  >
                    <template v-slot:prepend>
                      <q-icon
                        style="padding-left: 10px"
                        name="lock"
                        color="black"
                      />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        style="padding-right: 10px"
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>

                  <div>
                    <q-btn
                      @click="register()"
                      v-ripple
                      class="poppins-semibold"
                      label="Continue"
                      type="submit"
                      no-caps
                      color="#0C8CE9"
                      style="
                        font-size: 18px;
                        background-color: #0c8ce9;
                        border-radius: 20px;
                        width: 400px;
                        height: 50px;
                        margin-bottom: 5px;
                      "
                    >
                    </q-btn>
                  </div>
                  <div
                    class="text-center poppins-regular"
                    style="font-size: 18px; margin-bottom: 7px"
                  ></div>
                </q-form>
              </div>
            </q-card-section>
          </q-card>
          <div>
            <h6 class="text-center poppins-semibold" style="color: #000000">
              Already a user ?
              <span
                clickable
                v-ripple
                @click="$router.push('/LoginPage')"
                style="color: #0c8ce9; cursor: pointer"
                >Log In</span
              >
            </h6>
          </div>
        </div>
      </q-page></q-page-container
    >
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import { vuex } from "vuex";
import { ref } from "vue";

export default {
  data() {
    return {
      credential: {},
    };
  },

  methods: {
    handleSubmit(e) {
      console.log("submitted");
    },
    register() {
      // console.log("credential", this.credential);
      this.$store
        .dispatch("User/register", this.credential)
        .then((res) => {
          console.log(res);
          this.$router.push("/ListingLoggedIn");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  setup() {
    const $q = useQuasar();

    return {
      password: ref(""),
      isPwd: ref(true),

      email: ref(""),
      text: ref(""),
      search: ref(""),
      tel: ref(""),
      url: ref(""),
      time: ref(""),
      date: ref(""),

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>

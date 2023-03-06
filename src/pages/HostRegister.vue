<template>
  <q-layout container style="height: 915px">
    <q-page-container>
      <div class="row" style="height: 915px">
        <div
          class="col-6 text-white"
          style="background-color: #050d21; width: 666px"
        >
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
            style="padding-top: 135px; padding-left: 100px; font-size: 35px"
          >
            Thank you for trusting us <br />to provide an online platform for
            your property.
          </div>
          <div
            class="poppins-light"
            style="padding-top: 30px; font-size: 22px; padding-left: 100px"
          >
            We are proud to help connect you with <br />potential guests.
          </div>
          <div style="margin-top: 15px">
            <q-img
              style="
                border-radius: 15px;
                width: 330px;
                height: 220px;
                margin-left: 100px;
                margin-top: 100px;
              "
              src="../assets/images/bahphoto1.png"
            /><q-img
              style="
                border-radius: 15px;
                width: 200px;
                height: 200px;
                margin-left: -70px;
                margin-top: -20px;
              "
              src="../assets/images/bahphoto2.png"
            />
          </div>
        </div>
        <div class="col-6 self-center">
          <div class="column items-center" style="margin-top: -450px">
            <div
              class="poppins-semibold"
              style="padding-top: 467px; font-size: 30px; margin-left: -235px"
            >
              Create Your Property
            </div>

            <q-form
              enctype="multipart/form-data"
              ref="element"
              style="margin-left: 150px"
            >
              <h6
                class="poppins-reguler"
                style="
                  color: gray;
                  margin-top: 40px;
                  margin-bottom: 10px;
                  font-size: 18px;
                "
              >
                Property Name
              </h6>
              <q-input
                name="name_property"
                class="poppins-semibold"
                style="
                  background-color: white;
                  border-radius: 10px;
                  margin-bottom: 35px;
                  width: 700px;
                  height: 60px;
                "
                outlined
                v-model="PropertyName"
              />
              <h6
                class="poppins-reguler"
                style="
                  color: gray;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  font-size: 18px;
                "
              >
                Property Description
              </h6>
              <q-input
                name="description"
                class="poppins-semibold"
                style="
                  background-color: white;
                  border-radius: 10px;
                  margin-bottom: 35px;
                  width: 700px;
                  height: 60px;
                "
                outlined
                v-model="PropertyDesc"
              />
              <div class="q-gutter-md">
                <h6
                  class="poppins-reguler"
                  style="
                    color: gray;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    font-size: 18px;
                  "
                >
                  Price
                </h6>
                <q-input
                  name="price"
                  outlined
                  v-model="Price"
                  mask="###.###.###.###"
                  type="number"
                  fill-mask="0"
                  reverse-fill-mask
                  input-class="text-left"
                />
                <div class="row">
                  <div class="col-6 text-white" style="padding-right: 20px">
                    <h6
                      class="poppins-reguler"
                      style="
                        color: gray;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        font-size: 18px;
                      "
                    >
                      Type of Place
                    </h6>
                    <q-select
                      use-input
                      name="type_property"
                      outlined
                      v-model="Place"
                      :options="options"
                    />
                  </div>
                  <div class="col-6 text-white">
                    <h6
                      class="poppins-reguler"
                      style="
                        color: gray;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        font-size: 18px;
                      "
                    >
                      Place an image
                    </h6>
                    <q-file
                      name="images"
                      color="#050d21"
                      style="max-width: 400px"
                      v-model="filesImages"
                      outlined
                      multiple
                      use-chips
                      bordered
                      accept=".jpg, image/*"
                      @rejected="onRejected"
                    >
                      <template v-slot:prepend>
                        <q-icon name="image" />
                      </template>
                    </q-file>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 text-white" style="padding-right: 20px">
                    <h6
                      class="poppins-reguler"
                      style="
                        color: gray;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        font-size: 18px;
                      "
                    >
                      Select City
                    </h6>
                    <q-select
                      use-input
                      name="id_kota"
                      outlined
                      v-model="id_kota"
                      :options="optionsK"
                    ></q-select>
                  </div>
                  <div class="col-6 text-white">
                    <!-- <h6
                      class="poppins-reguler"
                      style="
                        color: gray;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        font-size: 18px;
                      "
                    >
                      id_user
                    </h6> -->
                    <!-- <q-input
                      name="id_user"
                      class="poppins-semibold"
                      outlined
                      v-model="id_user"
                    /> -->
                  </div>
                </div>
              </div>
              <!-- @click="$router.push('/DashboardLayout')" -->
              <q-btn
                clickable
                v-ripple
                class="poppins-semibold"
                @click="$router.push('/DashboardLayout'), createProperty"
                no-caps
                style="
                  margin-top: 50px;
                  background: #0c8ce9;
                  color: white;
                  width: 300px;
                  height: 60px;
                  font-size: 20px;
                  border-radius: 10px;
                "
                label="Create Property"
              />
            </q-form>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "src/boot/axios";
import { ref } from "vue";

export default {
  PropertyName: "",
  PropertyDesc: "",
  Price: "",
  Place: "",
  filesImages: "",
  id_user: "",
  id_kota: "",
  models: {},
  vModel: [
    {
      id: 1,
      model: "PropertyName",
    },
    {
      id: 2,
      model: "PropertyDesc",
    },
    {
      id: 3,
      model: "Price",
    },
    {
      id: 3,
      model: "Place",
    },
    {
      id: 4,
      model: "filesImages",
    },
    {
      id: 5,
      model: "filesImagesD",
    },
    {
      id: 6,
      model: "User",
    },
    {
      id: 7,
      model: "id_kota",
    },
  ],

  data() {
    return {
      element: null,
      user: null,
    };
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      console.log("Checking", this.$store.getters["User/auth"]);
      this.user = this.$store.getters["User/auth"];
    },
    click() {
      new FormData(this.$refs.element.$el).forEach((e) => {
        console.log(e);
      });
    },
    async createProperty() {
      try {
        const formData = new FormData(this.$refs.element.$el);

        formData.append("id_user", localStorage.getItem("user_id"));

        const res = await this.$store.dispatch("CRUD/create", formData);

        console.log(res);
        // const res = await axios.api({
        //   method: "post",
        //   url: `${this.$api}/list-property/create`,
        //   data: formData,
        //   headers: {
        //     "Content-Type": `multipart/form-data;`,
        //   },
        // });
        // const res = await axios.post(
        //   `${this.$api}/list-property/create`,
        //   formData,
        //   {
        //     headers: {
        //       "Content-Type": `multipart/form-data;`,
        //     },
        //   }
        // );

        //   const res = await axios({
        //     method: "post",
        //     url: `${this.$api}/add-pet`,
        //     data: formData,
        //     headers: {
        //       "Content-Type": `multipart/form-data;`,
        //     },
        //   });
        //   console.log(res.data);
        //   if (res.status == 200) {
        //     this.$router.push({ name: "pet-list" });
        //   }
        // } catch (error) {
        //   console.log(error);
        // }

        console.log(res.data);
        if (res.status == 200) {
          this.$router.push({ name: "Property-list" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  setup() {
    return {
      filesImages: ref(null),
      filesMaxSize: ref(null),
      filesMaxTotalSize: ref(null),
      filesMaxNumber: ref(null),
      PropertyName: ref(null),
      PropertyDesc: ref(null),
      Price: ref(null),
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      Place: ref(null),
      id_kota: ref(null),
      id_user: ref(null),
      options: [
        {
          label: "House, Villas, Apatment, etc",
          value: 1,
        },
        {
          label: "Meeting Rooms",
          value: 2,
        },
        {
          label: "PLayground",
          value: 3,
        },
      ],
      optionsK: [
        {
          label: "Semarang",
          value: 1,
        },
        {
          label: "Surabaya",
          value: 2,
        },
        {
          label: "Balikpapan",
          value: 3,
        },
      ],
    };
  },
};
</script>

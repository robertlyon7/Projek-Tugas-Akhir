<template>
  <q-layout container style="height: 857px">
    <q-page-container
      ><div class="row" style="height: 857px">
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
            How many guests would<br />
            you like to welcome ?
          </div>
        </div>
        <div class="col-6 self-center">
          <div class="column items-center">
            <q-input
              label="adult"
              class="row poppins-semibold"
              v-model.number="modelAdult"
              type="number"
              outlined
              style="
                font-size: 22px;
                width: 266px;
                height: 78px;
                margin-left: 15px;
              "
            />
            <q-input
              label="kids"
              class="row poppins-semibold"
              v-model.number="modelKids"
              type="number"
              outlined
              style="
                font-size: 22px;
                width: 266px;
                height: 78px;
                margin-left: 15px;
              "
            />
          </div>
          <div class="row poppins-semibold">
            <div class="col-6">
              <q-btn
                clickable
                v-ripple
                @click="$router.push('/HostRegister3')"
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
                @click="$router.push('/HostRegister5')"
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
import { ref } from "vue";

export default {
  props: ["propertyid"],
  mounted() {
    this.get_list_property_by_id();
  },
  data() {
    return {
      property: null,
    };
  },
  methods: {
    check() {
      console.log("propertyid", this.propertyid);
    },
    get_list_property_by_id() {
      this.$store
        .dispatch("Property/getListById", this.propertyid)
        .then((res) => {
          this.property = res.data;
          console.log("halo", this.property);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  setup() {
    return {
      val: ref(false),
      date: ref("2019/02/01"),
      model: ref(null),
      options: ["q", "w", "e", "r", "t"],
    };
  },
};
</script>

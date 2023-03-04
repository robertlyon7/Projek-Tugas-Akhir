<template>
  <q-page-container>
    <q-page>
      <div class="row">
        <div class="col-6 poppins-semibold text-h6 q-pt-xl q-pl-xl">
          Your Property
        </div>
        <div class="col-6 q-pt-xl">
          <q-btn
            class="poppins-semibold"
            style="margin-left: 67ch; border-radius: 7px; padding: 10px"
            color="blue"
            icon="add"
            label="Add Property"
            no-caps
            @click="$router.push('/HostRegister')"
          />
        </div>
      </div>

      <div class="column">
        <div class="col-3" v-for="place in data" :key="place.id">
          <q-card
            class="q-ml-xl q-mt-md"
            style="
              height: 270px;
              width: 900px;
              border-radius: 15px;
              margin-bottom: 20px;
            "
          >
            <div class="row">
              <div class="col-4">
                <q-img
                  class="q-ml-xl"
                  style="
                    height: 200px;
                    width: 200px;
                    border-radius: 10px;
                    margin-top: 35px;
                  "
                  :src="`http://localhost:8000/images/${place.images[0].image}`"
                />
              </div>
              <div class="col-8">
                <div class="q-pl-md" style="padding-top: 70px">
                  <div class="poppins-semibold" style="font-size: 20px">
                    {{ place.name_property }}
                  </div>
                  <div
                    class="poppins-medium"
                    style="font-size: 16px; margin-top: 7px"
                  >
                    {{ place.description }}
                  </div>
                  <div
                    class="poppins-medium"
                    style="font-size: 16px; margin-top: 7px"
                  >
                    {{ place.type_property.type_name }}
                  </div>
                  <div
                    class="poppins-semibold"
                    style="font-size: 16px; margin-top: 7px"
                  >
                    {{ `${intl.format(place.price)} / night` }}
                  </div>
                </div>
              </div>
              <div class="col">
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="edit"
                  style="margin-left: -130px; margin-top: 30px"
                />
              </div>
              <div class="col">
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="delete"
                  @click="deleteItem(place.id)"
                  style="margin-left: -80px; margin-top: 30px"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      intl: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }),
      data: [],
    };
  },
  created() {
    console.log("hai");
    this.$store
      .dispatch("CRUD/readAll")
      .then((res) => {
        console.log(res);
        this.data = res.data.data.data;
      })
      .catch((err) => {
        console.log("nice");
      });
  },
  methods: {
    createProperty() {
      this.$store
        .dispatch("CRUD/create")
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log("failed");
          console.log(err);
        });
    },
    deleteItem(id) {
      axios
        .delete(`/list-property/destroy/{id}`)
        .then((response) => {
          // tindakan yang harus diambil jika berhasil
        })
        .catch((error) => {
          // tindakan yang harus diambil jika gagal
        });
    },
  },
};
</script>
<style lang=""></style>

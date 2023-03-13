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

      <div class="column" style="margin-bottom: 20px">
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
                  :src="`http://api.seele.my.id/images/${place.images[0].image}`"
                />
              </div>
              <div class="col-8">
                <div class="q-pl-md" style="padding-top: 70px">
                  <div class="poppins-semibold" style="font-size: 20px">
                    <!-- {{ place.id }} -->
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
                    {{ place.type_property?.type_name }}
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
                  color="primary"
                  @click="openDialog(data[place.id].id)"
                  v-model="reff"
                  flat
                  round
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
                  @click.prevent="postDelete(post.id)"
                  style="margin-left: -80px; margin-top: 30px"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>

      <q-dialog v-model="alert">
        <q-card class="my-card poppins-semibold">
          <q-card-section>
            <div class="text-h6">Edit Data</div>
          </q-card-section>

          <div v-for="(data, i) in formData" :key="i">
            <p class="q-pt-md no-margin">{{ data.label }}</p>
            <q-input
              v-if="data.type == 'text'"
              v-model="models[data.name]"
              outlined
              style="margin-top: 10px"
            />

            <q-select
              v-if="data.type == 'select'"
              v-model="models[data.name]"
              outlined
              style="margin-top: 10px"
            />

            <q-file
              outlined
              v-if="data.type == 'file'"
              v-model="models[data.name]"
              style="margin-top: 10px"
            />
          </div>

          <!-- <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section> -->

          <q-card-actions align="right">
            <q-btn
              flat
              label="SAVE"
              color="#0C8CE9"
              style="background-color: #0c8ce9; color: white"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
export default {
  setup() {
    return {
      alert: ref(false),
      address: ref(""),
    };
  },
  data() {
    return {
      intl: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }),
      data: [],
      models: {},
      formData: [
        {
          label: "Nama properti",
          name: "name_property",
          type: "text",
        },
        {
          label: "Deskripsi",
          name: "description",
          type: "text",
        },
        {
          label: "Harga",
          name: "price",
          type: "text",
        },
        {
          label: "Tipe Properti",
          name: "type_property",
          type: "text",
        },
        {
          label: "Provinsi",
          type: "select",
          options: [],
        },
        {
          label: "Kota",
          name: "id_kota",
          type: "select",
          options: [],
        },
        {
          label: "Foto properti",
          name: "images",
          type: "file",
        },
      ],
    };
  },
  created() {
    console.log(this.prompt);
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

  mounted() {
    this.get_list_property_by_id();
  },

  methods: {
    async openDialog(dataById) {
      this.alert = true;
      try {
        const res = await axios.get("http://localhost:8000/api/list-property");
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },

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
    get_list_property_by_id() {
      this.$store
        .dispatch("Property/getListById", this.propertyid)
        .then((res) => {
          this.property = res.data;
          // console.log("ini detail", this.property);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // updateProperty(id) {
    //   let formData = jsonToFormData(this.credential);
    //   this.$store
    //     .dispatch("CRUD/update", formData)
    //     .then((res) => {
    //       this.$q.notify({
    //         type: "positive",
    //         position: "top",
    //         message: "Edit success",
    //       });
    //       this.valueSetter("componentMenu");
    //     })
    //     .catch((err) => {
    //       this.$q.notify({
    //         type: "negative",
    //         position: "top",
    //         message: "Edit failed",
    //       });
    //     });
    // },

    deleteProperty() {
      this.$store
        .dispatch("CRUD/delete")
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log("failed");
          console.log(err);
        });
    },
  },
};
</script>
<style>
.my-card {
  width: 100%;
  max-width: 250px;
  padding: 0 2rem;
}
</style>

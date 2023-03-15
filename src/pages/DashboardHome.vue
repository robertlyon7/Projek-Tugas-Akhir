<template>
  <q-page-container>
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

    <q-infinite-scroll @load="onLoad" :offset="5">
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
                  @click="openDialog(place.id)"
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
                  @click.prevent="openDialogDelete(place.id)"
                  style="margin-left: -80px; margin-top: 30px"
                />
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px"></q-spinner-dots>
        </div>
      </template>
    </q-infinite-scroll>

    <q-dialog v-model="confirm2" persistent>
      <q-card>
        <q-card-section class="row items-center poppins-medium">
          <span class="q-ml-sm">Are you sure you want to delete the data?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yes" color="primary" @click="deleteData" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirm" persistent>
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
            v-if="data.name === 'type_property'"
            :options="propertyType"
            v-model="models[data.name]"
            color="284860"
            item-text="label"
            item-value="value"
            clearable
            single-line
            outlined
          />

          <q-select
            v-if="data.name === 'province_id'"
            :options="provinceData"
            :rules="[(v) => !!v || `${data.label} Harus diisi`]"
            v-model="models[data.name]"
            color="284860"
            item-text="label"
            item-value="value"
            clearable
            single-line
            outlined
          />
          <q-select
            v-if="data.name === 'id_kota'"
            :options="cityData"
            :rules="[(v) => !!v || `${data.label} Harus diisi`]"
            v-model="models[data.name]"
            color="284860"
            item-text="label"
            item-value="value"
            clearable
            single-line
            outlined
          />

          <q-file
            outlined
            v-if="data.type == 'file'"
            v-model="models[data.name]"
            style="margin-top: 10px"
          />
        </div>

        <q-card-actions align="right">
          <q-btn
            flat
            label="SAVE"
            color="#0C8CE9"
            style="background-color: #0c8ce9; color: white"
            @click="saveProperty"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      nextPageUrl: "",
      data: [],
      models: {},
      confirm: false,
      processing: false,
      confirm2: false,
      provinceData: [],
      cityData: [],
      deleteId: "",
      selectedPage: "",
      propertyType: [
        {
          label: "House, Villas, Apatment, etc",
          value: 1,
        },
        {
          label: "Meeting Rooms",
          value: 2,
        },
        {
          label: "Experiences",
          value: 3,
        },
      ],
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
          type: "select",
        },
        {
          label: "Provinsi",
          name: "province_id",
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
  async mounted() {
    await this.getProvince();
  },

  watch: {
    "models.province_id": {
      deep: true,
      handler: async function () {
        try {
          this.cityData = [];
          console.log(this.models.province_id.prov_id);
          const res = await axios.get(
            `http://103.31.39.5:2023/api/location/cities?province_id=${this.models.province_id.prov_id}}`
          );
          const dataCity = res.data.data;
          dataCity.forEach((item) => {
            item["label"] = item.city_name;
            item["value"] = item.city_id;
          });
          this.cityData = dataCity;
        } catch (error) {
          console.log(error);
        }
      },
    },
    // queue: {
    //   deep: true,
    //   handler: function () {
    //     if (this.queue.length < 1) {
    //       return;
    //     }
    //     if (this.queue[this.queue.length - 1] != this.nextPageUrl) {
    //       return;
    //     }
    //     console.log("halo", this.queue);
    //     const link = this.queue.shift();
    //     console.log(link);
    //     this.getNextData(link)
    //       .then((res) => {
    //         console.log(res);
    //         this.queue.push(res.next_page_url);
    //         this.data.push(...res.data);
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    //     // try {
    //     //   this.cityData = [];
    //     //   console.log(this.models.province_id.prov_id);
    //     //   const res = await axios.get(
    //     //     `http://103.31.39.5:2023/api/location/cities?province_id=${this.models.province_id.prov_id}}`
    //     //   );
    //     //   const dataCity = res.data.data;
    //     //   dataCity.forEach((item) => {
    //     //     item["label"] = item.city_name;
    //     //     item["value"] = item.city_id;
    //     //   });
    //     //   this.cityData = dataCity;
    //     // } catch (error) {
    //     //   console.log(error);
    //     // }
    //   },
    // },
  },

  async created() {
    await this.getAllData();
  },

  methods: {
    // detectBottomPage() {
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //     console.log("halo");
    //     this.selectedTypeDoctor = "nextPage";
    //     this.getListDokter();
    //     console.log(this.search);
    //   }
    //   console.log(
    //     window.innerHeight + window.scrollY >= document.body.offsetHeight
    //   );
    //   console.log(window);
    // },

    async openDialog(dataId) {
      this.confirm = true;
      try {
        const res = await axios.get(
          `http://api.seele.my.id/api/list-property/detail/${dataId}`
        );
        this.models = res.data.data;
        console.log("ini models ", this.models);
      } catch (error) {
        console.log(error);
      }
    },

    // async saveProperty() {
    //   try {
    //     const formData = new FormData();
    //     // formData.delete("images");
    //     // formData.set("images[]", ...this.filesImages);

    //     for (let key in this.models) {
    //       if (key == "images") {
    //         formData.append("images[]", this.models["images"][0]["image"]);
    //       } else {
    //         formData.append(`${key}`, this.models[key]);
    //       }
    //     }

    //     console.log("haloooooo", this.models["images"]);
    //     // return;

    //     // console.log(formData);

    //     formData.append("id_user", localStorage.getItem("user_id"));

    //     // const res = await axios.post(
    //     //   `http://api.seele.my.id/api/list-property/update/${this.models.id}`
    //     // );

    //     const res = axios({
    //       method: "post",
    //       url: `http://api.seele.my.id/api/list-property/update/${this.models.id}`,
    //       data: formData,
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });

    //     console.log("ini models nya: ", this.models);

    //     console.log(res);
    //     console.log("halo ges");

    //     // console.log(res.data);
    //     // if (res.status == 200) {
    //     //   // this.$router.push({ name: "Property-list" });
    //     //   this.$router.push("/DashboardLayout");
    //     // }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    // insertQueue(index, done) {
    //   // if (this.queue.length <= 0) {
    //   //   done();
    //   //   return;
    //   // }
    //   if (this.queue.length < 1) {
    //     done();
    //     return;
    //   }
    //   if (this.queue[this.queue.length - 1] != this.nextPageUrl) {
    //     done();
    //     return;
    //   }

    //   this.queue.push();
    //   done();
    // },
    async getAllData() {
      try {
        let url = "http://api.seele.my.id/api/list-property?page=1";
        const res = await axios.get(`${url}`);
        const data = res.data.data;
        this.data = data.data;
        this.nextPageUrl = data.next_page_url;
        // this.queue.push(data.next_page_url);
      } catch (error) {
        console.log(error);
      }
    },

    async getProvince() {
      try {
        const res = await axios.get(
          `http://103.31.39.5:2023/api/location/provinces`
        );
        const dataProvince = res.data.data;
        dataProvince.forEach((item) => {
          item["label"] = item.prov_name;
          item["value"] = item.prov_id;
        });
        this.provinceData = dataProvince;
      } catch (error) {
        console.log(error);
      }
    },

    openDialogDelete(placeId) {
      this.confirm2 = true;
      this.deleteId = placeId;
    },

    async deleteData() {
      try {
        const id = this.deleteId;
        const res = await axios.post(
          `http://api.seele.my.id/api/list-property/destroy/${id}`
        );
        console.log(res);
        if (res.status == 200) {
          await this.getAllData();
          this.confirm2 = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    // async getNextData(nextData) {
    //   return new Promise(async (resolve, reject) => {
    //     try {
    //       const res = await axios.get(`${nextData}`);
    //       const data = await res.data.data;
    //       resolve(data);
    //     } catch (error) {
    //       reject(error);
    //     }
    //   });

    //   // this.nextPageUrl = data.next_page_url;
    //   // this.data.push(...data);
    //   // console.log(...data);
    // },
    onLoad(index, done) {
      if (!this.nextPageUrl) {
        done();
        return;
      }
      const link = this.nextPageUrl;
      this.nextPageUrl = null;

      axios
        .get(`${link}`)
        .then((res) => {
          const data = res.data.data;
          this.data.push(...data.data);
          this.nextPageUrl = data.next_page_url;
          done(!data.next_page_url);
        })
        .catch();

      // await this.getNextData();
      // await done();
      // // if (this.nextPageUrl) {
      // // setTimeout(() => {
      // //   // this.getNextData();
      // //   done();
      // //   console.log("halo");
      // // }, 2000);
      // // } else {
      // // this.getAllData();
      // // done();
      // // }
      // // done();
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

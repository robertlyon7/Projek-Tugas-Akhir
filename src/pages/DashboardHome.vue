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
            @click="createProperty"
          />
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
<script>
export default {
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
  },
};
</script>
<style lang=""></style>

<template>
  <q-page-contaier>
    <q-page>
      <div class="poppins-semibold text-h6 q-pt-xl q-pl-xl">Your Account</div>
      <div class="text-center">
        <div class="q-pa-md">
          <q-avatar style="margin-top: 10px; height: 140px; width: 140px">
            <img src="../assets/images/account.svg" />
          </q-avatar>
        </div>
        <div
          v-if="this.user != null"
          class="poppins-semibold text-center"
          style="font-size: 22px; margin-top: 25px"
        >
          {{ user.user.name }}
        </div>
        <div
          v-if="this.user != null"
          class="poppins-semibold text-center q-mt-md"
          style="font-size: 22px"
        >
          {{ user.user.email }}
        </div>
      </div>
    </q-page>
  </q-page-contaier>
</template>
<script>
export default {
  data() {
    return {
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
  },
};
</script>
<style lang=""></style>

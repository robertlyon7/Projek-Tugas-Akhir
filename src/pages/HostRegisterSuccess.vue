<template>
  <q-layout container style="height: 915px">
    <q-page-container
      ><div class="row" style="height: 915px">
        <div class="col-6 text-white" style="background-color: #050d21">
          <div class="row" style="padding-top: 70px; padding-left: 100px">
            <q-avatar size="40px"
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
            class="poppins-bold"
            style="padding-top: 200px; padding-left: 200px; font-size: 40px"
          >
            Congratulation on <br />becoming a host
          </div>
          <div class="poppins-semibold">
            <q-btn
              clickable
              v-ripple
              @click="$router.push('/DashboardLayout')"
              label="See your property"
              no-caps
              style="
                background: #0c8ce9;
                margin-top: 30px;
                margin-left: 200px;
                height: 50px;
                width: 200px;
                border-radius: 10px;
              "
            />
          </div>
        </div>
        <div class="col-6" style="background-color: #050d21">
          <div>
            <q-img
              style="
                width: 350px;
                height: 500px;
                margin-top: 150px;
                margin-left: 150px;
              "
              src="../assets/images/hostsuccess.png"
            />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

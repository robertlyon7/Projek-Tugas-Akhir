<template>
  <q-layout view="lHh lpr lFf" container style="height: 999px">
    <!-- header -->
    <q-header style="height: 50px">
      <q-toolbar>
        <q-avatar
          clickable
          v-ripple
          @click="$router.push('/')"
          style="margin-left: 20px; margin-top: 5px"
        >
          <img src="../assets/images/logo.svg" />
        </q-avatar>
        <q-toolbar-title style="margin-top: 10px" class="poppins-semibold"
          >Nusantara</q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <!-- landing page -->
    <q-page-container>
      <div class="row q-mb-xl">
        <div
          class="col-6 text-white"
          style="background-color: #050d21; height: 850px"
        >
          <div
            class="poppins-bold"
            style="margin-left: 175px; margin-top: 130px; font-size: 65px"
          >
            Host Anything,<br />
            Anywhere
          </div>
        </div>
        <div class="col-6 text-white" style="background-color: #050d21">
          <q-img
            style="
              border-radius: 15px;
              width: 600px;
              height: 400px;
              margin-left: 120px;
              margin-top: 30px;
            "
            src="../assets/images/bahphoto1.png"
          /><q-img
            style="
              border-radius: 15px;
              width: 400px;
              height: 400px;
              margin-top: -70px;
            "
            src="../assets/images/bahphoto2.png"
          />
        </div>
      </div>

      <!-- hero section -->
      <div class="row" style="margin-top: 150px; margin-bottom: 200px">
        <div class="col-5">
          <div
            class="poppins-bold"
            style="padding-left: 300px; padding-top: 50px; font-size: 35px"
          >
            Try Hosting in <br />Nusantara
          </div>
          <div
            class="poppins-semibold"
            style="
              padding-left: 300px;
              padding-top: 20px;
              padding-bottom: 30px;
              font-size: 15px;
            "
          >
            Join us. We’ll help you every<br />
            step of the way.
          </div>
          <q-btn
            clickable
            v-ripple
            @click="$router.push('/HostRegister1')"
            class="poppins-semibold"
            label="Become A Host"
            no-caps
            style="
              margin-left: 300px;
              background-color: #0c8ce9;
              color: white;
              border-radius: 10px;
              height: 50px;
              width: 150px;
            "
          />
        </div>
        <div class="col-7">
          <q-img
            style="border-radius: 20px; width: 700px; height: 500px"
            src="../assets/images/bahphoto3.png"
          />
        </div>
      </div>
    </q-page-container>

    <!-- footer -->
    <q-footer reveal style="height: 100px">
      <q-toolbar style="padding-top: 40px; padding-left: 40px">
        <q-avatar size="25px">
          <img src="../assets/images/copyright.png" />
        </q-avatar>
        <q-toolbar-title class="poppins-semibold" style="font-size: 17px"
          >Nusantara Inc.</q-toolbar-title
        >
        <q-avatar size="20px" class="q-mr-sm"
          ><q-img
            src="../assets/images/facebook.svg
              "
        /></q-avatar>
        <q-avatar size="20px" class="q-mr-sm q-ml-sm"
          ><img
            src="../assets/images/twitter.svg
            "
        /></q-avatar>
        <q-avatar size="20px" class="q-ml-sm" style="padding-right: 40px"
          ><img
            src="../assets/images/instagram.svg
            "
        /></q-avatar>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>



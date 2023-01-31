<template>
  <q-layout view="lHh lpr lFf" container style="height: 857px">
    <q-page-container
      ><div class="row" style="height: 857px">
        <div class="col-6 text-white" style="background-color: #050d21">
          <div class="row" style="padding-top: 70px; padding-left: 100px">
            <q-avatar size="40px" @click="$router.push('/ListingLoggedIn')" style="cursor: pointer;"
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
            What does your property <br />offers ?
          </div>
        </div>
        <div class="col-6 self-center">
          <div class="column items-center">
            <q-btn
              outline
              rounded
              color="primary"
              class="poppins-semibold"
              icon="pool"
              label="Pool"
              no-caps
              style="padding: 15px; width: 500px; margin-bottom: 30px"
            />
          </div>
          <div class="row poppins-semibold">
            <div class="col-6">
              <q-btn
                clickable
                v-ripple
                @click="$router.push('/HostRegister4')"
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
                @click="$router.push('/HostRegister6')"
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

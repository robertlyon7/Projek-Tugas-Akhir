<template>
  <q-layout view="lHh lpr lFf" container style="height: 857px">
    <q-page-container
      ><div class="row" style="height: 857px">
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
            class="poppins-semibold"
            style="padding-top: 250px; padding-left: 100px; font-size: 40px"
          >
            What kind of space will <br />guests have ?
          </div>
        </div>
        <div class="col-6 self-center">
          <div class="column items-center">
            <q-btn
              outline
              rounded
              color="primary"
              class="poppins-semibold"
              label="A private room"
              no-caps
              style="
                padding: 15px;
                width: 500px;
                margin-top: 30px;
                margin-bottom: 30px;
              "
            />
            <q-btn
              outline
              rounded
              color="primary"
              class="poppins-semibold"
              label="A shared room"
              no-caps
              style="padding: 15px; width: 500px; margin-bottom: 30px"
            />
          </div>
          <div class="row poppins-semibold">
            <div class="col-6">
              <q-btn
                clickable
                v-ripple
                @click="$router.push('/HostRegister1')"
                no-caps
                label="Back"
                style="
                  margin-top: 150px;
                  margin-bottom: -150px;
                  margin-left: 100px;
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
                @click="$router.push('/HostRegister3')"
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

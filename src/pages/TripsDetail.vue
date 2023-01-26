<template>
  <q-layout view="lHh lpr lFfd" container style="height: 900px">
    <q-page-container>
      <q-page>
        <q-header elevated>
          <q-toolbar>
            <q-avatar
              clickable
              v-ripple
              @click="$router.push('/')"
              size="44px"
              style="margin-left: 150px"
            >
              <img src="../assets/images/logo.svg" />
            </q-avatar>

            <q-toolbar-title class="poppins-semibold"
              >Nusantara</q-toolbar-title
            >

            <div class="q-pa-md">
              <div class="mx-auto" style="height: 60px"></div>
              <div
                class="absolute-center"
                style="width: 300px; max-width: 100%"
              >
                <q-toolbar>
                  <q-space />
                </q-toolbar>
              </div>
            </div>

            <div class="q-pa-md">
              <q-btn-dropdown
                color=""
                rounded
                dropdown-icon="face"
                style="margin-right: 150px"
              >
                <q-list class="poppins-semibold">
                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/TripsPage')"
                  >
                    <q-item-section>
                      <q-item-section>Trips</q-item-section>
                    </q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/FavoritePage')"
                  >
                    <q-item-section>
                      <q-item-label>Favorites</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator
                    style="margin-left: 10px; margin-right: 10px; color: black"
                  />

                  <q-item clickable v-ripple @click="$router.push('/BAHPage')">
                    <q-item-section>
                      <q-item-label>Become A Host</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-separator
                    style="margin-left: 10px; margin-right: 10px; color: black"
                  />

                  <q-item
                    clickable
                    v-ripple
                    @click="$router.push('/LoginPage')"
                  >
                    <q-item-section>
                      <q-item-label>Log Out</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </q-toolbar>
        </q-header>
        <q-page-container style="padding-bottom: 1px">
          <div class="navbar navbar_open">
            <q-banner inline-actions class="bg-white text-black">
              <h6
                class="poppins-semibold"
                style="margin-left: 150px; margin-top: -50px; font-size: 26px"
              >
                Transaction Detail
              </h6>
            </q-banner>
          </div>
        </q-page-container>
        <q-page-container>
          <div class="row">
            <div class="col">
              <q-card-section class="row" style="margin-top: -130px">
                <img
                  src="../assets/images/detailimage.png"
                  alt=""
                  style="
                    height: 252px;
                    width: 252px;
                    margin-top: 20px;
                    margin-left: 150px;
                    border-radius: 20px;
                  "
                />

                <div class="column" style="height: 150px; margin-left: 30px">
                  <div class="col" style="font-size: 20px">
                    <h6 class="col poppins-semibold">House in Lombok</h6>
                  </div>
                  <div class="col" style="margin-top: -145px">
                    <div
                      class="col poppins-regular"
                      style="
                        margin-right: 70px;
                        margin-top: 80px;
                        font-size: 20px;
                      "
                    >
                      Mayor Street 15
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div style="margin-left: 150px; margin-top: -30px">
                  <h6 class="poppins-medium" style="font-size: 20px">
                    Room type : 2 shared rooms
                  </h6>
                  <h6
                    class="poppins-medium"
                    style="font-size: 20px; margin-top: -40px"
                  >
                    Guests : 4 adults
                  </h6>
                  <h6
                    class="poppins-medium"
                    style="font-size: 20px; margin-top: -40px"
                  >
                    Schedule : 12 Nov - 19 Nov 2022
                  </h6>
                  <h6
                    class="poppins-medium"
                    style="font-size: 20px; margin-top: -40px"
                  >
                    Payment method : Credit card
                  </h6>
                </div>
                <q-btn
                  class="poppins-semibold"
                  clickable
                  v-ripple
                  @click="$router.push('/RatingTrips')"
                  no-caps
                  label="Complete Order"
                  style="
                    margin-top: 50px;
                    margin-left: 150px;
                    font-size: 24px;
                    background-color: #0c8ce9;
                    color: white;
                    border-radius: 20px;
                    width: 250px;
                    height: 80px;
                  "
                />
              </q-card-section>
            </div>
            <div class="col">
              <div class="col" style="margin-left: 50px">
                <q-card
                  flat
                  bordered
                  class="my-card"
                  style="
                    border-color: black;
                    height: 370px;
                    width: 550px;
                    margin-left: 30px;
                    border-radius: 30px;
                    margin-top: -170px;
                  "
                >
                  <div class="row">
                    <div class="col">
                      <div
                        class="column"
                        style="height: 150px; margin-left: 40px"
                      >
                        <div class="col" style="margin-top: -18px">
                          <h6 class="poppins-medium" style="font-size: 18px">
                            Price details
                          </h6>
                        </div>
                        <div
                          class="col"
                          style="margin-top: 60px; margin-bottom: 20px"
                        >
                          <h6 class="poppins-regular" style="font-size: 18px">
                            500.000 x 6 nights
                          </h6>
                        </div>
                        <div
                          class="col"
                          style="margin-top: 25px; margin-bottom: 20px"
                        >
                          <h6 class="poppins-regular" style="font-size: 18px">
                            Service fee
                          </h6>
                        </div>
                        <div class="col" style="margin-top: 25px">
                          <h6 class="poppins-regular" style="font-size: 18px">
                            Promo
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col" style="margin-top: 50px">
                      <div
                        class="column"
                        style="
                          height: 150px;
                          margin-left: 40px;
                          margin-right: 40px;
                        "
                      >
                        <div class="col">
                          <h6
                            class="poppins-regular"
                            style="font-size: 18px; text-align: right"
                          >
                            3.000.000
                          </h6>
                        </div>
                        <div class="col">
                          <h6
                            class="poppins-regular"
                            style="font-size: 18px; text-align: right"
                          >
                            400.000
                          </h6>
                        </div>
                        <div class="col">
                          <h6
                            class="poppins-regular"
                            style="font-size: 18px; text-align: right"
                          >
                            -150.000
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <q-separator color="black" inset style="margin-top: 55px" />
                  <div class="row">
                    <div
                      class="col poppins-medium"
                      style="
                        margin-left: 40px;
                        margin-top: 40px;
                        font-size: 18px;
                      "
                    >
                      Total
                    </div>
                    <div
                      class="col poppins-regular"
                      style="
                        font-size: 18px;
                        margin-right: 40px;
                        text-align: right;
                        margin-top: 40px;
                      "
                    >
                      3.250.000
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </q-page-container>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script></script>
<style></style>

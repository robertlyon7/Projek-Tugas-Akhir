<template>
  <q-layout view="lHh lpr lFf" container style="height: 999px">
    <q-page-container>
      <!-- landing page -->

      <div class="row q-mb-xl">
        <div
          class="col-8 text-white"
          style="background-color: #050d21; height: 900px"
        > 
          <div class="row">
            <q-avatar style="margin-left: 30px; margin-top: 15px; size: 20px">
              <img src="../assets/images/logo.svg" />
            </q-avatar>
            <div
              class="poppins-semibold"
              style="padding-top: 27px; padding-left: 10px; font-size: 18px"
            >
              Nusantara
            </div>
          </div>
          <div
            class="poppins-bold"
            style="margin-left: 175px; padding-top: 100px; font-size: 65px"
          >
            Find Your <br />Place to Stay <br />in Nusantara
          </div>
          <div
            class="poppins-light"
            style="margin-left: 175px; margin-top: 20px; font-size: 20px"
          >
            Discover entire homes and private rooms<br />
            perfect for any trip.
          </div>
          <q-card
            class="row"
            style="
              margin-right: -10px;
              margin-left: 175px;
              margin-top: 50px;
              height: 80px;
              width: 800px;
              border-radius: 15px;
            "
          >
            <q-card-section class="q-mr-none q-ml-md q-pt-sm">
              <q-btn-dropdown
                no-caps
                flat
                style="font-size: 15px"
                dropdown-icon="expand_more"
                class="poppins-semibold text-black"
                color=""
                label="Location"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section class="poppins-semibold">
                      <q-item-label>Lombok</q-item-label>
                      <q-item-label caption>Mataram</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section class="poppins-semibold">
                      <q-item-label>Denpasar</q-item-label>
                      <q-item-label caption>Bali</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-card-section>
            <q-card-section class="q-pt-sm">
              <q-btn-dropdown
                no-caps
                flat
                style="font-size: 15px"
                dropdown-icon="expand_more"
                class="poppins-semibold text-black"
                label="Property type"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section class="poppins-semibold">
                      <q-item-label>Villa</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section class="poppins-semibold">
                      <q-item-label>Apartment</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-card-section>
            <q-card-section class="q-pt-sm">
              <q-btn-dropdown
                no-caps
                flat
                style="font-size: 15px"
                dropdown-icon="expand_more"
                class="poppins-semibold text-black"
                label="Price range"
              >
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section class="poppins-semibold">
                      <q-item-label>$200-300</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section class="poppins-semibold">
                      <q-item-label>$400-500</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-card-section>
            <q-card-section>
              <q-btn
                icon="search"
                class="poppins-semibold"
                :ripple="{ center: true }"
                style="
                  background: #0c8ce9;
                  color: white;
                  height: 50px;
                  width: 150px;
                  font-size: 15px;
                  border-radius: 10px;
                "
                label="Search"
                no-caps
              />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4">
          <q-img
            style="width: 100%; height: 900px"
            src="../assets/images/half-img.png"
            fit="fill"
          />
        </div>
      </div>

      <div class="title-section">
        <text class="poppins-bold"
          >The Benefits From<br />
          Our Services</text
        >
      </div>

      <!-- Card Services -->
      <div class="q-pa-md row items-start q-gutter-md justify-center">
        <q-card
          flat
          bordered
          style="
            margin-left: 20px;
            margin-right: 20px;
            background-color: #050d21;
            border-radius: 20px;
            height: 300px;
            width: 260px;
          "
        >
          <q-card-section class="q-pl-md">
            <div class="text-center">
              <q-avatar size="120px">
                <img src="../assets/images/shield.png" />
              </q-avatar>
            </div>
            <div
              class="text-white text-center poppins-semibold q-pb-md"
              style="font-size: 18px"
            >
              Free Protection
            </div>
            <div
              class="text-white text-center poppins-light"
              style="font-size: 12px"
            >
              The most comprehensive <br />
              protection in travel. Always <br />included, always free.
            </div>
          </q-card-section>
        </q-card>
        <q-card
          flat
          bordered
          style="
            margin-left: 20px;
            margin-right: 20px;
            background-color: #050d21;
            border-radius: 20px;
            height: 300px;
            width: 260px;
          "
        >
          <q-card-section class="q-pl-md">
            <div class="text-center">
              <q-avatar size="120px">
                <img src="../assets/images/calendar.png" />
              </q-avatar>
            </div>
            <div
              class="text-white text-center poppins-semibold q-pb-md"
              style="font-size: 18px"
            >
              Flexible Cancellation
            </div>
            <div
              class="text-white text-center poppins-light"
              style="font-size: 12px"
            >
              Cancellation options make <br />it easy to re-book if <br />your
              plans change.
            </div>
          </q-card-section>
        </q-card>
        <q-card
          flat
          bordered
          style="
            margin-left: 20px;
            margin-right: 20px;
            background-color: #050d21;
            border-radius: 20px;
            height: 300px;
            width: 260px;
          "
        >
          <q-card-section class="q-pl-md">
            <div class="text-center">
              <q-avatar size="120px">
                <img src="../assets/images/customer.png" />
              </q-avatar>
            </div>
            <div
              class="text-white text-center poppins-semibold q-pb-md"
              style="font-size: 18px"
            >
              24/7 Customer Support
            </div>
            <div
              class="text-white text-center poppins-light"
              style="font-size: 12px"
            >
              Talk to our support team<br />
              from anywhere in <br />the world, any hour of the day.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- section 1 -->
      <div class="row">
        <div class="col-6">
          <q-img
            src="../assets/images/landing-page1.png"
            style="
              width: 470px;
              height: 600px;
              border-radius: 20px;
              margin-top: 150px;
              margin-left: 300px;
              margin-bottom: 150px;
            "
          />
        </div>
        <div class="col-6">
          <div
            class="justify-right poppins-bold"
            style="
              margin-top: 170px;
              margin-bottom: 20px;
              margin-left: 15px;
              font-size: 30px;
            "
          >
            Discover Nusantara <br />With The Best<br />
            Experience
          </div>
          <div class="poppins-semibold" style="margin-left: 15px">
            Explore the beautiful landscape of <br />Nusantara. Find homes you
            would never<br />
            have known to search for.
          </div>
          <div
            class="poppins-semibold"
            style="margin-top: 30px; margin-left: 15px"
          >
            <q-btn
              clickable
              v-ripple
              @click="$router.push('/ListingPage')"
              style="
                background: #0c8ce9;
                color: white;
                height: 50px;
                width: 150px;
                font-size: 15px;
                border-radius: 10px;
              "
              label="Explore More"
              no-caps
            />
          </div>
        </div>
      </div>

      <!-- section 2 -->
      <div class="row">
        <div class="col-6">
          <div
            class="justify-right poppins-bold"
            style="
              margin-top: 50px;
              margin-left: 300px;
              font-size: 30px;
              margin-bottom: 20px;
            "
          >
            Want to become<br />
            a Host ?
          </div>
          <div class="poppins-semibold" style="margin-left: 300px">
            Explore the beautiful landscape of <br />Nusantara. Find homes you
            would never<br />
            have known to search for.
          </div>
          <div
            class="poppins-semibold"
            style="margin-top: 30px; margin-left: 300px"
          >
            <q-btn
              clickable
              v-ripple
              @click="$router.push('/BAHPage')"
              style="
                margin-bottom: 150px;
                background: #0c8ce9;
                color: white;
                height: 50px;
                width: 150px;
                font-size: 15px;
                border-radius: 10px;
              "
              label="Become a Host"
              no-caps
            />
          </div>
        </div>
        <div class="col-6">
          <q-img
            src="../assets/images/landing-page2.png"
            style="
              width: 470px;
              height: 600px;
              border-radius: 20px;
              margin-bottom: 100px;
            "
          />
        </div>
      </div>

      <div
        class="poppins-bold"
        style="margin-bottom: 50px; margin-left: 300px; font-size: 25px"
      >
        Places that may interest you
      </div>

      <!-- showcase -->
      <div
        class="q-pa-md row items-start q-gutter-md justify-center"
        style="margin-bottom: 150px"
      >
        <q-card class="q-mr-md">
          <q-img
            src="../assets/images/house1.png"
            style="height: 300px; width: 355px"
          />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis poppins-semibold">
                VIlla in Lombok
              </div>
              <div
                class="col-auto text-h6 text-caption row no-wrap items-center poppins-semibold"
              >
                <q-icon name="star" class="q-pr-xs" />
                4.8
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="poppins-light q-pb-xs">City Street 12</div>
            <div class="poppins-light q-pb-xs">1 king bed, 2 queen bed</div>
            <div class="poppins-semibold">Rp 1.500.000,00 / night</div>
          </q-card-section>
        </q-card>

        <q-card class="q-mr-md q-ml-md">
          <q-img
            src="../assets/images/house2.png"
            style="height: 300px; width: 355px"
          />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis poppins-semibold">
                House in Lombok
              </div>
              <div
                class="col-auto text-h6 text-caption row no-wrap items-center poppins-semibold"
              >
                <q-icon name="star" class="q-pr-xs" />
                5.0
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="poppins-light q-pb-xs">Mayor Street 15</div>
            <div class="poppins-light q-pb-xs">2 king bed, 3 queen bed</div>
            <div class="poppins-semibold">Rp 2.000.000,00 / night</div>
          </q-card-section>
        </q-card>

        <q-card class="q-mr-md q-ml-md">
          <q-img
            src="../assets/images/house3.png"
            style="height: 300px; width: 355px"
          />

          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis poppins-semibold">
                Resort in Lombok
              </div>
              <div
                class="col-auto text-h6 text-caption row no-wrap items-center poppins-semibold"
              >
                <q-icon name="star" class="q-pr-xs" />
                4.8
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="poppins-light q-pb-xs">City Beach</div>
            <div class="poppins-light q-pb-xs">1 king bed</div>
            <div class="poppins-semibold">Rp 700.000,00 / night</div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Testimony -->
      <div
        class="text-center poppins-bold"
        style="margin-bottom: 50px; font-size: 30px"
      >
        What People Say About Us ?
      </div>

      <div class="q-pa-md">
        <div class="justify-center">
          <q-carousel
            style="border-radius: 20px; margin-bottom: 50px"
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="350px"
            class="bg-primary text-white shadow-1"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-avatar size="60px"
                ><img src="../assets/images/testimony1.png"
              /></q-avatar>
              <div class="q-mt-md q-pt-sm text-left poppins-semibold">
                The service provided is very useful<br />
                and the people in Nusantara<br />
                are very responsive
              </div>
              <div class="q-mt-sm q-pt-sm text-left poppins-light">
                Simon, Customer
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-avatar size="60px"
                ><img src="../assets/images/testimony2.png"
              /></q-avatar>
              <div class="q-mt-md q-pt-sm text-left poppins-semibold">
                The service provided is very useful<br />
                and the people in Nusantara<br />
                are very responsive
              </div>
              <div class="q-mt-sm q-pt-sm text-left poppins-light">
                Jacob, Customer
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-avatar size="60px"
                ><img src="../assets/images/testimony3.png"
              /></q-avatar>
              <div class="q-mt-md q-pt-sm text-left poppins-semibold">
                The service provided is very useful<br />
                and the people in Nusantara<br />
                are very responsive
              </div>
              <div class="q-mt-sm q-pt-sm text-left poppins-light">
                Linda, Customer
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-avatar size="60px"
                ><img src="../assets/images/testimony4.png"
              /></q-avatar>
              <div class="q-mt-md q-pt-sm text-left poppins-semibold">
                The service provided is very useful<br />
                and the people in Nusantara<br />
                are very responsive
              </div>
              <div class="q-mt-sm q-pt-sm text-left poppins-light">
                Ethan, Customer
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </q-page-container>

    <!-- Footer -->
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

<script>
import { text } from "body-parser";
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("style"),
      selected: "A",
      options: [
        { text: "Lombok", value: "A" },
        { text: "Bali", value: "B" },
      ],
    };
  },
};
</script>

<template>
  <q-page-container>
    <q-page>
      <div class="poppins-semibold text-h6 q-pl-xl q-pt-xl">Orders</div>
      <!-- <div class="poppins-medium q-pl-xl q-pt-md" style="font-size: 18px;">New </div> -->
      <q-card
        class="q-ml-xl q-mt-md"
        style="height: 270px; width: 900px; border-radius: 15px"
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
              src="../assets/images/house1.png"
            />
          </div>
          <div class="col-8">
            <div class="q-pl-md" style="padding-top: 70px">
              <div class="poppins-semibold" style="font-size: 20px">
                House in Lombok
              </div>
              <div
                class="poppins-medium"
                style="font-size: 16px; margin-top: 7px"
              >
                Mayor Street 15
              </div>
              <div
                class="poppins-medium"
                style="font-size: 16px; margin-top: 7px"
              >
                2 king bed, 3 queen bed
              </div>
              <div
                class="poppins-semibold"
                style="font-size: 16px; margin-top: 7px"
              >
                Rp 2.000.000,00 / night
              </div>
              <div style="margin-top: 50px">
                <q-btn
                  icon="check"
                  flat
                  dense
                  size="22px"
                  @click="confirm = true"
                  @click.stop="deleteTask(index)"
                  style="margin-top: -50px; margin-left: -13px"
                />
                <q-dialog v-model="confirm" persistent>
                  <q-card
                    style="height: 261px; width: 526px; border-radius: 20px"
                  >
                    <q-card-section class="row items-center">
                      <h6 class="poppins-semibold" style="margin-left: 120px">
                        Accept this order?
                      </h6>
                    </q-card-section>

                    <q-card-actions align="center" style="margin-top: -33px">
                      <q-btn
                        class="poppins-semibold"
                        outline
                        color="blue"
                        label="No"
                        v-close-popup
                        style="
                          background-color: white;
                          height: 20px;
                          width: 100px;
                          border-radius: 10px;
                          font-size: 18px;
                          margin-right: 27px;
                        "
                      />

                      <q-btn
                        class="poppins-semibold"
                        label="Yes"
                        v-close-popup
                        style="
                          font-size: 18px;
                          background-color: #0c8ce9;
                          color: white;
                          border-radius: 10px;
                          height: 20px;
                          width: 100px;
                          margin-left: 27px;
                        "
                      />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-page>
  </q-page-container>
</template>
<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import LoginPage from "src/pages/LoginPage.vue";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      confirm: ref(false),
      address: ref(""),
      current: ref(3),
      val: ref(true),
      basic: ref(false),
      fixed: ref(false),
      dialog: ref(false),
      cancelEnabled: ref(false),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

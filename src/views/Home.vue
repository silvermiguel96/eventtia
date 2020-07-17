<template>
  <v-container>
    <Header />
    <v-row>
      <v-col cols="12" sm="6" class="py-0">
        <v-row>
          <v-col cols="12" sm="6">
            <v-card>
              <v-card-text class="borderPrimary">
                <h2 class="primary--text">12.043</h2>
                <span class="tertiary--text">Registered attendees</span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card>
              <v-card-text class="d-flex borderSecondary">
                <div>
                  <h2 class="secondary--text">12.043</h2>
                  <span>Attendees online</span>
                </div>
                <div class="borderLeft mx-2">
                  <h2 class="secondary--text mx-3">56%</h2>
                  <span class="text-caption mx-3">Attendees</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card>
              <v-card-title class="d-flex justify-space-between">
                <span class="tertiary--text">Active Attendees</span>
                <v-icon color="primary">more_vert</v-icon>
              </v-card-title>
              <v-card-text>
                <v-sheet class="mx-auto" color="transparent" max-width="calc(100% - 32px)">
                  <v-sparkline
                    :labels="labels"
                    :value="value"
                    :gradient="['#22D2B9', '#23DBC1AD', '#25EFD300']"
                    color="tertiary"
                    fill
                    line-width="2"
                  ></v-sparkline>
                </v-sheet>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-row>
          <v-col cols="12">
            <Live-activities />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <Live-announcements />
      </v-col>
      <v-col cols="12" sm="6">
        <Networking />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "../components/Header.vue";
import LiveAnnouncements from "../components/LiveAnnouncements.vue";
import Networking from "../components/Networking.vue";
import LiveActivities from "../components/LiveActivities.vue";
export default {
  components: {
    Header,
    LiveAnnouncements,
    Networking,
    LiveActivities
  },
  data() {
    return {
      labels: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"],
      value: [0, 675, 410, 390, 310, 460, 350, 340]
    };
  }
};
</script>

<style scope>
.borderPrimary {
  border-left: 19px solid #851486;
}
.borderSecondary {
  border-left: 19px solid #22d2b9;
}
.borderLeft {
  border-left: 1px solid #e5e4e5;
}
</style>
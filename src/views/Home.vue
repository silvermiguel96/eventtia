<template>
  <v-container>
    <Header />
    <v-row>
      <v-col cols="12" sm="6" class="py-0">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <Registered-attendees />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <Attendees-online />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <Active-attendees />
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
import RegisteredAttendees from "../components/RegisteredAttendees.vue";
import AttendeesOnline from "../components/AttendeesOnline.vue";
import ActiveAttendees from "../components/ActiveAttendees.vue";
import LiveAnnouncements from "../components/LiveAnnouncements.vue";
import Networking from "../components/Networking.vue";
import LiveActivities from "../components/LiveActivities.vue";
export default {
  components: {
    Header,
    RegisteredAttendees,
    AttendeesOnline,
    LiveAnnouncements,
    ActiveAttendees,
    Networking,
    LiveActivities
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
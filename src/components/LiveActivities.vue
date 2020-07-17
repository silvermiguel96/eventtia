<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between">
      <div>
        <v-icon color="#F23D4F" small class="mr-2">fiber_manual_record</v-icon>
        <span class="tertiary--text">Live Activities</span>
      </div>
      <v-icon color="primary">more_vert</v-icon>
    </v-card-title>
    <v-card-text>
      <div v-for="activite in activites" :key="activite.id" class="my-1">
        <v-row>
          <v-col cols="2" md="3">
            <h5 class="textSmall">{{activite.timeUno}}</h5>
            <h5 class="textSmall">{{activite.timeTwo}}</h5>
          </v-col>
          <v-col cols="6" md="5">
            <h5>{{activite.nameActivity}}</h5>
            <span class="textSmall">{{activite.NameSpeaker}} | {{activite.titleSpeaker}}</span>
            <v-progress-linear color="secondary" value="60"></v-progress-linear>
          </v-col>
          <v-col cols="3" class="px-0">
            <div class="text-center">
              <h3 class="primary--text">{{activite.numberAttendees}}</h3>
              <span class="textSmall">Attendees</span>
            </div>
          </v-col>
          <v-col cols="1" class="px-0">
            <div class="text-center">
              <v-icon>keyboard_arrow_right</v-icon>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
    </v-card-text>
    <v-row></v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      activites: [
        {
          id: 1,
          timeUno: "8:00 AM",
          timeTwo: "9:00 AM",
          nameActivity: "Name of the Activity",
          NameSpeaker: "Evelyn J. Fields ",
          titleSpeaker: "CEO of Stay Green",
          numberAttendees: "1.320"
        },
        {
          id: 1,
          timeUno: "8:00 AM",
          timeTwo: "9:00 AM",
          nameActivity: "Name of the Activity",
          NameSpeaker: "Evelyn J. Fields ",
          titleSpeaker: "CEO of Stay Green",
          numberAttendees: "4.350"
        },
        {
          id: 1,
          timeUno: "8:00 AM",
          timeTwo: "9:00 AM",
          nameActivity: "Name of the Activity",
          NameSpeaker: "Evelyn J. Fields ",
          titleSpeaker: "CEO of Stay Green",
          numberAttendees: "829"
        }
      ]
    };
  }
};
</script>

<style scoped>
.textSmall {
  font-size: 0.8em;
  font-weight: 400;
}
</style>
<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between py-1">
      <v-row>
        <v-col cols="10" lg="11">
          <span class="tertiary--text">Live Announcements</span>
          <p
            class="mb-0 textAnnouncements"
          >This announcement will be visible for all the attendees in the event.</p>
        </v-col>
        <v-col cols="1" md="2" lg="1">
          <v-icon color="primary">more_vert</v-icon>
        </v-col>
      </v-row>
      <div></div>
    </v-card-title>
    <v-card-text class="py-0">
      <v-textarea color="secondary" outlined rows="4"></v-textarea>
    </v-card-text>
    <v-card-text class="pt-0">
      <div class="text-end">
        <v-btn rounded color="secondary" class="text-capitalize">Publish</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.textAnnouncements {
  font-size: 0.6em;
}
@media (max-width: 1300px) {
  .textAnnouncements {
    font-size: 0.5em;
  }
}
</style>
<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between">
      <div>
        <span class="tertiary--text">Live Announcements</span>
        <p
          class="mb-0 textAnnouncements"
        >This announcement will be visible for all the attendees in the event.</p>
      </div>
      <v-icon color="primary">more_vert</v-icon>
    </v-card-title>
    <v-card-text class="py-0">
      <v-textarea color="secondary" outlined rows="3"></v-textarea>
    </v-card-text>
    <v-card-text class="pt-0">
      <div class="text-end">
        <v-btn rounded color="secondary" dark>Publish</v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.textAnnouncements {
  font-size: 0.5em;
}
</style>
<template>
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
</template>

<script>
export default {
  data() {
    return {
      labels: ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"],
      value: [0, 675, 410, 390, 310, 460, 350, 340]
    };
  }
};
</script>

<style>
</style>
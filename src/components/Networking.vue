<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between">
      <span>Networking</span>
      <v-icon color="primary">more_vert</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row class="d-flex">
        <v-col cols="6" md="4" class="d-flex flex-column justify-center order-1 order-md-0">
          <div class="ma-1">
            <v-icon color="primary" small>fiber_manual_record</v-icon>
            <span>Scheduled</span>
          </div>
          <div class="ma-1">
            <v-icon color="secondary" small>fiber_manual_record</v-icon>
            <span>Completed</span>
          </div>
          <div class="ma-1">
            <v-icon color="warning" small>fiber_manual_record</v-icon>
            <span>Pending</span>
          </div>
          <div class="ma-1">
            <v-icon color="error" small>fiber_manual_record</v-icon>
            <span>Rejected</span>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="order-0">
          <div class="borderRight d-flex justify-center">
            <apexchart type="donut" width="200" :options="chartOptions" :series="series"></apexchart>
          </div>
        </v-col>
        <v-col cols="6" md="4" class="d-flex flex-column justify-center align-center order-2">
          <div class="ma-1 text-center">
            <h1 class="primary--text">20</h1>
            <span class="text-body-">
              Meetings
              <br />live now
            </span>
          </div>
          <div class="ma-1 text-center">
            <h1 class="primary--text">20</h1>
            <span>
              Attendees
              <br />in meetings
            </span>
          </div>
        </v-col>
        <v-col cols="12" class="order-3 d-flex justify-end py-1">
          <h3 class="primary--text">View meetings live now</h3>
          <v-icon color="primary">keyboard_arrow_right</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [34, 35, 41, 17],
      chartOptions: {
        chart: {
          width: 250,
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: "gradient",
          colors: ["#851486", "#22D2B9", "#F4AC33", "#F23D4F"]
        },
        legend: {
          show: false
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.borderRight {
  border-right: 1px solid #e5e4e5;
}
@media (max-width: 1300px) {
  .borderRight {
    border-right: none;
  }
}
</style>

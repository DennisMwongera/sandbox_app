<template>
    <div class="container mt-5 p-5">
      <!-- <alerts :_success="success" :_error="error"></alerts> -->
      <div v-if="loading" class="d-flex mb-3">
        <div class="flex-fill shadow-sm rounded mr-2 p-2 text-center bg-white">
          <h1 class="font-weight-bold mt-0"><img src=""></h1>
        </div>
      </div>
      <div v-else>
        <div class="card-body px-0 pt-0 pb-2">
          <div class="row g-2 mb-2">
            <div class="col-md-12 mb-sm-2 col-lg-6 mb-2 mb-sm-0">
              <input v-model="titleFilter" class="form-control border-end-0 border" type="search"
                placeholder="Search for Application...">
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="row g-2">
                <div class="col-lg-7 col-md-6 filter-cats">
                  <select v-model="statusFilter" class="form-select">
                    <option value="">All Statuses</option>
                    <option v-for="status in statuses" :key="status.id" :value="status.status">{{ status.status }}</option>
                  </select>
                </div>
                <div class="col-lg-5 col-md-6">
                  <select v-model="periodFilter" class="form-select">
                    <option value="">Select Period</option>
                    <option value="Last 1 Month">Last 1 Month</option>
                    <option value="Last 3 Months">Last 3 Months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <h5 class="card-title p-3">All Applications</h5>
        <div class="d-flex flex-wrap mb-3 mt-4 dashboard">
          <div v-for="app in filteredApplications" :key="app.id" class="card2 card shadow mb-3" style="max-width: 800px;">
            <div class="row g-0 align-items-center">
              <div class="col-sm-4 col-5 m-auto p-4">
                <img :src="getImageSrc(app.title)" class="img-fluid rounded-start image-column" alt="...">
              </div>
              <div class="col-sm-8 col-7">
                <div class="card-body">
                  <router-link :to="`/application/${app.id}`">
                    <h5 class="card-title">{{ app.title }}</h5>
                  </router-link>
                  <p class="card-text">{{ app.description }}</p>
                  <p class="card-text d-none d-sm-block">
                    <small :class="getStatusTextColorClass(app.development_status)">{{ app.development_status }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // import Alerts from "@/components/Alerts";
  
  export default {
    name: "Applications",
    inject: ['$http'],
    props: ['auth', 'id'],
    components: {},
    data() {
      return {
        applications: [],
        statuses: [],
        loading: false,
        titleFilter: "",
        statusFilter: "",
        periodFilter: "",
      }
    },
    mounted() {
      console.log('geeeeeeeeeeeeeeee');
      this.getApplications();
      this.getStatuses();
    },
    computed: {
      filteredApplications() {
        const filteredTitle = this.titleFilter.toLowerCase();
        const filteredStatus = this.statusFilter;
        const filteredPeriod = this.periodFilter;
  
        return this.applications.filter((application) => {
          const titleMatch = application.title.toLowerCase().includes(filteredTitle);
          const statusMatch = !filteredStatus || application.development_status === filteredStatus;
          const periodMatch = !filteredPeriod || this.checkDatePeriod(application.created_at, filteredPeriod);
  
          return titleMatch && statusMatch && periodMatch;
        });
      },
    },
    methods: {
      getApplications() {
        // this.setLoading()
        // this.clear()
        this.$http.get('api/applications').then(response => {
          this.applications = response.data
          console.log(this.applications)
  
        }).catch(error => {
          this.showError(error)
        }).then(() => {
          this.wait = false
        })
      },
      getImageSrc(appTitle) {
        switch (appTitle) {
          case 'Sabasi Application':
            return require('@/assets/img/sabasi.png');
          case 'Open County Application':
            return require('@/assets/img/opencounty.png');
          case 'Old Open County Application':
            return require('@/assets/img/opencounty.png');
          case 'Nuru Application':
            return require('@/assets/img/nuru_.png');
          case 'Maono Application':
            return require('@/assets/img/maono.png');
          case 'Kilifi M and E Application':
            return require('@/assets/img/kilifi-county-logo.png');
          case 'Ability Application':
            return require('@/assets/img/oi-ability-programme.png');
          case 'Nairobi M and E Application':
            return require('@/assets/img/nairobi.png');
          default:
            return require('@/assets/img/dash/folder.png');
        }
      },
      getStatusTextColorClass(status) {
        if (status === 'staging') {
          return 'staging';
        } else if (status === 'pending') {
          return 'pending';
        } else {
          return ''; // Return an empty string for default color or handle additional status cases
        }
      },
      getStatuses() {
        this.$http.get('api/statuses').then(response => {
          this.statuses = response.data
          console.log(this.statuses)
  
        }).catch(error => {
          this.showError(error)
        }).then(() => {
          this.wait = false
        })
      },
      checkDatePeriod(dateString, period) {
        const currentDate = new Date();
        const createdDate = new Date(dateString);
  
        switch (period) {
          case "Last 1 Month":
            return createdDate >= new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
          case "Last 3 Months":
            return createdDate >= new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
          default:
            return true;
        }
      }
    },
  }
  </script>
  
  <style scoped>
  .d-flex img {
    height: 48px !important;
  }
  
  .d-flex h1 {
    color: teal;
    font-size: 32px;
    font-family: "Righteous", sans-serif !important;
  }
  
  .notify:not(:last-child) {
    border-bottom: 1px dotted #ccc !important;
  }
  
  .dashboard {
    gap: 12px !important;
    flex-wrap: wrap;
    border-radius: 10px;
  }
  
  @media only screen and (max-width: 480px) {
    .dashboard {}
  
    .dashboard>div {
      flex: 40% !important;
    }
  }
  
  .staging {
    color: green;
  }
  
  .pending {
    color: orange;
  }
  </style>
  
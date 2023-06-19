<template>
  <div class="container mt-5 card">
    <div class="card-header pb-0">
      <h6>Programmes List</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xsm font-weight-bolder opacity-7">Active Programmes</th>
              <th
                class="text-uppercase text-secondary text-xsm font-weight-bolder opacity-7 ps-2"
              >Lead Program</th>
              <th
                class="text-uppercase text-secondary text-xsm font-weight-bolder opacity-7 ps-2"
              >Support</th>
              <th
                class="text-center text-uppercase text-secondary text-xsm font-weight-bolder opacity-7"
              >Status</th>
              <th
                class="text-center text-uppercase text-secondary text-xsm font-weight-bolder opacity-7"
              >Started</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="programme in programmes" :key="programme.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      src=""
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <!-- <h6 class="mb-0 text-sm">John Michael</h6> -->
                    <p class="text-sm text-secondary mb-0">{{ programme.title }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">Lead</p>
                <p class="text-sm text-secondary mb-0">{{ programme.lead_program_officer }}</p>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">Support</p>
                <p class="text-sm text-secondary mb-0">{{ programme.support_department }}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{ programme.status }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm font-weight-bold">{{ programme.created_at }}</span>
              </td>
              <td class="align-middle">
                <router-link
                  :to="`/programme/${programme.id}`"
                  class="text-secondary font-weight-bold text-sm"
                  data-toggle="tooltip"
                >View</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Programmes",
  inject: ['$http'],
    props: ['auth'],
    // components: { Alerts },
    data() {
        return {
            programmes: [],
            loading: false,

        }
    },
    mounted() {
        this.getProgrammes();
    },
    methods: {
        getProgrammes() {
            // this.setLoading()
            // this.clear()
            this.$http.get('api/programmes').then(response => {
                this.programmes = response.data.programmes
                console.log(this.programmes)

            }).catch(error => {
                this.showError(error)
            }).then(() => {
                this.wait = false
            })
        }
    },
};
</script>

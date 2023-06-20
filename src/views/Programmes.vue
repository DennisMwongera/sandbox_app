<template>
  <div class="container mt-5 card">
    <div class="card-header pb-0">
      <h6>Programmes List</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="row table-responsive p-0">
        <div class="col-md-6 mb-3">
          <label for="filterInput" class="form-label">Filter by Title:</label>
          <input
            id="filterInput"
            v-model="filter"
            type="text"
            class="form-control"
            placeholder="Enter program title"
          />
        </div>
        <div class="col-md-6 mb-3">
          <label for="departmentFilterSelect" class="form-label">Filter by Department:</label>
          <select
            id="departmentFilterSelect"
            v-model="departmentFilter"
            class="form-select"
            placeholder="Select department"
          >
            <option value="">All Departments</option>
            <option v-for="department in uniqueDepartments" :key="department">{{ department }}</option>
          </select>
        </div>
        <table class="table align-items-center mb-0">
          <thead>
            <!-- Table headers -->
            <tr>
              <th class="text-uppercase text-secondary text-xsm font-weight-bolder opacity-7">Active Programmes</th>
              <th class="text-uppercase text-secondary text-xsm font-weight-bolder opacity-7 ps-2">Lead Program</th>
              <th class="text-uppercase text-secondary text-xsm font-weight-bolder opacity-7 ps-2">Support</th>
              <th class="text-center text-uppercase text-secondary text-xsm font-weight-bolder opacity-7">Status</th>
              <th class="text-center text-uppercase text-secondary text-xsm font-weight-bolder opacity-7">Started</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <!-- Table rows -->
            <tr v-for="programme in filteredProgrammes" :key="programme.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img src="" class="avatar avatar-sm me-3" alt="user1" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="text-sm text-dark mb-0">{{ programme.title }}</p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm text-dark mb-0">{{ programme.lead_program_officer }}</p>
              </td>
              <td>
                <p class="text-sm text-dark mb-0">{{ programme.support_department }}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{ programme.status }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-dark text-sm font-weight-bold">{{ programme.created_at }}</span>
              </td>
              <td class="align-middle">
                <router-link
                  :to="`/programme/${programme.id}`"
                  class="text-primary font-weight-bold text-sm"
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
  inject: ["$http"],
  props: ["auth"],
  data() {
    return {
      programmes: [],
      titleFilter: "", 
      departmentFilter: "",
    };
  },
  mounted() {
    this.getProgrammes();
  },
  computed: {
    filteredProgrammes() {
      const filteredTitle = this.titleFilter.toLowerCase();
      const filteredDepartment = this.departmentFilter.toLowerCase();

      return this.programmes.filter((programme) => {
        const titleMatch = programme.title.toLowerCase().includes(filteredTitle);
        const departmentMatch = !filteredDepartment || programme.support_department.toLowerCase() === filteredDepartment;
        return titleMatch && departmentMatch;
      });
    },
    uniqueDepartments() {
      return [...new Set(this.programmes.map((programme) => programme.support_department))];
    },
  },
  methods: {
    getProgrammes() {
      this.$http
        .get("api/programmes")
        .then((response) => {
          this.programmes = response.data.programmes;
          console.log(this.programmes);
        })
        .catch((error) => {
          this.showError(error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

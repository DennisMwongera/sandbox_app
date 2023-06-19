<template>
    <div class="container p-5">
        <div v-if="loading" class="p-4 bg-white mb-3 shadow">
            <h4 class="font-weight-bold">View Program</h4>
            <b class="text-success"><img src="">Loading details, Please wait...</b>
        </div>

        <div class="row" v-else>
            <div class="col-md-7">
                <div class="p-3 card bg-white shadow-sm mb-2 rounded-lg">
                    <!-- <alerts :_success="success" :_error="error"></alerts> -->
                    <h3 class="font-weight-bold">{{ programme.title}}</h3>

                    <table class="table table-borderless striped table-sm p-2">
                        <tr class="font-normal p-2">
                            <th style="width: 60%" class="font-normal p-2">Programme Title</th>
                            <td>{{ programme.title }}</td>
                        </tr>
                        <tr class="font-normal p-2">
                            <th class="font-normal p-2">Lead Program </th>
                            <td>{{ programme.lead_program_officer }}</td>
                        </tr>
                        <tr class="font-normal p-2">
                            <th class="font-normal p-2">Department</th>
                            <td>{{ programme.support_department }}</td>
                        </tr>
                        <tr class="font-normal p-2">
                            <th class="font-normal p-2">Status</th>
                            <td>{{ programme.status}}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="col-md-5">
                <!-- About App -->
                <div class="p-3 card bg-white shadow-sm rounded-lg mb-3">
                    <h5 class="font-weight-bold text-success">About Programme</h5>
                    <div class="p-2">
                        <p class="text-muted">Meta Data</p>
                        <p>Url: {{ }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Alerts from "@/components/Alerts";

export default {
    name: "Programme",
    inject: ['$http'],
    // components: { Alerts },
    data() {
        return {
            programme: {},
            loading: false
        }
    },
    mounted() {
        this.getProgramme()
    },
    methods: {
        getProgramme() {
            // this.setLoading();
            // this.clear();
            const id = this.$route.params.id; // Access the id parameter from the URL
            this.$http.put(`api/programme/${id}`).then(response => {
                this.programme = response.data;
            }).catch(error => {
                this.showError(error);
            }).then(() => {
                this.wait = false;
            });
        }
    }
}
</script>

<style scoped></style>
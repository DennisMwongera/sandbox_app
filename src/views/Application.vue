<template>
    <div class="container p-5">
        <div v-if="loading" class="p-4 bg-white mb-3 shadow">
            <h4 class="font-weight-bold">View Application</h4>
            <b class="text-success"><img src="">Loading details, Please wait...</b>
        </div>

        <div class="row" v-else>
            <div class="col-md-7">
                <div class="p-3 card bg-white shadow-sm mb-2 rounded-lg">
                    <!-- <alerts :_success="success" :_error="error"></alerts> -->
                    <h3 class="font-weight-bold">{{ application.title}}</h3>

                    <table class="table table-borderless striped table-sm p-2">
                        <tr class="font-normal p-2">
                            <th style="width: 60%" class="font-normal p-2">Application Title</th>
                            <td>{{ application.title }}</td>
                        </tr>
                        <tr class="font-normal p-2">
                            <th class="font-normal p-2">Application Description </th>
                            <td>{{ application.description }}</td>
                        </tr>
                        <tr class="font-normal p-2">
                            <th class="font-normal p-2">Status</th>
                            <td>{{ application.development_status }}</td>
                        </tr>
                        <tr class="font-normal p-2">
                            <th class="font-normal p-2">Lead Developer</th>
                            <td>{{ application.developer }}</td>
                        </tr>
                        <!-- <tr>
                            <th>Status</th>
                            <td><span :class="`status ${loan.status}`">{{ loan.status }}</span></td>
                        </tr> -->
                        <tr>
                            <th class="font-normal p-2">Created Date</th>
                            <!-- <td>{{ day(application.created_at).format('MMM, DD YYYY')  }}</td> -->
                        </tr>
                        <tr>
                            <th class="font-normal p-2">Deployment Date</th>
                            <!-- <td>{{ day(application.deployment).format('MMM, DD YYYY')  }}</td> -->
                        </tr>
                    </table>

                    <br>
                    <!--Maintenance-->
                    <div class="p-3 card bg-white border rounded mb-3">
                        <h5 class="font-weight-bold text-info">Maintenance</h5>
                        <div class="p-2">
                            <p class="text-muted">Software Update</p>
                            <p>Last Update By</p>: <br>
                            <p>Scheduled Update Date:</p> {{ }}
                        </div>
                        <div class="p-2">
                            {{ application.title }} is {{ }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5">
                <!-- About App -->
                <div class="p-3 card bg-white shadow-sm rounded-lg mb-3">
                    <h5 class="font-weight-bold text-success">About App</h5>
                    <div class="p-2">
                        <p class="text-muted">Meta Data</p>
                        <p>Url:</p> {{ }}<br>
                        <p>Current Version:</p>{{ }} <br>
                        <p>Previous Version:</p> {{ }}<br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Alerts from "@/components/Alerts";

export default {
    name: "Application",
    inject: ['$http'],
    // components: { Alerts },
    data() {
        return {
            application: {},
            loading: false
        }
    },
    mounted() {
        this.getApplication()
    },
    methods: {
        getApplication() {
            // this.setLoading();
            // this.clear();
            const id = this.$route.params.id; // Access the id parameter from the URL
            this.$http.get(`api/edit/${id}`).then(response => {
                this.application = response.data;
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
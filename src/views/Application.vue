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
                    <h3 class="font-weight-bold">{{ application.title }}</h3>

                    <table class="table table-bordered table-striped table-sm mt-4">
                        <tbody>
                            <tr>
                                <th class="font-normal" style="width: 30%;">Application Title</th>
                                <td class="font-weight-bold">{{ application.title }}</td>
                            </tr>
                            <tr>
                                <th class="font-normal">Application Description</th>
                                <td>{{ application.description }}</td>
                            </tr>
                            <tr>
                                <th class="font-normal">Status</th>
                                <td :class="getStatusTextColorClass(application.development_status)">
                                    {{ application.development_status }}
                                </td>
                            </tr>
                            <tr>
                                <th class="font-normal">Lead Developer</th>
                                <td>{{ application.developer }}</td>
                            </tr>
                            <!-- <tr>
      <th>Status</th>
      <td><span :class="`status ${loan.status}`">{{ loan.status }}</span></td>
    </tr> -->
                            <tr>
                                <th class="font-normal">Created Date</th>
                                <!-- <td>{{ day(application.created_at).format('MMM, DD YYYY') }}</td> -->
                            </tr>
                            <tr>
                                <th class="font-normal">Deployment Date</th>
                                <!-- <td>{{ day(application.deployment).format('MMM, DD YYYY') }}</td> -->
                            </tr>
                        </tbody>
                    </table>


                    <br>
                    <!--Maintenance-->
                    <div class="p-3 card bg-white border rounded mb-3">
                        <h5 class="font-weight-bold text-info">Maintenance</h5>
                        <div class="p-2">
                            <p class="text-muted">Software Update</p>
                            <p>Last Update By:</p><br>
                            <p>Scheduled Update Date:</p> {{ }}
                        </div>
                        <div class="p-2">
                            {{ application.title }} is {{ }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5">
                <!-- Image Card -->
                <div class="p-3 card bg-white shadow-sm rounded-lg mb-3">
                    <h5 class="font-weight-bold text-success">App Image</h5>
                    <div class="p-2">
                        <slot name="app-image" :app="application">
                            <img :src="getImageSrc(application.title)" class="img-fluid rounded-start" alt="...">
                        </slot>
                    </div>
                </div>

                <!-- About App -->
                <div class="p-3 card bg-white shadow-sm rounded-lg mb-3">
                    <h5 class="font-weight-bold text-success">About App</h5>
                    <div class="p-2">
                        <p class="text-muted">Meta Data</p>
                        <p>Url:</p> {{ application.url }}<br>
                        <p>Current Version:</p>{{ application.current_version }} <br>
                        <p>Previous Version:</p> {{ application.previous_version }}<br>
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
        },
        getStatusTextColorClass(status) {
            return {
                'text-primary': status === 'In Progress',
                'text-success': status === 'Completed',
                'text-danger': status === 'Failed'
            };
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
                    return require('@/assets/img/dash/folder.png'); // Return a default image source or handle the case when no matching ID is found
            }
        }
    }
}
</script>
  
<style scoped></style>
  
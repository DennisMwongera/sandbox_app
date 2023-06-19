<template>
    <div class="container mt-5 p-5">
        <!-- <alerts :_success="success" :_error="error"></alerts> -->
        <div v-if="loading" class="d-flex mb-3">
            <div class="flex-fill shadow-sm rounded mr-2 p-2 text-center bg-white">
                <h1 class="font-weight-bold mt-0"><img src=""></h1>
            </div>
        </div>

        <div v-else class="d-flex flex-wrap mb-3 dashboard">
            <div v-for="app in applications" :key="app.id" class="card flex-fill bg-white shadow-sm rounded-lg dash p-3">
                <div class="d-flex">
                    <div class="rounded-circle p-2 mr-2">
                        <img src="../assets/img/dash/folder.png">
                    </div>
                    <router-link :to="`/application/${app.id}`" class="text-dark">
                        <h4 class="font-weight-medium">{{ app.title }}</h4>
                        <small class="font-weight-bold text-muted"
                            :class="app.development_status === 'production' ? 'green-400' : 'orange-400'">
                            {{ app.development_status }}
                        </small>

                    </router-link>
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
            loading: false,

        }
    },
    mounted() {
        console.log('geeeeeeeeeeeeeeee')
        // this.loadStats()
        this.getApplications();
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
        // loadStats() {
        //     this.$http.get('').then(response => {
        //         this.stats = response.data.data
        //     }).catch(error => {
        //         this.showError(error)
        //     })
        // }
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
</style>

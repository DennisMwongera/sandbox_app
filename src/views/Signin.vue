<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <!-- <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        /> -->
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <header class="py-1">
                <div class="container">
                  <div class="d-flex align-items-center mt-1">
                    <div class="font-weight-bold py-1">
                      <router-link to="/" class="text-dark"><b class="h4 font-weight-bold font">OI
                          Sandbox</b></router-link>
                    </div>
                  </div>
                </div>
              </header>
              <div class="bg-white p-3 rounded-lg shadow-sm mb-4">

                <!-- <Alerts :_success="success" :_error="error"></Alerts> -->

                <form v-if="showForm" @submit.prevent="login()">
                  <div class="form-group mb-3">
                    <label class="font-weight-bold">E-Mail Address</label>
                    <input id="email" type="email" class="form-control" name="email" required autocomplete="email"
                      ref="email" v-model="auth.email" autofocus placeholder="E-Mail Address" :disabled="wait">
                  </div>

                  <div class="form-group mb-3">
                    <label class="font-weight-bold">Password</label>
                    <input id="password" type="password" class="form-control" name="password" required
                      v-model="auth.password" autocomplete="current-password" placeholder="Your Password"
                      :disabled="wait">
                  </div>

                  <div class="form-group mb-3">
                    <!-- <vue-recaptcha
            ref="recaptcha"
            @verify="onVerified"
            @expired="onExpired"
            :sitekey="sitekey">
        </vue-recaptcha> -->
                  </div>

                  <div class="form-group mb-3">
                    <button type="submit" class="btn btn-dark btn-block" :disabled="wait">
                      <template v-if="wait">Please wait...</template>
                      <template v-else>Login</template>
                    </button>
                  </div>

                  <div class="form-group mb-3">
                    <router-link to="/recover">Forgot Password?</router-link>
                  </div>

                </form>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
          background-size: cover;">
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4 class="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
                <p class="text-white position-relative">The more effortless the writing looks, the more effort the writer
                  actually put into the process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<!-- <script>
// import Navbar from "@/examples/PageLayout/Navbar.vue";
// import ArgonInput from "@/components/ArgonInput.vue";
// import ArgonSwitch from "@/components/ArgonSwitch.vue";
// import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {

  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script> -->

<script>
// import { VueRecaptcha } from 'vue-recaptcha';
// import Alerts from "./Alerts";

export default {
    name: "Login",
    inject: ['$http'],
    // components: {Alerts},
    data() {
        return {
            showForm: true,
            auth: {
                email: '',
                password: '',
                // recaptcha_token: ''
            },
            sitekey: process.env.VUE_APP_SITE_KEY
        }
    },
    mounted() {
        this.$refs.email.focus();
    },
    created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    // body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    // body.classList.add("bg-gray-100");
  },
    methods: {
        // onExpired: function () {
        //     this.resetRecaptcha()
        // },
        // onVerified: function (token) {
        //     this.auth.recaptcha_token = token
        // },
        // resetRecaptcha() {
        //     this.$refs.recaptcha.reset();
        //     this.auth.recaptcha_token = ''
        // },
        login() {
            this.wait = true
            // this.clear()
            this.success = "Connecting to auth server. Please wait..."

            this.$http.post('api/login', this.auth).then(response => {
                let user = response.data.user
                this.showForm = false
                this.success = `Welcome Redirecting you to your dashboard...`

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(user))

                setTimeout(() => (window.location.href = '/dashboard'), 500)

            }).catch(error => {
                this.showError(error)
                // this.resetRecaptcha()
            }).then(() => {
                this.wait = false
            })
        }
    }
}
</script>


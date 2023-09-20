<template>
  <div
      class="page-header align-items-start min-vh-100"
      style="
      background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    "
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-info shadow-success border-radius-lg py-3 pe-1">
                <h4 class="text-white font-weight-bolder text-center my-2">
                  Авторизация
                </h4>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3" @submit.prevent="login">
                <div class="mb-3">
                  <material-input
                      id="username"
                      type="text"
                      label="Логин"
                      name="username"
                      v-model="username"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                      id="password"
                      type="password"
                      label="Пароль"
                      name="password"
                      v-model="password"
                  />
                </div>

                <div class="text-center">
                  <material-button
                      class="my-4 mb-2"
                      variant="gradient"
                      color="info"
                      type="submit"
                      fullWidth
                  >Авторизоваться
                  </material-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}, made by
              <a
                  href="https://pocketkey.ru"
                  class="font-weight-bold text-white"
                  target="_blank"
              >Pocketkey</a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <ul
                class="nav nav-footer justify-content-center justify-content-lg-end"
            >
              <!--              <li class="nav-item">-->
              <!--                <a-->
              <!--                    href=""-->
              <!--                    class="nav-link text-white"-->
              <!--                    target="_blank"-->
              <!--                ></a-->
              <!--                >-->
              <!--              </li>-->
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import {mapMutations} from "vuex";

export default {
  name: "auth",
  components: {
    MaterialInput,
    MaterialButton,
  },

  data() {
    return {
      username: "",  // Убедитесь, что у вас есть эти строки
      password: "",
    };
  },

  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    login() {
      let username = this.username
      let password = this.password

      this.$store.dispatch('login', {username, password});
    }
  },
};
</script>

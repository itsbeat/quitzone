<template>
  <div class="wrapper" id="login" v-on:submit.prevent>
    <body class="body-bg pd-12 md:pt-10 pb-6 px-2 md:px-0">
      <header class="max-b-lg mx-auto text-center">
        <a href="#">
          <h1 class="text-4xl font-bold text-black-dark">Login</h1>
        </a>
      </header>

      <main
        class="bg-blue-light max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"
      >
        <section class="text-center">
          <h3 class="font-bold text-2xl mb-3 text-black-dark">Benvenuto al login!</h3>
          <p class="text-gray-400 pt-2 font-medium text-black-dark">Effettua l'accesso.</p>
          <p class="text-black-dark font-medium">
            Oppure
            <a
              href="#"
              class="text-blue-dark font-medium  hover:underline"
              >Registrati</a
            >
          </p>
        </section>

        <section class="mt-10">
          <form @submit.prevent="login()">
            <div class="flex flex-col mx-auto">
              <div class="mb-6 pt-3 rounded bg-white">
                <label
                  class="block text-gray-500 text-sm font-bold mb-2 ml-3"
                  for="email"
                  >Email</label
                >
                <input
                  type="text"
                  id="email"
                  class="rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                  v-model="email"
                  @focus="resetError()"
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-white">
                <label
                  class="block text-gray-500 text-sm font-bold mb-2 ml-3"
                  for="password"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  class="rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                  v-model="password"
                  @focus="resetError()"
                />
              </div>
            </div>
            <div class="text-center max-w-lg mx-auto text-red-600 text-sm">
              {{ error }}
            </div>
            <div class="flex justify-center pt-5">
              <button
                :disabled="btnDisabled"
                @click="login()"
                class="focus:outline-none text-white font-bold py-2 px-4 mr-1 mb-1 rounded shadow-lg hover:shadow-xl transition duration-200 flex items-center"
                :class="{
                   'bg-gray-300 cursor-not-allowed': btnDisabled,
                   'bg-blue-dark hover:bg-blue-700': !btnDisabled,
                }" 
              >
              <spinner :size="30" class="mr-2" v-if="isLoading"/>
               {{ textButton }}
              </button>
            </div>
            <div class="text-center max-w-lg mx-auto pt-10">
              <a
                href="#"
                class="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
                >Hai dimenticato la password?</a
              >
            </div>
          </form>
        </section>
      </main>
    </body>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      error: null,
      isLoading: false,
    };
  },
  mounted() {},
  methods: {
    async login() {
      this.error = null;
      this.isLoading = true;
      try {
        await this.$api.post("/login", {
          email: this.email,
          password: this.password
        });
        this.$router.push("/");
      } catch (error) {
        this.error = "Email o password errate. Riprova.";
      }
      this.isLoading = false;
    },
    resetError() {
      this.error = null;
    }
  },
  computed: {
    textButton() {
      return this.isLoading ? "Caricamento..." : "Login";
    },
    btnDisabled() {
      return this.isLoading || this.credentialsEmpty;
    },
    credentialsEmpty() {
      return !this.email || !this.password;
    }
  }
};
</script>

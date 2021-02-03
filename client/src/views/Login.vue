<template>
  <div class="body-bg h-screen flex items-center justify-center" id="login" v-on:submit.prevent>

      <main
        class="bg-blue-light max-w-lg w-full mx-auto p-8 md:p-12 rounded-lg shadow-2xl"
      >
        <section class="text-center">
          <h3 class="text-4xl font-bold text-black-dark mb-8">Login</h3>
          <p class="text-gray-light pt-2 font-medium">Effettua l'accesso.</p>
          <p class="text-gray-light font-medium">
            Oppure
            <a
              href="#"
              class="text-blue-dark font-medium hover:underline"
              >Registrati</a
            >
          </p>
        </section>

        <section class="mt-10">
          <form @submit.prevent="login()">
            <div class="flex flex-col mx-auto">
              <div class="mb-6 pt-3 rounded bg-white">
                <label
                  class="block text-gray-light text-sm font-bold mb-2 ml-3"
                  for="email"
                  >Email</label
                >
                <input
                  type="text"
                  id="email"
                  class="rounded w-full text-gray-700 focus:outline-none border-b-4 focus:border-blue-dark transition duration-500 px-2 pb-3 pt-2"
                  :class="{
                   'border-gray-light': !email,
                   'border-blue-dark': !!email,
                  }" 
                  v-model="email"
                  @focus="resetError()"
                />
              </div>
              <div class="mb-6 pt-3 rounded bg-white">
                <label
                  class="block text-gray-light text-sm font-bold mb-2 ml-3"
                  for="password"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  class="rounded w-full text-gray-700 focus:outline-none border-b-4 focus:border-blue-dark transition duration-500 px-2 pb-3 pt-2"
                  :class="{
                   'border-gray-light': !password,
                   'border-blue-dark': !!password,
                  }" 
                  v-model="password"
                  @focus="resetError()"
                />
              </div>
            </div>
            <div class="text-center max-w-lg mx-auto text-red-normal text-sm font-bold">
              {{ error }}
            </div>
            <div class="flex justify-center pt-5">
              <button
                :disabled="btnDisabled"
                @click="login()"
                class="focus:outline-none text-white-normal font-bold py-2 px-4 mr-1 mb-1 rounded shadow-lg hover:shadow-xl transition duration-200 flex items-center"
                :class="{
                   'bg-gray-light cursor-not-allowed': btnDisabled,
                   'bg-blue-dark hover:bg-blue-700 text-white-normal': !btnDisabled,
                }" 
              >
              <spinner :size="30" class="mr-2" v-if="isLoading"/>
               {{ textButton }}
              </button>
            </div>
            <div class="text-center max-w-lg mx-auto pt-10">
              <a
                href="#"
                class="text-sm text-blue-dark hover:text-blue-700 hover:underline mb-6"
                >Hai dimenticato la password?</a
              >
            </div>
          </form>
        </section>
      </main>
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

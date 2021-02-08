<template>
    <div>
        <pre>{{ user }}</pre>
        <div class="wrapper">
          <div v-for="field in fields" :key="field.name">
                <div class="grid grid-cols-3 col-gap-5 mb-4">
                  <label class="font-bold" :for="field.name">{{ field.label }}</label>
                  <input
                    v-model="editUserTemplate[field.name]"
                    class="col-span-2 border border-gray-400 rounded p-3"
                    :id="field.name"
                    :type="field.type"
                    :name="field.name"
                  />
                </div>
          </div>
          <div class="flex items-center">
            <!-- <span class="text-red-700 font-bold" v-if="error">
              {{ error }}
            </span>
            <span class="text-green-700 font-bold" v-if="success">
              Utente creato con successo
            </span> -->
            <button
              @click="editUser()"
              class="rounded my-3 ml-auto px-3 p-2 bg-green-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Invia
            </button>
          </div>
          <button
                  class="p-3 mt-4 mr-3 bg-white text-indigo-600 border border-indigo-600 text-lg rounded-full shadow focus:outline-none"
                  @click="changeView('detail')"
                  
                >
                  ANNULLA
                </button>
      </div>
    </div>

    
</template>
<script>

export default {
  name: "profile_edit",
  data() {
    return {
      userId: null,
      user: null,
      editUserTemplate: {
        name: null,
        email: null
      },
      fields: [
        {
          label: "Nome",
          name: "name",
          type: "text"
        },
        {
          label: "Email",
          name: "email",
          type: "email"
        }
      ],
    };
  },
  methods: {
    async editUser() {
        let response = await this.$api.put('/users/' + this.userId, this.editUserTemplate);
        console.log(response);
        this.$router.push("/");
        
    },
    async changeView(destination) {
      this.currentView = destination;
    }
  },
  async mounted() {
    this.userId = this.$route.params.id;
    let response = await this.$api.get(`/users/${this.userId}`);
    this.user = response.data; 
    this.editUserTemplate.name = this.user.name;
    this.editUserTemplate.email = this.user.email;
  }
};
</script>

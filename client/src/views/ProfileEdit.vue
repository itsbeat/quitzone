<template>
    <div>
        <pre>{{ user }}</pre>
        
              <div class="grid grid-cols-3 col-gap-5 mb-4">
                <label class="font-bold">
                  Nome
                </label>
                <div class="col-span-2 border border-gray-400 rounded p-3">
                    {{user.name}}
                </div>
                <label class="font-bold">
                  Email
                </label>
                <div class="col-span-2 border border-gray-400 rounded p-3">
                    {{user.email}}
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
            @click="del()"
            class="rounded my-3 ml-auto px-3 p-2 bg-green-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Annulla
          </button>
        </div>
     </div>
   
</template>
<script>

export default {
  name: "Profile",
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
    async del() {
        this.$router.push("/profile");
    }
  },
  async mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
};
</script>

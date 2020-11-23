<template>
  <div class="px-5">
    <pre>
      {{ newUserTemplate }}
    </pre>
    <div v-for="field in fields" :key="field.name">
      <div class="grid grid-cols-3 col-gap-5 mb-4">
        <label class="font-bold" :for="field.name">{{ field.label }}</label>
        <input
          v-model="newUserTemplate[field.name]"
          class="col-span-2 border border-gray-400 rounded p-3"
          :id="field.name"
          :type="field.type"
          :name="field.name"
        />
      </div>
    </div>
    <div class="flex items-center">
      <span class="text-red-700 font-bold" v-if="error">
        {{ error }}
      </span>
      <span class="text-green-700 font-bold" v-if="success">
        Utente creato con successo
      </span>
      <button
        @click="createUser()"
        :disabled="!userIsValid"
        class="rounded my-3 ml-auto px-3 p-2 bg-green-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Invia
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ItsCreate",
  data() {
    return {
      newUserTemplate: {
        name: null,
        surname: null,
        email: null
      },
      fields: [
        {
          label: "Nome",
          name: "name",
          type: "text"
        },
        {
          label: "Cognome",
          name: "surname",
          type: "text"
        },
        {
          label: "Email",
          name: "email",
          type: "email"
        }
      ],
      success: null,
      error: null
    };
  },
  methods: {
    async createUser() {
      this.error = null;
      this.success = null;

      try {
        let response = await axios.post(
          "http://localhost:8000/api/users",
          this.newUserTemplate
        );

        console.log(response);
        this.$router.push({
          name: "its_list"
        });

        this.success = true;
      } catch (e) {
        console.log(e.response);
        switch (e.response.status) {
          case 404:
            this.error = "Non trovo l'endpoint";
            break;
          case 422:
            this.error = "Errore di validazione";
            break;
          case 500:
            this.error = e.response.data.message;
            break;
        }

        this.error += ", cazzo.";
      }
    }
  },
  computed: {
    userIsValid() {
      return (
        !!this.newUserTemplate.name &&
        !!this.newUserTemplate.surname &&
        !!this.newUserTemplate.email
      );
    }
  }
};
</script>

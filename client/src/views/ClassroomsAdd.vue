<template>
  <div class="px-5">
    <button @click="back()">Indietro</button>
    <div class="grid grid-cols-3 col-gap-5 mb-4">
      <label class="font-bold">Nome classe</label>
      <input
        v-model="classroom_name"
        type="text"
        class="col-span-2 border border-gray-400 rounded p-3"
      />
    </div>
    <div class="flex items-center">
      <span class="text-red-700 font-bold" v-if="error">
        {{ error }}
      </span>
      <span class="text-green-700 font-bold" v-if="success">
        Classe creata con successo
      </span>
      <button
        @click="createClassroom()"
        :disabled="!classroomIsValid"
        class="rounded my-3 ml-auto px-3 p-2 bg-indigo-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Invia
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ClassroomsAdd",
  data() {
    return {
      success: null,
      error: null,
      classroom_name: null,
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "classrooms_list",
      });
    },
    async createClassroom() {
      this.error = null;
      this.success = null;

      try {
        let response = await this.$api.post("/classrooms/add", {
          name: this.classroom_name,
        });
        console.log(response);
        this.$router.push({
          name: "classrooms_list",
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
    },
  },
  computed: {
    classroomIsValid() {
      return !!this.classroom_name;
    },
  },
};
</script>

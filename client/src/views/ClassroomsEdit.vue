<template>
  <div class="px-5">
    <button @click="back()">Indietro</button>
    <div class="grid grid-cols-3 col-gap-5 mb-4">
      <label class="font-bold">Nome classe</label>
      <input
        v-model="classroom.name"
        type="text"
        class="col-span-2 border border-gray-400 rounded p-3"
      />
    </div>
    <div class="flex items-center">
      <span class="text-red-700 font-bold" v-if="error">
        {{ error }}
      </span>
      <span class="text-green-700 font-bold" v-if="success">
        Classe modificata con successo
      </span>
      <button
        @click="editClassroom()"
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
  name: "ClassroomEdit",
  data() {
    return {
      success: null,
      error: null,
      classroom: {
        id: null,
        name: null,
      },
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "classrooms_list",
      });
    },

    async editClassroom() {
      try {
        let response = await this.$api.put("/classrooms/edit", this.classroom);
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
  async mounted() {
    this.classroom.id = this.$route.params.id;
    let response = await this.$api.get(
      `/classrooms/change/${this.classroom.id}`
    );
    console.log(response.data);
    this.classroom.name = response.data.name;
    console.log(this.$route.params);
  },
  computed: {
    classroomIsValid() {
      return !!this.classroom.name;
    },
  },
};
</script>

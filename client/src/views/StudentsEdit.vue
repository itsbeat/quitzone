<template>
  <div class="px-5">
    <button @click="back()">Indietro</button>
    <div class="grid grid-cols-3 col-gap-5 mb-4">
      <label class="font-bold">Nome</label>
      <input
        v-model="student.name"
        type="text"
        class="col-span-2 border border-gray-400 rounded p-3"
      />
      <label class="font-bold">Cognome</label>
      <input
        v-model="student.surname"
        type="text"
        class="col-span-2 border border-gray-400 rounded p-3"
      />
      <label class="font-bold">CF</label>
      <input
        v-model="student.cf"
        type="text"
        class="col-span-2 border border-gray-400 rounded p-3"
      />
    </div>
    <div class="flex items-center">
      <span class="text-red-700 font-bold" v-if="error">
        {{ error }}
      </span>
      <span class="text-green-700 font-bold" v-if="success">
        Studente modificata con successo
      </span>
      <button
        @click="editStudent()"
        :disabled="!studentIsValid"
        class="rounded my-3 ml-auto px-3 p-2 bg-indigo-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Invia
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "studentEdit",
  data() {
    return {
      success: null,
      error: null,
      student: {
        id: null,
        name: null,
        surname: null,
        cf: null,
        classroom_id: null,
      },
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "classrooms_view",
      });
    },

    async editStudent() {
      try {
        let response = await this.$api.put("/students/edit", this.student);
        this.$router.push({
          name: "classrooms_view",
          params: {
            id: this.student.classroom_id,
          },
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
    this.student.id = this.$route.params.id;
    let response = await this.$api.get(`/students/change/${this.student.id}`);
    this.student = response.data;
    console.log(this.student.classroom_id);
  },
  computed: {
    studentIsValid() {
      return !!this.student.name, !!this.student.surname, !!this.student.cf;
    },
  },
};
</script>

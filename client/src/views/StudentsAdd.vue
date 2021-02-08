<template>
  <div class="px-5">
    <div class="flex justify-start">
      <button 
        @click="back()"
        class="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-200 hover:text-indigo-700 md:py-2 md:text-lg md:px-4 mt-5"
      >
        Indietro
      </button>
    </div>
    <div v-for="field in fields" :key="field.name">
      <div class="grid grid-cols-3 col-gap-5 mb-4">
        <label class="font-bold" :for="field.name">{{ field.label }}</label>
        <input
          v-model="newStudentTemplate[field.name]"
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
        Studente creato con successo
      </span>
      <button
        @click="createStudent()"
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
  name: "StudentsAdd",
  data() {
    return {
      success: null,
      error: null,
      classroomId: null,
      newStudentTemplate: {
        name: null,
        surname: null,
        cf: null,
        classroom_id: this.$route.params.id,
      },
      fields: [
        {
          label: "Nome",
          name: "name",
          type: "text",
        },
        {
          label: "Cognome",
          name: "surname",
          type: "text",
        },
        {
          label: "Codice Fiscale",
          name: "cf",
          type: "text",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "classrooms_view",
      });
    },
    async createStudent() {
      this.error = null;
      this.success = null;

      try {
        let response = await this.$api.post(
          "/students/add",
          this.newStudentTemplate
        );
        console.log(response);
        this.$router.push({
          name: "classrooms_view",
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
  mounted() {},
  computed: {
    studentIsValid() {
      return (
        !!this.newStudentTemplate.name &&
        !!this.newStudentTemplate.surname &&
        !!this.newStudentTemplate.cf
      );
    },
  },
};
</script>


<template>
  <div>
    <div class="mx-80 flex flex-col justify-center">
    <div class="flex justify-start">
      <button 
        @click="back()"
        class="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-200 hover:text-indigo-700 md:py-2 md:text-lg md:px-4 mt-5"
      >
        Indietro
      </button>
    </div>
      <div class="flex justify-between items-center">
        <h1 class="py-20 uppercase font-bold">LE MIE CLASSI > {{ classroomName }}</h1>
        <button
          @click="addStudent()"
          class="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-200 hover:text-indigo-700 md:py-2 md:text-lg md:px-4"
        >
          ADD
        </button>
      </div>
      <table class="text-left">
        <tr>
          <th
            :class="header.custom_css"
            class="bg-blue-100 p-5 border-b-2 border-t-2 font-bold uppercase"
            v-for="header in headers"
            :key="header.index"
          >
            {{ header.nome }}
          </th>
        </tr>
        <tr v-for="student in students" :key="student.id">
          <td class="p-5 border-l-2 border-b-2">
            {{ student.name + " " + student.surname }}
          </td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-r-2 border-b-2 text-center">
            <a @click="editStudent(student.id)"
              ><button
                class="inline-flex items-center justify-center px-5 py-3 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-indigo-100"
              >
                ✏️
              </button></a
            >
            <a @click="deleteStudent(student.id)"
              ><button
                class="inline-flex items-center justify-center px-5 py-3 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-indigo-100"
              >
                🗑️
              </button></a
            >
          </td>
        </tr>
      </table>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "ClassroomsView",
  data() {
    return {
      classroomId: null,
      classroomName: null,
      students: [],
      headers: [
        {
          nome: "studente",
          custom_css: "w-1/6 w-1/4 border-l-2 underline",
        },
        {
          nome: "quiz svolti",
          custom_css: "w-1/6 underline",
        },
        {
          nome: "media",
          custom_css: "w-1/6 underline",
        },
        {
          nome: "",
          custom_css: "w-2/3 w-1/4 border-r-2",
        },
      ],
    };
  },
  async mounted() {
    this.classroomId = this.$route.params.id;
    let response = await this.$api.get(`/classrooms/${this.classroomId}`);
    console.log(response.data);
    this.students = response.data.students;
    console.log(this.students);
    this.classroomName = response.data.name;
  },
  methods: {
    back() {
      this.$router.push({
        name: "classrooms_list",
      });
    },
    addStudent() {
      this.$router.push({
        name: "students_add",
        params: {
          id: this.classroomId,
        },
      });
    },
    editStudent(studentId) {
      this.$router.push({
        name: "students_edit",
        params: {
          id: studentId,
        },
      });
    },
    async deleteStudent(studentId) {
      await this.$api.delete(`/students/delete/${studentId}`);
      let response = await this.$api.get(`/classrooms/${this.classroomId}`);
      this.students = response.data.students;
    },
  },
};
</script>

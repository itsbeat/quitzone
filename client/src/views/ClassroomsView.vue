<template>
<div>
  <div class="mx-80 flex flex-col justify-center">
          <router-view></router-view>
    <a href="/classrooms">indietro</a>
     <h1 class="py-20 uppercase font-bold">{{ classroomName }}</h1>

      <table class="text-left">
        <tr>
          <th :class="header.custom_css" class="bg-blue-100 p-5 border-b-2 border-t-2 font-bold uppercase" v-for="header in headers" :key="header.index"> {{header.nome}}</th>
        </tr>
        <tr v-for="student in students" :key="student.id">
          <td class="p-5 border-l-2 border-b-2">{{ student.name + " " + student.surname}} </td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-r-2 border-b-2 text-center">
            <a @click="viewClassroom(classroom.id)"><button class="inline-flex items-center justify-center px-5 py-3 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-blue-100"> 👁️ VIEW </button></a>
          </td>
        </tr>
      </table>
  </div>
</div>
</template>
<script>
import axios from "axios"

export default {
  name: "ClassroomsView",
  data() {
    return {
      classroomId: null,
      classroomName: null,
      students: [],
      headers: [
        {
          "nome": "studente",
          "custom_css":  "w-1/6 w-1/4 border-l-2"
        },
        {
          "nome": "esami svolti",
          "custom_css":  "w-1/6"
        },
        {
          "nome": "quiz svolti",
          "custom_css":  "w-1/6"
        },
        {
          "nome": "quiz azioni",
          "custom_css":  "w-1/6"
        },
        {
          "nome": "",
          "custom_css":  "w-1/3 w-1/4 border-r-2"
        }
      ],
    };
  },
  async mounted() {
    this.classroomId = this.$route.params.id;
    this.classroomName = this.$route.params.name;
    let response = await axios.get(` http://localhost:8000/api/classrooms/${this.classroomId}`);
    this.students = response.data;
  }
};
</script>

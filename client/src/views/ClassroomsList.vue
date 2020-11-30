<template>
  <div>
     <router-view></router-view>
     <div class="mx-80 flex flex-col justify-center">
      <h1 class="py-20 uppercase font-bold">Le mie classi</h1>
      <table class="text-left">
        <tr>
          <th :class="header.custom_css" class="bg-blue-100 p-5 border-b-2 border-t-2 font-bold uppercase" v-for="header in headers" :key="header.index"> {{header.nome}}</th>
        </tr>
        <tr v-for="classroom in classrooms" :key="classroom.id">
          <td class="p-5 border-l-2 border-b-2">{{ classroom.name }}</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-b-2">...</td>
          <td class="p-5 border-r-2 border-b-2 text-center">
            <a @click="viewClassroom(classroom.id, classroom.name)"><button class="inline-flex items-center justify-center px-5 py-3 border-2 text-base font-medium rounded-md text-black bg-white hover:bg-blue-100"> 👁️ VIEW </button></a>
          </td>
        </tr>
      </table>
     </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "ClassroomsList",
  data() {
    return {
      classrooms: [],
      headers: [
        {
          "nome": "classe",
          "custom_css":  "w-1/4 border-l-2"
        },
        {
          "nome": "partecipanti",
          "custom_css":  "w-1/4"
        },
        {
          "nome": "media",
          "custom_css":  "w-1/4"
        },
        {
          "nome": "",
          "custom_css":  "w-1/3 border-r-2"
        }
      ],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:8000/api/classrooms");
    this.classrooms = response.data;
  },
  methods: {
    viewClassroom(classroomId, classroomName) {
      this.$router.push({
        name: "classrooms_view",
        params: {
          id: classroomId,
          name: classroomName
        },
      });
    }
  }
};
</script>

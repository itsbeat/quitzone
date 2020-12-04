<template>
  <div class="box-content h-32 w-500 p-20 border-6">
    <router-view></router-view>
      <div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
               <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"> 
                <table class="min-w-full divide-y divide-gray-200">
                            <tr>
                                <th><router-link to="/students/details_exams">Esami </router-link> </th> 
                                <th>Quiz Svolti</th> 
                            </tr>
                  <tr>
                    <th scope="col" class="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Questionari</th>
                    <th scope="col" class="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N^ Domande</th>
                    <th scope="col" class="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risposte Corrette</th>
                    <th scope="col" class="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risposte Sbagliate</th>
                    <th scope="col" class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Voto Finale</th>
                  </tr>
                        <!-- <tr v-for="user in users" :key="user.id"> -->
                        <!-- <td>{{ user.name }}</td> -->
                        <!-- <a @click="viewUser(user.id)"> Dettaglio </a> -->
                        <!-- <a class="cursor-pointer"  @click="editUser(user.id)"> 🖊️ </a> -->
                  <td> v-for="user in users" :key="user.id" </td>
                  <td class="px-3 py-2 whitespace-nowrap text-left text-sm font-medium"> 30 </td>
                  <td class="px-3 py-2 whitespace-nowrap text-left text-sm font-medium"> 20 </td>
                  <td class="px-3 py-2 whitespace-nowrap text-left text-sm font-medium"> 10 </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">15/100</a>
                  </td>      
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
//import axios from "axios";

export default {
name: "TeachersStudentsDetailsExams",
  data() {
    return {
      users: []
    };
  },
  // async mounted() {
  //   let response = await axios.get("http://localhost:8000/api/users");
  //   this.users = response.data;
  // },
  //methods: {
  //   editUser(userId) {
  //     this.$router.push({
  //       name: "",
  //       params: {
  //         id: userId
  //       },
  //     });
  //   }
  // }
  };
</script>
<style></style>

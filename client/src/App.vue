<template>
  <div id="app">
    <form @submit.prevent="login()">
      <input type="text" v-model = "email">
      <input type="password" v-model = "password">
      <button>Login</button>
    </form>
    
    <button @click="logout()" > Logout</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;

export default {
  name: 'App',
  data(){
    return {
      email: null,
      password:null,
    };
  },
  methods:{
      async login(){
        let response = await axios.post("http://localhost:8000/api/login",{
          email:this.email,
          password:this.password,
        });

        console.log(response.data);
      },

      async logout(){
         let response = await axios.post("http://localhost:8000/api/logout");
         
        console.log(response.data);
      },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

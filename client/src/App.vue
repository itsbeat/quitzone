<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to='/students'>students</router-link> | 
      <router-link to="/login">LOGIN</router-link> |
      <router-link to="/logout">LOGOUT</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logged: false,
    };
  },
  mounted() {

    
  },
  methods: {
    async userIsLogged() {
      return await this.$api.get('/me', localStorage.getItem('user'));
    }
  },
  computed: {}
};
</script>
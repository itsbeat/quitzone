<template>
  <div class="wrapper" id="logout">
    YOU LOGGED OUT :)
  </div>
</template>

<script>
export default {
  name: "Logout",
  data() {
    return { };
  },
  async mounted() {
    
    let user = localStorage.getItem('user');

    if(user){
      console.log('logging out...')
      let response = await this.$api.post('/logout', localStorage.getItem('user'));
      console.log(response);
      localStorage.removeItem('user');
      setTimeout(_=>{
        this.$router.push('/');
      },3000);
    } else {
      this.$router.push('/');
    }
    

  },
  methods: {},
  computed: {}
};
</script>

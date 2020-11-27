<template>
<h1>{{user}}</h1>
</template>
<script>
import axios from "axios";

export default {
  name: "students_edit",
  data() {
    return {
      userId: null,
      user: null
    };
  },
  
  async mounted() {
    this.userId = this.$route.params.id;
    let response = await axios.get(`http://localhost:8000/users/${this.userId}`);
    this.user = response.data;
    
  }
};
</script>

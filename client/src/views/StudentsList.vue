<template>
  <div>
     <router-view></router-view>
    <table>
      <tr>
        <th>Nome</th>
        <th>Azioni</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>
          <!-- <a @click="viewUser(user.id)"> Dettaglio </a> -->
          <a class="cursor-pointer"  @click="editUser(user.id)"> 🖊️ </a>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>

export default {
name: "StudentsList",
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    let response = await this.$api.get('users/list');
    this.users = response.data;
  },
  methods: {
    editUser(userId) {
      this.$router.push({
        name: "students_edit",
        params: {
          id: userId
        },
      });
    }
  }
};
</script>
<style></style>

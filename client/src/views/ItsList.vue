<template>
  <div>
    <table>
      <tr>
        <th>Nome</th>
        <th>Azioni</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>
          <a @click="viewUser(user.id)">Dettaglio</a>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>

export default {
  name: "ItsList",
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    let response = await this.$api.get('/users');
    this.users = response.data;
  },
  methods: {
    viewUser(userId) {
      this.$router.push({
        name: "its_view",
        params: {
          id: userId
        },
        query: {
          cool: "erik"
        }
      });
    }
  }
};
</script>

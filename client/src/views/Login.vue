<template>
    <div class="wrapper" v-on:submit.prevent>
    <h1>Login</h1>
    <label for="email">Email</label>
    <input type="text" v-model="email">
    <label for="password">Password</label>
    <input type="password" v-model="password">

    <button @click="login()">Login</button>
    <button>Logout</button>
    </div>
</template>

<script>
    import api from '../services/api'
    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null,
            };
        },
        mounted() {},
        methods: {
            async login() {
                try {
                    let response = await api.post('/login', {
                    email: this.email,
                    password: this.password,
                    });
                    console.log(response);

                } catch (error) {
                    console.log(error);
                }
            }
        },
        computed: {}
    }
</script>

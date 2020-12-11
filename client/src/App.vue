<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to='/students'>students</router-link> | 
      <router-link to="/login">LOGIN</router-link> |
    </div>
    <router-view />
  </div>
</template>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/students">Students</router-link> |
      <router-link to="/login">login</router-link> | 
      <router-link to="/students/create">+stud</router-link>
    </div>
    <router-view />
  </div>
</template>

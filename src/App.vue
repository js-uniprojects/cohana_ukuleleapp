<template>
  <v-app class="app" name="app" >
    <v-app-bar color="light" dark short app>
      <router-link to="/">
        <v-avatar :tile="true">
          <img :src="require('./assets/Logo.svg')" alt="logo">
        </v-avatar>
      </router-link>
    </v-app-bar>
    <v-content fluid style="padding-top: 10%; overflow-x: hidden">
      <router-view />
    </v-content>
    <BottomNav/>
  </v-app>
</template>


<script>
  import BottomNav from "./components/BottomNav";

export default {
  name: 'App',

  components: {
    BottomNav,
  },

  data: () => ({
    goDark: false,
  }),
};
</script>
<style>

</style>
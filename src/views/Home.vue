<template>
  <v-container class="sx12 sm6 ">
    <v-layout row>
      <Grid
              v-for="(items) in menuItems"
              v-bind:key="items"
              v-bind:itemTitle=items.itemTitle
              v-bind:itemIcon=items.itemIcon
              v-bind:itemColor=items.itemColor
              v-bind:itemLink="items.itemLink"
      />
    </v-layout>
  </v-container>
</template>

<script>
  import Grid from "../components/Grid";
  export default {
    name: 'Main',
    components: {
      Grid
    },

    data: () => ({
      menuItems: [
        { itemIcon: 'mdi-information', itemTitle: 'Info', itemLink: '/information', itemColor: 'accent' },
        { itemIcon: 'mdi-file-document-edit', itemTitle: 'Get Ready', itemLink: '/preparation', itemColor: 'secondary' },
        { itemIcon: 'mdi-music-circle', itemTitle: 'Learn', itemLink:'/learn', itemColor: 'success' },
      ]
    }),
  };

</script>

<style>

</style>
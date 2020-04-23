<template>
    <v-container class="con-main">
        <v-layout row wrap align-center="true">
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
        name: 'Learn',
        components: {
            Grid
        },

        data: () => ({
            menuItems: [
                { itemIcon: 'mdi-alpha-c-circle', itemTitle: 'Chord', itemLink: '/levelc', itemColor: 'success' },
                { itemIcon: 'mdi-alpha-g-circle', itemTitle: 'Chord', itemLink: '/levelg', itemColor: 'success' },
                { itemIcon: 'mdi-alpha-f-circle', itemTitle: 'Chord', itemLink: '/levelf', itemColor: 'success' },

            ]
        }),
    };
</script>
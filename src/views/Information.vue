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
        name: 'Information',
        components: {
            Grid
        },

        data: () => ({
            menuItems: [
                { itemIcon: 'mdi-history', itemTitle: 'History', itemLink: '/story', itemColor: 'accent' },
                { itemIcon: 'mdi-guitar-acoustic', itemTitle: 'Anatomy', itemLink: '/anatomy', itemColor: 'accent' },
                { itemIcon: 'mdi-magnify', itemTitle: 'Types', itemLink:'/types', itemColor: 'accent' },
            ]
        }),
    };
</script>


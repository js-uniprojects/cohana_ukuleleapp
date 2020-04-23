<template>
    <v-container class="con-main">
        <v-layout row wrap align-center="true">
            <Grid
                    v-for="(items, i) in menuItems"
                    v-bind:key="i"
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
        name: 'Preparation',
        components: {
            Grid
        },

        data: () => ({
            menuItems: [
                { itemIcon: 'mdi-tune-vertical', itemTitle: 'Tuning', itemLink: '/tuning', itemColor: 'secondary' },
                { itemIcon: 'mdi-hand-right', itemTitle: 'Posture', itemLink: '/posture', itemColor: 'secondary' },
                { itemIcon: 'mdi-arrow-split-horizontal', itemTitle: 'Strum', itemLink:'/strumming', itemColor: 'secondary' },
            ]
        }),
    };
</script>

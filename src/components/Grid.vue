<template>
    <v-flex>
        <v-container class="mx-6">
            <v-flex
                    xs12
                    md6>
                <v-btn    v-for="n in 1"
                          :key="n"
                          min-height="75px"
                          min-width="140px"
                          :color="itemColor"
                          :to="itemLink">
                    <v-icon x-large>{{itemIcon}}</v-icon>
                    {{itemTitle}}
                </v-btn>
            </v-flex>
        </v-container>
    </v-flex>
</template>

<script>
    export default {
        name: "grid",
        props: ["itemIcon", "itemTitle", "itemColor", "itemLink"],
    }

</script>

<style scoped>

</style>
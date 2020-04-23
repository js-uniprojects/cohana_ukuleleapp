<template>
    <v-bottom-navigation
            grow
    >
        <v-btn icon color="primary" router to="/">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon color="accent" router to="/information">
            <span>Information</span>
            <v-icon>mdi-information</v-icon>
        </v-btn>

        <v-btn icon color="secondary" router to="/preparation">
            <span>Preparation</span>
            <v-icon>mdi-file-document-edit</v-icon>
        </v-btn>

        <v-btn icon color="success" router to="/learn">
            <span>Learn</span>
            <v-icon>mdi-guitar-acoustic</v-icon>
        </v-btn>

    </v-bottom-navigation>
</template>

<script>
    export default {
        name: "BottomNav"
    }
</script>

<style scoped>

</style>
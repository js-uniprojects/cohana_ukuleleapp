<template>
    <carousel :per-page="1" >
        <slide>
            <h2 class="text-center">Strumming I</h2> <br>
            <p class="text-center">
            Most songs can be played with a simple down-up-down-up strum.<br>
            Just move your hand down, up, down, up brushing all the strings.
            </p>
        </slide>
        <slide>
            <h2 class="text-center">Strumming II</h2> <br>
            <p class="text-center">
            At the beginning it is easier, to hold your index finger and thumb <br>
                together like a OK position.
            </p>
        </slide>
        <slide>
            <h2 class="text-center">Strumming III</h2> <br>
            <p class="text-center">
            Get a little loose in the wrist, and don’t use your whole arm to strum.
            </p>
        </slide>
        <slide>
            <h2 class="text-center">Strumming III</h2> <br>
            <p class="text-center">
            Next Step you’ll want to start mixing it up like: <br>
            Down-Down-Up-Up-Down-Up
            </p>
            <div class="text-center">
            <v-btn class="my-2"
                   dark
                   max-height="30px"
                   min-width="60px"
                   outlined color="secondary"
                   router to="/preparation"
                   tile>
                Return
            </v-btn>
            </div>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {

        components: {
            Carousel,
            Slide
        }

    };
</script>
<style>

</style>


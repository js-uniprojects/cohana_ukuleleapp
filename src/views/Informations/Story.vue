<template>
    <carousel :per-page="1">
        <slide>
            <h2 class="text-center">History</h2>
            <br> <p class="text-center">
            The story of the ukulele starts in Europe. <br>
            Smaller Instrument was build for sea-afring musicians. <br>
            In Portugal the guitar had shrunk down to became a machete.<br> </p>
        </slide>
        <slide>
            <h2 class="text-center">History II</h2>
            <br> <p class="text-center">
            In 1879 the Ravenscrag set off for Hawaii with four Portuguese.<br>
            The four started to make instruments there. <br>
            The machete in a new form.<br> </p>
        </slide>
        <slide>
            <h2 class="text-center">History III</h2>
            <br> <p class="text-center">
            The uke became a big hit with the Hawaiians.<br>
            And means 'my dog has fleas'.<br> </p>
            <div class="text-center">
            <v-btn class="my-2"
                   dark
                   max-height="30px"
                   min-width="60px"
                   outlined color="accent"
                   router to="/information"
                   tile>
                Return
            </v-btn> </div>
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
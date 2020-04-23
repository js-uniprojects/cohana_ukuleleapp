<template>
    <carousel :per-page="1" >
        <slide>
            <h2  class="text-center">Chords </h2> <br>
            <h3  class="text-center">Before we start</h3>
            <p class="text-center">
            Those Chords are made for the Tenor Ukulele. <br>
            The Tuning is D-G-B-E. <br>
            </p>
        </slide>
        <slide>
            <h2  class="text-center">Chords I</h2>
            <h3  class="text-center">C</h3>
            <p class="text-center">
            Let's learn the chord C. Practice! <br>
            </p>
            <img class="img1" src="@/assets/c.svg" alt="" height="100px">
        </slide>
        <slide>
            <h2  class="text-center">Chords II</h2>
            <p class="text-center">
            So know that you learned this chord. <br>
            Let's practice it multiple times.<br>
            <br>
            C <br>
            C C <br>
            C C C <br>
            <br>
            </p>
            <div class="text-center">
            <v-btn class="my-2"
                   dark
                   max-height="30px"
                   min-width="60px"
                   outlined color="primary"
                   router to="/learn"
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
        },}

</script>

<style>
    .img1{
        display: block;
        margin: 0 auto;
    }
</style>
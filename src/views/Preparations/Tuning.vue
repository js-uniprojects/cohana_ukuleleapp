<template>
    <carousel :per-page="1" >
        <slide>
            <h2 class="text-center">Tuning I</h2> <br>
            <h3 class="text-center">Soprano</h3>
            <p class="text-center">
            Soprano ukuleles are tuned down to G-C-E-A tuning.
            </p>
        </slide>
        <slide>
            <h2 class="text-center">Tuning II</h2><br>
            <h3 class="text-center">Concert</h3>
            <p class="text-center">
           The concert ukulele has the same tuning as the soprano: G-C-E-A tuning.
            </p>
        </slide>
        <slide>
            <h2 class="text-center">Tuning III</h2>
            <br>
            <h3 class="text-center">Tenor</h3>
            <p class="text-center">
             The tenor ukulele can be tuned in G-C-E-A or D-G-B-E.
            </p>
        </slide>
        <slide>
            <h2 class="text-center">Tuning IV</h2>
            <br>
            <h3 class="text-center">Baritone</h3>
            <p class="text-center">
            The bratione ukulele are tuned D-G-B-E from low to high. <br>
                It is the same tuning as the top four strings of the guitar.
            <br> </p>
            <div class="text-center">
            <v-btn class="my-2"
                   dark
                   max-height="30px"
                   min-width="60px"
                   outlined color="secondary"
                   router to="/preparation"
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
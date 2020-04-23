<template>
    <carousel :per-page="1" >
        <slide>
            <h2 class="text-center">Posture I</h2> <br>
            <h3 class="text-center">Sit straight</h3>
            <p class="text-center">
           Don`t slouch while you practice or play your ukulele.<br>
                Stretch out and sit straight.  </p>
        </slide>
        <slide>
            <h2 class="text-center">Posture II</h2>
            <br>
            <h3 class="text-center">How to Hold the Instrument</h3>
            <p class="text-center">
            One hand holds the instrument at the top, <br>
                while the other hand strums loosely. </p>
        </slide>
        <slide>
            <h2 class="text-center">Posture III</h2>
            <p class="text-center">
            C URVE your hand - like holding a ball <br>
            L OOSE GRIP - Arms and hands<br>
            E YE TO EYE - with the top of the neck<br>
            F LAT angle - between  the wrist and forearm
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
<template>
<carousel :per-page="1" >
        <slide>
            <h2  class="text-center">Anatomy I</h2> <br><p class="text-center">
            Body:The body consists of a back, top and sides.<br>
            Bridge: A bridge is mounted on the top of the body. <br> </p>
        </slide>
        <slide>
            <h2  class="text-center">Anatomy II</h2>
            <br> <p class="text-center">
            Sound Hole: The audio hole is an opening in the top of the body.<br>
            Neck: The neck supports the fretboard. <br> </p>
        </slide>
        <slide>
            <h2  class="text-center">Anatomy III</h2>
            <br> <p class="text-center">
            Frets: The actual frets are those metal “bars” on the fretboard.<br>
            Nut: The nut keeps the ukulele strings in the correct positions.<br> </p>
        </slide>
        <slide>
            <h2  class="text-center">Anatomy VI</h2>
            <br> <p class="text-center">
            Tuning Keys: The parts that hold the strings.<br>
            Head: This is the top part of the ukulele. <br> </p>
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
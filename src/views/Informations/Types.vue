<template>
    <carousel :per-page="1" height="150px" width="100px" >
        <slide>
            <img class="img1"  src="@/assets/ukulele.png" alt="" height="130px">
        </slide>
        <slide>
            <h2 class="text-center">Types II</h2> <br>
            <h3 class="text-center">Soprano</h3>    <p class="text-center">
            The soprano is the most traditional size with 51 cm. <br>
            It makes the most real classic ukulele sound. </p>
        </slide>
        <slide>
            <h2 class="text-center">Types III</h2>
            <br>
            <h3 class="text-center">Concert</h3>   <p class="text-center">
            The next bigger one is the concert ukulele with 58 cm. <br>
            The body is bigger and the neck is longer.  <br></p>
        </slide>
        <slide>
            <h2 class="text-center">Types VI</h2>
            <br>
            <h3 class="text-center">Tenor</h3>   <p class="text-center">
            The next size is the tenor sized one with 66 cm. <br>
            It sounds a  bit more like a classical guitar than the ukulele. </p>
        </slide>
        <slide>
            <h2 class="text-center">Types VI</h2>
            <br>
            <h3 class="text-center">Baritone</h3>   <p class="text-center">
            The largest is called baritone and is 76 cm big. <br>
            It has the deepest tone and sounds even more like a guitar. </p>
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
.img1{
    display: block;
    margin: 0 auto;
}
</style>
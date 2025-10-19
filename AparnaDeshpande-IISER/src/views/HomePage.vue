<script setup lang="ts">
import ProfileInfo from '../components/ProfileInfo.vue';
import FootQuote from '../components/FootQuote.vue';

</script>

<template>
    <div class="flex items-center justify-center min-w-full bg-transparent mt-10 sm:mt-10">
        <div class="grid grid-rows-2">
            <div class>
                <div class="grid grid-cols-1 sm:grid-cols-2">
                    <div class="h-75 w-70 sm:h-150 sm:w-100 ml-15 sm:ml-0">
                        <img class="rounded-2xl sm:h-[431px] sm:w-[420px] md:mt-15 object-contain" src="../assets/pro1.png" alt="propic"></img>
                    </div>
                    <div class="flex items-center justify-center">
                        <ProfileInfo></ProfileInfo>
                    </div>
                </div>
            </div>
            <div class="sm:mt-15">
                <FootQuote></FootQuote>
            </div>
        </div>
    </div>
</template>

<style>
    img {
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    .img-frame img {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        height: 100%;
    }
</style>
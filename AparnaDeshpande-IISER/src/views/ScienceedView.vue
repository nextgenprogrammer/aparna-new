<template>
  <div class="text-center justify-center align-center items-center">
    <div class="mt-10">
      Coordination committee member of the newly established 
        <a href="https://www.iiserpune.ac.in/research/department/science-education/research" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">Department of Science Education (DSE)</a>
      at IISER Pune.
    </div>
    <div class="mt-5">
        To apply, please check out the <a href="https://sciroi.net/job-portal/" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">Faculty Application</a> link.<br/><br/>
    </div>
    <h2 class="text-xl pb-2 text-center mt-10">My Recent Reads</h2>
    <div class="w-25 h-0.5 bg-[#111828] mx-auto rounded mt-1 mb-10"></div>
    <div class="sm:ml-20 sm:mr-20">
      <a href="https://blpress.org/books/a-mathematicians-lament/" target="_blank" rel="noopener" class="hover:shadow-lg transition text-blue-600 hover:underline">"A Mathematician's Lament"</a> by Paul Lockhart.
      With AI fiercely intruding teaching-learning spaces this book makes us truly introspect...even more than before..
    </div>
    <div class="tweet-container mt-5 flex justify-center align-center">
      <div class="twitter-tweet twitter-tweet-rendered" style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <iframe ref="twitterIframe"
          id="twitter-widget-0" 
          scrolling="no" 
          frameborder="0" 
          allowtransparency="true" 
          allowfullscreen="true" 
          class="" 
          title="X Post" 
          src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1590912004302471169&amp;lang=en&amp;origin=https%3A%2F%2Fdraparnadeshpande.github.io%2Fportfolio%2F&amp;sessionId=64c33f0e7ee233c5a5206f2b9c5a02b67946d4a8&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px" 
          data-tweet-id="1590912004302471169" 
          style="position: static; visibility: visible; width: 550px; height: 775px; display: block; flex-grow: 1;"
        ></iframe>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.twttr) {
    window.twttr.ready(() => {
      console.log('Twitter widgets loaded');
      // Perform any logic that needs to wait until content loads here
    });
  } else {
    // In case widgets.js is loaded asynchronously after mount, listen for it:
    window.addEventListener('load', () => {
      if (window.twttr) {
        window.twttr.ready(() => {
          console.log('Twitter widgets loaded');
        });
      }
    });
  }
});
</script>

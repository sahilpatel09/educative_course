<template>
  <div class="">
    <main>
      <FrontView class="py-10" :userData="user.data" />
    </main>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["sitevisit"],
  // or middleware: 'auth'
});

const user = useUser();
const userData = user.value.data;

const firstName = userData.name.first;
const lastName = userData.name.last;

const seoTitle = firstName + " " + lastName + "- Software Engineer";

useHead({
  title: seoTitle,
  meta: [{ name: "description", content: "Hello there! Bonjour!" }],
});
</script>

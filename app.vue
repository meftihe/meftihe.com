<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Homepage',
  meta: [
    {
      name: 'description',
      content: 'This is the homepage',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: '~/assets/lib/bootstrap/css/bootstrap.min.css',
    },
  ],
});
</script>

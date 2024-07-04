<template>
  <div class="bg-primary h-100">
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
});
</script>

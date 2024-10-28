<template>
  <div class="mt-24">
    <div class="flex flex-wrap items-center">
      <div
        class="basis-1/2 lg:basis-2/12"
        v-for="(client, index) in data.clients"
        :key="index"
      >
        <a href="#" class="block my-5">
          <img
            :src="client"
            class="opacity-60 grayscale hover:grayscale-0"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "../data/blog.json";
</script>

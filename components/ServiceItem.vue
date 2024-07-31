<template>
  <div class="bg-base-100 rounded-xl w-full md:w-[48%] lg:w-[23%] p-7 mb-6">
    <div>
      <div class="mb-14">
        <img :src="service?.icon" alt="" />
      </div>
      <div class="flex flex-col gap-6 capitalize">
        <h5 class="text-lg font-bold">{{ service?.title }}</h5>
        <div class="text-sm text-[#666]">
          {{ service?.details }}
        </div>
        <!-- <NuxtLink to="#" class="inline-flex items-center">
          <span class="text-sm font-medium uppercase">See projects</span>
          <Icon name="bi:chevron-right" class="ms-1"></Icon>
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: Object,
});
</script>

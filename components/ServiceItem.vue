<template>
  <div class="col-lg-3 col-sm-6 mb-30 mb-lg-0">
    <div class="service-card style-3">
      <div class="icon">
        <img :src="service?.icon" alt="" />
      </div>
      <div class="info">
        <h5 class="title">{{ service?.title }}</h5>
        <div class="text">
          {{ service?.details }}
        </div>
        <NuxtLink to="/page-portfolio-5"
          ><span>see projects</span> <i class="bi bi-chevron-right ms-1"></i
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: Object,
});
</script>

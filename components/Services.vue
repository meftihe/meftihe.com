<template>
  <section class="bg-base-200 py-24" data-scroll-index="2">
    <div class="px-8 lg:px-24">
      <div class="flex items-center justify-between mb-12">
        <h3 class="text-3xl font-medium capitalize">
          Our Main
          <StyledSpan class="after:bg-[url('title_shap1.png')]"
            >Services</StyledSpan
          >
        </h3>
        <NuxtLink
          to="#"
          class="inline-flex items-center text-muted ml-5 pl-5 mt-2"
        >
          See full services
          <Icon name="bi:chevron-right" size="20" class="ms-1"></Icon>
        </NuxtLink>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap gap-2 justify-between">
        <ServiceItem
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import servicesData from '../data/services.json';

const services = ref(servicesData);
</script>

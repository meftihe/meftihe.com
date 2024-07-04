<template>
  <section class="services style-3 section-padding pb-70" data-scroll-index="2">
    <div class="container">
      <div class="section-head style-3 d-flex align-items-center">
        <h3>Our Main <span>Services</span></h3>
        <NuxtLink
          to="/page-services-5"
          class="d-inline-flex align-items-center text-muted ms-5 ps-5 mt-2"
        >
          See full services
          <Icon name="bi:chevron-right" size="20" class="ms-1"></Icon>
        </NuxtLink>
      </div>
      <div class="row">
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

<template>
  <section class="services style-3 section-padding pb-70" data-scroll-index="2">
    <div class="container">
      <div class="section-head style-3 d-flex align-items-center">
        <h3>Our Main <span>Services</span></h3>
        <NuxtLink to="/page-services-5" class="text-muted ms-5 ps-5 mt-2"
          >See full services <i class="bi bi-chevron-right ms-1"></i
        ></NuxtLink>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-sm-6 mb-30 mb-lg-0"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="service-card style-3">
            <div class="icon">
              <img :src="service.icon" alt="" />
            </div>
            <div class="info">
              <h5 class="title">{{ service.title }}</h5>
              <div class="text">
                {{ service.details }}
              </div>
              <NuxtLink to="/page-portfolio-5"
                ><span>see projects</span>
                <i class="bi bi-chevron-right ms-1"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import servicesData from '../data/services.json';

const services = ref(servicesData);
</script>

<template>
  <footer class="style-3 bg-white">
    <div class="container">
      <div class="row gx-0 justify-content-between">
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">Iteck - 1st Choice for IT Solutions</div>
            <small class="text">
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world. For
              your very specific industry, we have highly-tailored IT solutions.
            </small>
            <div class="socail-icons">
              <a
                href="#"
                class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray me-2"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                class="icon-35 rounded-circle bg-gray overflow-hidden d-inline-flex align-items-center justify-content-center text-gray"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="items">
            <div class="title">Information</div>
            <small class="text mb-10 d-block">
              {{ footerData.address }}
            </small>
            <small class="text mb-10 d-block">
              {{ footerData.phone }}
            </small>
            <small class="text d-block">
              {{ footerData.email }}
            </small>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">Useful Links</div>
            <ul>
              <li v-for="(item, index) in footerData.usefulLinks" :key="index">
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="items">
            <div class="title">Services</div>
            <ul>
              <li v-for="(item, index) in footerData.services" :key="index">
                <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="logo">
              <img src="/assets/img/logo_b2.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 d-flex justify-content-center">
            <small class="small d-inline-flex align-items-center">
              <Icon name="solar:copyright-linear"></Icon> 2024 Copyrights by
              <a href="#" class="fw-bold text-decoration-underline ms-1"
                >Gracesoft</a
              >
            </small>
          </div>
        </div>
        <img
          src="/assets/img/testimonials/testi3_lines.png"
          alt=""
          class="testi_lines w-100"
        />
      </div>
    </div>
    <img src="/assets/img/contact_globe.svg" alt="" class="contact_globe" />
  </footer>
</template>

<script setup>
import footerData from '../data/footer.json';
</script>

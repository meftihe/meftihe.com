<template>
  <footer class="relative pt-24 bg-base-100 overflow-hidden">
    <div class="px-4 lg:px-20 relative z-5">
      <div class="flex flex-wrap justify-between">
        <div class="lg:basis-3/12 basis-5/12">
          <div class="font-bold mb-7">
            Gracesoft - 1st Choice for IT Solutions
          </div>
          <small class="text-xs">
            Over 25 years working in IT services developing software
            applications and mobile apps for clients all over the world. For
            your very specific industry, we have highly-tailored IT solutions.
          </small>
          <div class="mt-7 flex space-x-2">
            <a href="#" class="btn btn-circle btn-sm">
              <Icon name="uil:facebook"></Icon>
            </a>
            <a href="#" class="btn btn-circle btn-sm">
              <Icon name="uil:linkedin"></Icon>
            </a>
            <a href="#" class="btn btn-circle btn-sm">
              <Icon name="uil:github"></Icon>
            </a>
          </div>
        </div>
        <div class="lg:basis-3/12 basis-6/12">
          <div class="font-bold mb-7">Information</div>
          <small class="text-xs mb-3 block">
            {{ footerData.address }}
          </small>
          <small class="text-xs mb-3 block">
            {{ footerData.phone }}
          </small>
          <small class="text-xs block">
            {{ footerData.email }}
          </small>
        </div>
        <div class="lg:basis-2/12">
          <div class="font-bold mb-7">Useful Links</div>
          <ul>
            <li v-for="(item, index) in footerData.usefulLinks" :key="index">
              <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:basis-2/12">
          <div class="font-bold mb-7">Services</div>
          <ul>
            <li v-for="(item, index) in footerData.services" :key="index">
              <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-20 py-8 relative">
        <div class="flex flex-wrap">
          <div class="lg:basis-3/12 basis-6/12">
            <div class="flex items-center" href="#">
              <img
                src="/meftihe-logo-purple.svg"
                width="40px"
                alt="Gracesoft logo"
              />
              <span class="leading-none"><b>Meftihe</b> IT Solutions</span>
            </div>
          </div>
          <div class="lg:basis-6/12 flex justify-center">
            <small class="text-sm leading-relaxed inline-flex items-center">
              <Icon name="solar:copyright-linear"></Icon>
              {{ new Date().getFullYear() }}
              <a href="#" class="fw-bold ms-1 me-1">Meftihe IT solutions.</a>
              All rights reserved.
            </small>
          </div>
        </div>
        <img
          src="/testimonials/testi3_lines.png"
          alt=""
          class="w-full absolute -top-2"
        />
      </div>
    </div>
    <img
      src="/assets/img/contact_globe.svg"
      alt=""
      class="absolute h-[150%] pointer-events-none max-h-none w-3/5 -top-1/4 left-[20%] opacity-15 animate-rotatecenter"
    />
  </footer>
</template>

<script setup>
import footerData from '../data/footer.json';
</script>

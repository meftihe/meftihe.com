<template>
  <section class="testimonials style-3" data-scroll-index="1">
    <div class="container">
      <div class="content section-padding">
        <div class="section-head style-3">
          <h3>Loved By Thousand <span>Clients</span></h3>
        </div>
        <div class="testimonial-slider style-3">
          <Swiper
            :slides-per-view="3"
            :space-between="100"
            :speed="1000"
            :pagination="{
              el: '.testimonial-slider.style-3 .swiper-pagination',
              clickable: true,
            }"
            :navigation="{
              nextEl: '.testimonial-slider.style-3 .swiper-button-next',
              prevEl: '.testimonial-slider.style-3 .swiper-button-prev',
            }"
            :autoplay="{ delay: 4000, disableOnInteraction: true }"
            :mousewheel="true"
            :keyboard="true"
            :breakpoints="{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              787: { slidesPerView: 2 },
              991: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }"
            class="swiper-container"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <div class="testimonial-card style-3">
                <div class="text">
                  {{ testimonial.text }}
                </div>
                <div class="user-img mt-30 d-flex align-items-center">
                  <div
                    class="img icon-40 img-cover rounded-circle overflow-hidden me-3"
                  >
                    <img :src="'_nuxt' + testimonial.image" alt="" />
                  </div>
                  <div class="inf">
                    <p class="fw-bold">{{ testimonial.author }}</p>
                    <small class="text-muted">{{ testimonial.positon }}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <img
        src="~/assets/img/testimonials/testi3_lines.png"
        alt=""
        class="testi_lines w-100"
      />
    </div>
  </section>
</template>

<script setup>
import testimonials from '../data/testimonials.json';
</script>

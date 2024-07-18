<template>
  <section
    class="-mt-8 rounded-tl-3xl rounded-tr-3xl relative bg-base-200 z-5"
    data-scroll-index="1"
  >
    <div class="px-8 lg:px-24">
      <div class="py-24">
        <div class="flex items-center justify-between mb-12 pr-4">
          <h3 class="text-3xl font-medium capitalize">
            Loved By Thousand
            <StyledSpan>Clients</StyledSpan>
          </h3>
          <div class="space-x-1 shrink-0">
            <button class="btn btn-circle bg-white btn-sm">
              <Icon
                name="material-symbols:chevron-left"
                class="w-4 h-4 text-primary"
              />
            </button>
            <button class="btn btn-circle bg-white btn-sm">
              <Icon
                name="material-symbols:chevron-right"
                class="w-4 h-4 text-primary"
              />
            </button>
          </div>
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
              <div class="min-h-48 flex flex-col justify-between">
                <div class="text-lg">
                  {{ testimonial.text }}
                </div>
                <div class="flex items-center gap-3 mt-8">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img
                        :src="'_nuxt' + testimonial.image"
                        :alt="testimonial.author"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ testimonial.author }}</div>
                    <div class="text-sm opacity-50">
                      {{ testimonial.positon }}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <img
        src="~/assets/img/testimonials/testi3_lines.png"
        alt=""
        class="w-full"
      />
    </div>
  </section>
</template>

<script setup>
import testimonials from '../data/testimonials.json';
</script>

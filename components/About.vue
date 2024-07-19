<template>
  <section
    class="py-24 bg-base-100 relative min-h-[500px]"
    data-scroll-index="3"
  >
    <div class="flex flex-col lg:flex-row mb-24 pt-5">
      <div class="absolute top-48 left-0 lg:basis-1/2 max-w-1/2">
        <img src="/assets/img/about/style_3_1.png" alt="" />
        <div
          class="info-circle"
          v-for="(number, index) in aboutData.numbers"
          :key="index"
        >
          <div class="cont">
            <h2>{{ number.value }}</h2>
            <small>{{ number.title }}</small>
          </div>
        </div>
      </div>
      <div class="justify-end lg:pr-20">
        <div class="flex flex-wrap justify-end">
          <div class="w-5/12">
            <div class="info">
              <div class="mb-12">
                <h3 class="text-3xl font-medium capitalize">
                  Gracesoft’s
                  <StyledSpan class="after:bg-[url('title_shap2.png')]"
                    >Mission & Vision</StyledSpan
                  >
                </h3>
              </div>
              <Blockquote>
                "It is only when they go wrong that machines remind you how
                powerful they are."
              </Blockquote>
              <div class="text mb-20">
                Gracesoft Co is the partner of choice for many of the world’s
                leading enterprises, SMEs and technology challengers. We help
                businesses elevate their value through custom software
                development, product design, QA and consultancy services.
              </div>
              <div class="text mb-70">
                Gracesoft specializes in technological and IT-related services
                such as product engineering, warranty management, building
                cloud, etc.
              </div>
              <NuxtLink to="#" class="btn rounded-full btn-primary">
                <span>More About Us</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="basis-1/2">
        <div class="row">
          <div class="col-lg-5">
            <div class="info pe-lg-5">
              <div class="section-head mb-40 style-3">
                <h3>Gracesoft’s <span>Technology</span></h3>
              </div>
              <div class="text mb-30">
                Our team can assist you in transforming your business through
                latest tech capabilities to stay ahead of the curve.
              </div>
              <ul>
                <li
                  v-for="(feature, index) in aboutData.features"
                  :key="index"
                  class="d-inline-flex align-items-center"
                >
                  <Icon
                    name="material-symbols:kid-star-sharp"
                    class="me-2 color-blue4"
                  ></Icon>
                  {{ feature }}
                </li>
              </ul>
              <NuxtLink
                to="#"
                class="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn"
              >
                <span>How We Works</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <img src="/assets/img/about/style_3_2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutData from '../data/about.json';
</script>

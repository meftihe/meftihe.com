<template>
  <section
    class="py-24 bg-base-100 relative min-h-[500px]"
    data-scroll-index="3"
  >
    <div class="flex flex-col lg:flex-row mb-24 pt-20">
      <div class="relative lg:basis-1/2 max-w-1/2 shrink">
        <img src="/assets/img/about/style_3_1.png" alt="" />
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-10%] flex items-center justify-center text-center w-56 h-56 bg-primary text-base-100 rounded-full overflow-hidden outline outline-8 outline-solid outline-white [&:nth-child(2)]:top-1/2 [&:nth-child(2)]:w-52 [&:nth-child(2)]:h-52 [&:nth-child(2)]:left-auto [&:nth-child(2)]:right-0 [&:nth-child(2)]:-translate-x-3 [&:nth-child(2)]:translate-y-[-57%] [&:nth-child(3)]:top-1/2 [&:nth-child(3)]:w-36 [&:nth-child(3)]:h-36 [&:nth-child(3)]:left-auto [&:nth-child(3)]:right-0 [&:nth-child(3)]:translate-x-[-88%] [&:nth-child(3)]:translate-y-1/3 [&:nth-child(3)]:bg-purple-600 [&:nth-child(4)]:top-1/2 [&:nth-child(4)]:w-44 [&:nth-child(4)]:h-44 [&:nth-child(4)]:left-0 [&:nth-child(4)]:translate-x-[20%] [&:nth-child(4)]:translate-y-[-20%] [&:nth-child(4)]:bg-sky-500"
          v-for="(number, index) in aboutData.numbers"
          :key="index"
        >
          <div class="cont">
            <h2 class="text-6xl font-bold">
              {{ number.value }}
            </h2>
            <small class="text-xs uppercase">{{ number.title }}</small>
          </div>
        </div>
      </div>
      <div class="lg:basis-1/2">
        <div class="flex flex-wrap justify-end">
          <div class="p-12 pr-16">
            <div class="mb-12">
              <h3 class="text-3xl font-medium capitalize">
                Meftihe’s
                <StyledSpan class="after:bg-[url('title_shap2.png')]"
                  >Mission & Vision</StyledSpan
                >
              </h3>
            </div>
            <Blockquote>
              "It is only when they go wrong that machines remind you how
              powerful they are."
            </Blockquote>
            <div class="text mb-7">
              Meftihe Co is the partner of choice for many of the world’s
              leading enterprises, SMEs and technology challengers. We help
              businesses elevate their value through custom software
              development, product design, QA and consultancy services.
            </div>
            <div class="text mb-7">
              Meftihe specializes in technological and IT-related services such
              as product engineering, warranty management, building cloud, etc.
            </div>
            <NuxtLink to="#" class="btn rounded-full btn-primary">
              <span>More About Us</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:basis-1/2 p-12">
        <div class="mb-12">
          <h3 class="text-3xl font-medium capitalize">
            Meftihe’s
            <StyledSpan class="after:bg-[url('title_shap1.png')]"
              >Technology</StyledSpan
            >
          </h3>
        </div>
        <div class="mb-30">
          Our team can assist you in transforming your business through latest
          tech capabilities to stay ahead of the curve.
        </div>
        <ul class="flex flex-col">
          <li
            v-for="(feature, index) in aboutData.features"
            :key="index"
            class="inline-flex items-center"
          >
            <Icon
              name="material-symbols:kid-star-sharp"
              class="mr-2 text-primary"
            ></Icon>
            {{ feature }}
          </li>
        </ul>
        <NuxtLink
          to="#"
          class="btn btn-outline rounded-full border-primary mt-12"
        >
          <span>How We Works</span>
        </NuxtLink>
      </div>
      <div class="lg:basis-1/2 hidden lg:block">
        <img src="/assets/img/about/style_3_2.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutData from "../data/about.json";
</script>

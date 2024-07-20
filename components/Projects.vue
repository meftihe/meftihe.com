<template>
  <section class="py-24 bg-base-200" data-scroll-index="4">
    <div class="px-4 lg:px-20">
      <div class="mb-12">
        <h3 class="text-3xl font-medium capitalize text-center">
          Our Featured
          <StyledSpan class="after:bg-[url('title_shap1.png')]"
            >Projects</StyledSpan
          >
        </h3>
      </div>
      <div class="p-2">
        <div class="flex flex-wrap gap-8">
          <div
            :class="
              i === 0
                ? 'lg:basis-7/12 grow'
                : i === 2
                ? 'lg:basis-5/12 grow'
                : 'grow'
            "
            v-for="(project, i) in projects"
            :key="i"
          >
            <div class="relative overflow-hidden group">
              <NuxtLink to="#" class="h-96 rounded-2xl overflow-hidden block">
                <img
                  :src="project.image"
                  class="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:rotate-[-5deg] group-hover:scale-110"
                  :alt="project.title"
                />
              </NuxtLink>
              <div
                class="absolute z-5 bottom-5 left-5 bg-base-100 rounded-2xl inline-block px-6 py-5 transition-all duration-400 ease-in-out opacity-0 translate-y-[150%] group-hover:translate-y-0 group-hover:opacity-100"
              >
                <h5 class="font-bold text-lg">
                  <NuxtLink to="#">{{ project.title }}</NuxtLink>
                </h5>
                <small class="small"
                  ><a href="#">{{ project.description }}</a></small
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 text-center">
          <NuxtLink to="#" class="btn btn-primary rounded-full">
            <span>See All Projects</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from '../data/projects.json';
</script>

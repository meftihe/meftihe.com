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
            :class="i === 0 ? 'basis-7/12' : i === 2 ? 'basis-5/12' : 'grow'"
            v-for="(project, i) in projects"
            :key="i"
          >
            <div class="relative overflow-hidden">
              <NuxtLink to="#" class="h-96 rounded-2xl overflow-hidden block">
                <img
                  :src="project.image"
                  class="w-full h-full object-cover"
                  :alt="project.title"
                />
              </NuxtLink>
              <div
                class="absolute z-5 bottom-5 left-5 bg-base-100 rounded-2xl inline-block px-6 py-5"
              >
                <h5 class="h5">
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

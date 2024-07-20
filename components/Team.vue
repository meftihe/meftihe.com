<template>
  <section class="py-24 bg-base-100" data-scroll-index="6">
    <div class="px-4 lg:px-20">
      <div class="mb-12">
        <h3 class="text-3xl font-medium capitalize text-center">
          Meet Our
          <StyledSpan class="after:bg-[url('title_shap2.png')] after:-bottom-5"
            >Amazing Team</StyledSpan
          >
        </h3>
      </div>

      <div
        class="flex justify-between flex-wrap flex-col md:flex-row items-center"
      >
        <div
          class="md:w-[18%] text-center mb-5 group"
          v-for="(member, i) in teamMembers"
          :key="i"
        >
          <div class="avatar">
            <div class="w-32 rounded">
              <img :src="member.picture" alt="" />
            </div>
          </div>
          <div class="pt-2">
            <h6
              class="font-bold transition-all duration-300 ease-in-out group-hover:text-primary"
            >
              <a href="#">{{ member.name }}</a>
            </h6>
            <small class="text-[#888]">{{ member.position }}</small>
            <div class="mt-1 flex justify-center space-x-1">
              <a href="#" class="btn btn-circle btn-ghost btn-sm">
                <Icon name="uil:facebook"></Icon>
              </a>
              <a href="#" class="btn btn-circle btn-ghost btn-sm">
                <Icon name="uil:linkedin"></Icon>
              </a>
              <a href="#" class="btn btn-circle btn-ghost btn-sm">
                <Icon name="uil:github"></Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-16 space-x-2">
        <NuxtLink to="#" class="btn btn-primary rounded-full px-7">
          <span>See All Team</span>
        </NuxtLink>
        <NuxtLink to="#" class="btn btn-outline btn-primary px-7 rounded-full">
          <span>Join Our Team</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import teamMembers from '../data/team.json';
</script>

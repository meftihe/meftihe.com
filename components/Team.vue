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

      <div class="content">
        <div class="team_box" v-for="(member, i) in teamMembers" :key="i">
          <div class="avatar">
            <img :src="member.picture" alt="" />
          </div>
          <div class="info">
            <h6>
              <a href="#">{{ member.name }}</a>
            </h6>
            <small>{{ member.position }}</small>
            <div class="social_icons">
              <a href="#">
                <Icon name="uil:facebook"></Icon>
              </a>
              <a href="#">
                <Icon name="uil:linkedin"></Icon>
              </a>
              <a href="#">
                <Icon name="uil:github"></Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bttns mt-4 text-center mt-50">
        <NuxtLink
          to="#"
          class="btn rounded-pill bg-blue2 sm-butn mx-1 text-white"
        >
          <span>See All Team</span>
        </NuxtLink>
        <NuxtLink
          to="#"
          class="btn rounded-pill border-blue2 hover-blue2 sm-butn mx-1"
        >
          <span>Join Our Team</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import teamMembers from '../data/team.json';
</script>

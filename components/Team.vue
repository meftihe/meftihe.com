<template>
  <section
    class="team section-padding style-1 team-blue2 bg-white"
    data-scroll-index="6"
  >
    <div class="container">
      <div class="section-head long-shape style-3 text-center mb-70">
        <h3>Meet Our <span>Amazing Team</span></h3>
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
          to="/page-about-5"
          class="btn rounded-pill bg-blue2 sm-butn mx-1 text-white"
        >
          <span>See All Team</span>
        </NuxtLink>
        <NuxtLink
          to="/page-contact-5"
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

<template>
  <section class="projects section-padding style-3" data-scroll-index="4">
    <div class="container">
      <div class="section-head style-3 text-center">
        <h3>Our Featured <span>Projects</span></h3>
      </div>
      <div class="content">
        <div class="row">
          <div
            :class="i === 0 ? 'col-lg-7' : i === 1 ? 'col-lg-5' : 'col-lg-6'"
            v-for="(project, i) in projects"
            :key="i"
          >
            <div class="project-card d-block mb-30 style-3">
              <NuxtLink
                to="/page-single-project-5"
                class="img img-cover d-block"
              >
                <img :src="project.image" alt="" />
              </NuxtLink>
              <div class="info">
                <h5 class="h5">
                  <NuxtLink to="/page-single-project-5">{{
                    project.title
                  }}</NuxtLink>
                </h5>
                <small class="small"
                  ><a href="#">{{ project.description }}</a></small
                >
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <NuxtLink
            to="/page-portfolio-5"
            class="btn rounded-pill bg-blue2 sm-butn mt-60 text-white"
          >
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

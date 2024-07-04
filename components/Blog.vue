<template>
  <section class="blog section-padding style-3" data-scroll-index="7">
    <div class="container">
      <div class="row gx-0 justify-content-between">
        <div class="col-lg-5">
          <div class="blog-content">
            <div class="section-head style-3 d-flex align-items-center mb-50">
              <h3>Iteck’s <span>Journal</span></h3>
              <NuxtLink
                to="/page-blog-5"
                class="d-inline-flex text-muted ms-5 ps-5 mt-2"
                >All Articles
                <Icon
                  name="material-symbols-light:chevron-right bi ms-1"
                  size="20"
                ></Icon>
              </NuxtLink>
            </div>
            <div
              :class="`card border-0 bg-transparent rounded-0 ${
                i !== data.blogs.length - 1 ? 'border-bottom brd-gray' : ''
              } pb-4 mb-4`"
              v-for="(post, i) in data.blogs"
              :key="i"
            >
              <div class="row align-items-center">
                <div class="col-lg-4">
                  <NuxtLink to="/page-single-post-5" class="img img-cover">
                    <img :src="post.cover" class="radius-2" alt="..." />
                  </NuxtLink>
                </div>
                <div class="col-lg-8">
                  <div class="card-body p-0">
                    <small class="d-block align-items-center date text">
                      <a
                        href="#"
                        class="text-uppercase border-end brd-light pe-3 me-3 color-blue2 fw-bold"
                        >{{ post.type }}</a
                      >
                      <Icon name="bi:clock" class="me-1"></Icon>
                      <a href="#" class="op-8">{{ post.time }}</a>
                    </small>
                    <h6 class="card-title">
                      <NuxtLink to="/page-single-post-5">{{
                        post.title
                      }}</NuxtLink>
                    </h6>
                    <div
                      class="d-flex small mt-20 align-items-center justify-content-between op-9"
                    >
                      <div class="l_side d-flex align-items-center">
                        <span
                          class="icon-10 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-blue2 p-2 me-2 text-white"
                        >
                          {{ post.userImage }}
                        </span>
                        <a href="#">
                          <small class="text-muted">By</small>
                          {{ post.username }}
                        </a>
                      </div>
                      <div class="r-side mt-1 d-inline-flex align-items-center">
                        <Icon name="bi:chat-left-text" class="me-1"></Icon>
                        <a href="#">{{ post.comments }}</a>
                        <Icon name="bi:eye" class="me-1 ms-3"></Icon>
                        <a href="#">{{ post.views }}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="faq style-3">
            <div class="section-head style-3 text-uppercase mb-50">
              <h3>FAQS</h3>
            </div>
            <div class="accordion" id="accordionExample">
              <div
                class="accordion-item"
                v-for="(item, index) in data.faq"
                :key="index"
              >
                <h2 class="accordion-header" :id="`heading${index + 1}`">
                  <button
                    :class="`accordion-button ${
                      index === 0 ? '' : 'collapsed'
                    }`"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse${index + 1}`"
                    aria-expanded="true"
                    :aria-controls="`collapse${index + 1}`"
                  >
                    {{ item.question }}
                  </button>
                </h2>
                <div
                  :id="`collapse${index + 1}`"
                  :class="`accordion-collapse collapse ${
                    index === 0 ? 'show' : ''
                  }`"
                  :aria-labelledby="`heading${index + 1}`"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
              <NuxtLink
                to="/page-contact-5"
                class="d-inline-flex align-items-center text-muted text-uppercase mt-50 small"
              >
                See More
                <Icon
                  name="material-symbols-light:chevron-right"
                  size="24"
                  class="ms-1"
                ></Icon>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="client-logos mt-100">
        <div class="row align-items-center">
          <div
            class="col-6 col-lg-2"
            v-for="(client, index) in data.clients"
            :key="index"
          >
            <a href="#" class="img d-block">
              <img :src="client" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/img/blog/v_lines.png" alt="" class="v_lines" />
  </section>
</template>

<script setup>
import data from '../data/blog.json';
</script>

<template>
  <section class="py-24 relative bg-base-200" data-scroll-index="7" id="blog">
    <div class="px-4 lg:px-20">
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="md:basis-5/12">
          <div class="px-2">
            <div class="inline-flex items-center gap-20 mb-12">
              <h3 class="text-3xl font-medium capitalize">
                Meftihe’s
                <StyledSpan
                  class="after:bg-[url('title_shap1.png')] after:-bottom-5"
                  >Journal</StyledSpan
                >
              </h3>
              <NuxtLink
                to="#"
                class="inline-flex items-center text-slate-500 hover:text-slate-800"
                >All Articles
                <Icon
                  name="material-symbols-light:chevron-right"
                  size="22"
                ></Icon>
              </NuxtLink>
            </div>
            <div v-if="data == null">
              <h2>No articles found</h2>
            </div>
            <div
              v-else
              :class="`flex flex-col gap-4 md:gap-0 md:flex-row ${
                i !== data.length - 1 ? 'border-b border-gray-300' : ''
              } pb-6 mb-6`"
              v-for="(post, i) in data"
              :key="i"
            >
              <div class="md:basis-4/12">
                <NuxtLink to="#" class="h-32">
                  <img
                    :src="post.cover"
                    class="w-full h-full rounded-md object-cover"
                    alt="..."
                  />
                </NuxtLink>
              </div>
              <div class="md:basis-8/12 px-3">
                <div class="flex flex-col justify-between h-full">
                  <div class="p-0">
                    <small class="block items-center text-xs">
                      <a
                        href="#"
                        class="uppercase mr-3 text-primary font-bold"
                        >{{ post.type }}</a
                      >
                      <Icon name="bi:clock" class="me-1"></Icon>
                      <a href="#" class="op-8">{{ post.time }}</a>
                    </small>
                    <h6
                      class="text-lg font-bold max-w-[85%] my-2 hover:text-primary leading-6"
                    >
                      <NuxtLink to="#">{{ post.title.rendered }}</NuxtLink>
                    </h6>
                  </div>
                  <div class="flex align-items-center justify-between">
                    <div class="flex items-center">
                      <span
                        class="w-[10px] h-[10px] rounded-full inline-flex justify-center items-center uppercase bg-primary p-2 mr-2 text-white text-[10px]"
                      >
                        {{ post.userImage }}
                      </span>
                      <a href="#" class="text-sm">
                        <small class="text-[#6c757d]"
                          >By <b>{{ post.username }}</b></small
                        >
                      </a>
                    </div>
                    <div class="mt-1 inline-flex items-center text-sm">
                      <Icon
                        name="bi:chat-left-text"
                        size="11"
                        class="mr-1"
                      ></Icon>
                      <a href="#">{{ post.comments }}</a>
                      <Icon name="bi:eye" size="11" class="mr-1 ml-3"></Icon>
                      <a href="#">{{ post.views }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:basis-5/12">
          <div class="uppercase mb-12">
            <h3 class="text-3xl font-medium capitalize">FAQS</h3>
          </div>

          <div class="join join-vertical w-full rounded-none shadow-sm">
            <div
              class="collapse collapse-arrow join-item border-base-300 border"
              v-for="(item, index) in data.faq"
            >
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div class="collapse-title text-xl font-medium">
                {{ item.question }}
              </div>
              <div class="collapse-content bg-base-100 pt-4">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="#"
            class="inline-flex items-center text-[#6c757d] uppercase mt-6 text-sm"
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
      <Clients />
    </div>
    <img
      src="/blog/v_lines.png"
      alt=""
      class="hidden lg:block absolute top-24 left-1/2 h-[calc(100%-340px)] -translate-x-1/2"
    />
  </section>
</template>

<script setup>
// import data from "../data/blog.json";

const data = await $fetch("https://wp.meftihe.com/wp-json/wp/v2/posts");

console.log(data);
</script>

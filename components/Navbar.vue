<template>
  <div
    class="navbar top-0 w-full z-10 bg-transparent absolute z-1000 text-white md:px-28 md:py-5"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn-ghost inline-flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>

      <nuxt-link to="/" class="flex items-center">
        <img
          src="/meftihe-logo-white.svg"
          alt="Meftihe logo"
          class="w-12 md:w-28"
        />
        <div
          class="ml-1 space-y-0 flex md:flex-col items-center md:items-baseline gap-2 lg:gap-0"
        >
          <h3 class="text-white lg:text-xl leading-none">Meftihe</h3>
          <span class="text-white lg:text-sm leading-none">IT Solutions</span>
        </div>
      </nuxt-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 [&_li>*]:rounded-full space-x-1">
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <label class="swap swap-flip">
        <input
          type="checkbox"
          ref="themeToggler"
          @change="toggleColorMode"
          aria-label="Toggle dark mode"
        />

        <Icon
          name="material-symbols:wb-sunny-outline-rounded"
          class="swap-on h-5 w-5"
        />
        <Icon
          name="material-symbols:dark-mode-outline-rounded"
          class="swap-off h-5 w-5"
        />
        <Icon name="ic:baseline-monitor" class="swap-indeterminate h-5 w-5" />
      </label>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const themeToggler = ref(null);

onMounted(() => {
  if (colorMode.preference === 'system') {
    themeToggler.value.checked = false;
    themeToggler.value.indeterminate = true;
  } else if (colorMode.preference === 'dark') {
    themeToggler.value.checked = true;
  } else {
    themeToggler.value.checked = false;
  }
});

const toggleColorMode = () => {
  if (colorMode.preference === 'system') {
    themeToggler.value.checked = false;
    colorMode.preference = 'light';
  } else if (colorMode.preference === 'light') {
    themeToggler.value.checked = true;
    colorMode.preference = 'dark';
  } else {
    themeToggler.value.checked = false;
    themeToggler.value.indeterminate = true;
    colorMode.preference = 'system';
  }
};
</script>

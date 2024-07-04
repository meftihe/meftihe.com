<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark style-3 position-absolute w-100"
    ref="navbarRef"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/assets/img/logo_ll.png" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
          <li
            class="nav-item dropdown"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <a
              class="nav-link active dropdown-toggle"
              href="#"
              id="navbarDropdown1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Homes
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <NuxtLink to="/" class="dropdown-item"
                  >Landing Preview</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-it-solutions2" class="dropdown-item">
                  Creative It Solutions</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-data-analysis" class="dropdown-item">
                  Data Analysis</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-app-landing" class="dropdown-item"
                  >App Landing</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-saas-technology" class="dropdown-item"
                  >Saas Technology</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-marketing-startup" class="dropdown-item"
                  >Marketing Startup</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-it-solutions" class="dropdown-item"
                  >It Solution</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-software-company" class="dropdown-item"
                  >Software Company</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-digital-agency" class="dropdown-item"
                  >Digital Agency</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/home-shop-modern" class="dropdown-item">
                  Modren Shop</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li
            class="nav-item dropdown"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              pages
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li>
                <NuxtLink to="/page-about-5" class="dropdown-item"
                  >about</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/page-product-5" class="dropdown-item"
                  >product</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/page-services-5" class="dropdown-item"
                  >services</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/page-shop-5" class="dropdown-item"
                  >shop</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/page-single-project-5" class="dropdown-item"
                  >single project</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-portfolio-5" class="nav-link">
              portfolio
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-blog-5" class="nav-link"> blog </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/page-contact-5" class="nav-link"> contact </NuxtLink>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-flex ps-4">
            <a href="#" class="search-icon me-5">
              <Icon name="bi:search" class="text-white"></Icon>
            </a>
            <div
              class="dropdown"
              @mousemove="handleMouseMove"
              @mouseleave="handleMouseLeave"
            >
              <button
                class="icon-35 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover text-white"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="/assets/img/lang.png" alt="" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">Arabic</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
function handleMouseMove(e) {
  const dropDownToggler = e.target.classList.contains('dropdown-toggle')
    ? e.target
    : e.target.querySelector('.dropdown-toggle');
  const dropDownMenu = dropDownToggler.nextElementSibling;

  dropDownToggler.classList.add('show');
  dropDownMenu.classList.add('show');
}

function handleMouseLeave(e) {
  const dropdown = e.target.classList.contains('dropdown')
    ? e.target
    : e.target.closest('.dropdown');
  const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
  const dropDownMenu = dropdown.querySelector('.dropdown-menu');

  dropDownToggler.classList.remove('show');
  dropDownMenu.classList.remove('show');
}
</script>

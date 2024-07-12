<template>
  <!-- <nav
    class="py-5 flex flex-wrap justify-between align-center grow-1 absolute w-full"
    ref="navbarRef"
  >
    <div class="container">
      <a class="d-flex align-items-center" href="#">
        <img src="/meftihe-logo-white.svg" alt="Meftihe logo" class="w-28" />
        <div class="ms-2 lh-1">
          <h3 class="text-white lh-1">Meftihe</h3>
          <span class="text-white">IT Solutions</span>
        </div>
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
                <NuxtLink to="#" class="dropdown-item"> Data Analysis</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="dropdown-item">App Landing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="dropdown-item"
                  >Software Company</NuxtLink
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
                <NuxtLink to="#" class="dropdown-item">about</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="dropdown-item">product</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="dropdown-item">services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="dropdown-item">shop</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="dropdown-item">single project</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link"> portfolio </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link"> blog </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link"> contact </NuxtLink>
          </li>
        </ul>
        <div class="nav-side">
          <div class="d-inline-flex align-items-center ps-4">
            <a href="#" class="search-icon me-4">
              <Icon name="bi:search" class="text-white"></Icon>
            </a>
            <div
              class="dropdown"
              @mousemove="handleMouseMove"
              @mouseleave="handleMouseLeave"
            >
              <button
                class="d-inline-flex dropdown-toggle border-0 p-0 bg-transparent img-cover text-white"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Icon name="ion:language" size="20"></Icon>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">English</a></li>
                <li><a class="dropdown-item" href="#">አማርኛ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav> -->
  <div
    class="navbar top-0 w-full z-10 bg-transparent absolute z-1000 text-white md:px-28"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
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
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">Button</a>
    </div>
  </div>
</template>

<template>
  <div
    class="navbar top-0 w-full z-10 bg-transparent absolute z-1000 text-white md:px-28 md:py-10"
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

      <a class="flex items-center" href="#">
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
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 [&_li>*]:rounded-full">
        <li class="hover:bg-base-200 rounded-full">
          <a>Item 1</a>
        </li>
        <li>
          <details>
            <summary class="rounded-full hover:bg-base-200">Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li class="hover:bg-base-200 rounded-full"><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn btn-sm md:btn-md">Button</a>
    </div>
  </div>
</template>

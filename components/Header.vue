<template>
  <header
    class="bg-[#4a00e1] relative pt-24 px-0 pb-8 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-2/3 before:w-full before:bg-[url('0011.png')] before:bg-80 before:bg-repeat before:opacity-[0.08] before:bg-bottom before:filter before:invert before:sepia-0 before:saturate-0 before:hue-rotate-90 before:brightness-max before:contrast-100 w-full"
    data-scroll-index="0"
  >
    <div class="px-4 md:px-28">
      <div class="py-24 flex flex-wrap z-5">
        <div class="lg:w-5/12">
          <div class="info">
            <h1 class="text-5xl font-bold leading-tight text-white">
              Make life easier with help from
              <span
                class="italic relative font-medium before:content-[''] before:absolute before:left-0 before:top-full before:w-40 before:h-[30px] before:bg-[url('infoh1line.png')] before:bg-160 before:bg-no-repeat before:bg-left"
                >Meftihe</span
              >
            </h1>
            <p class="mt-[40px] text-slate-300">
              We help businesses elevate their value through custom software
              development, product design, QA & consultancy services.
            </p>
            <h5
              class="mt-14 font-bold text-base-100 relative before:content-[''] before:absolute before:-left-16 before:-bottom-2 before:w-12 before:h-24 before:bg-[url('head3_arrow.png')] before:bg-contain before:bg-no-repeat before:bg-center"
            >
              Get Free Quote!
              <span class="font-normal ms-1">We’ll contact back in 24h</span>
            </h5>
            <form action="contact.php" class="form mt-30" method="post">
              <div class="flex space-x-2">
                <label
                  class="input input-bordered rounded-full flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                  >
                    <path
                      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                    />
                    <path
                      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                    />
                  </svg>
                  <input type="text" class="grow" placeholder="Email" />
                </label>
                <select class="select select-bordered grow rounded-full">
                  <option disabled selected>Who shot first?</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <button class="btn btn-neutral btn-block rounded-full mt-4">
                <span>Request A Consultation</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute hidden lg:block right-0 top-[100px] w-7/12 h-[calc(100%-250px)] object-contain object-right z-0"
    >
      <img
        src="/assets/img/header/header_3.png"
        class="absolute w-full h-full"
      />
      <img
        src="/assets/img/header/header_3_c.png"
        class="absolute w-[55%] top-[10.5%] right-[20%] animate-[rotate-center_100s_linear_infinite_both]"
      />
    </div>
  </header>
</template>
